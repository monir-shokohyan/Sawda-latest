import { useState, useCallback } from 'react'
import { Button, Stack, Group, Slider, Text, ScrollArea } from '@mantine/core'
import Cropper, { Area } from 'react-easy-crop'
import { HModal, SButton } from '@shared/styles'
import { Logo } from '@shared/ui/logo'
import { Controls, CropContainer, Segmented } from '../styles'
import { Responsive } from '@shared/hooks/responsive'
import { ImageEditorProps, Point } from '../types'

export const ImageEditor = ({
  opened,
  onClose,
  imageSrc,
  onSave,
}: ImageEditorProps) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const { isMobile } = Responsive()
  const [rotation, setRotation] = useState(0)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
  const [aspect, setAspect] = useState<number | undefined>(4 / 3)
  const [editMode, setEditMode] = useState<'crop' | 'rotate' | 'zoom'>('crop')

  const onCropComplete = useCallback(
    (_croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels)
    },
    [],
  )

  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const image = new Image()
      image.addEventListener('load', () => resolve(image))
      image.addEventListener('error', (error) => reject(error))
      image.setAttribute('crossOrigin', 'anonymous')
      image.src = url
    })

  const getRadianAngle = (degreeValue: number) => {
    return (degreeValue * Math.PI) / 180
  }

  const rotateSize = (width: number, height: number, rotation: number) => {
    const rotRad = getRadianAngle(rotation)
    return {
      width:
        Math.abs(Math.cos(rotRad) * width) +
        Math.abs(Math.sin(rotRad) * height),
      height:
        Math.abs(Math.sin(rotRad) * width) +
        Math.abs(Math.cos(rotRad) * height),
    }
  }

  const getCroppedImg = async (
    imageSrc: string,
    pixelCrop: Area,
    rotation = 0,
    flip = { horizontal: false, vertical: false },
  ): Promise<string> => {
    const image = await createImage(imageSrc)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    if (!ctx) {
      throw new Error('No 2d context')
    }

    const rotRad = getRadianAngle(rotation)

    // calculate bounding box of the rotated image
    const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
      image.width,
      image.height,
      rotation,
    )

    // set canvas size to match the bounding box
    canvas.width = bBoxWidth
    canvas.height = bBoxHeight

    // translate canvas context to a central location to allow rotating and flipping around the center
    ctx.translate(bBoxWidth / 2, bBoxHeight / 2)
    ctx.rotate(rotRad)
    ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1)
    ctx.translate(-image.width / 2, -image.height / 2)

    // draw rotated image
    ctx.drawImage(image, 0, 0)

    // croppedAreaPixels values are bounding box relative
    // extract the cropped image using these values
    const data = ctx.getImageData(
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
    )

    // set canvas width to final desired crop size - this will clear existing context
    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height

    // paste generated rotate image at the top left corner
    ctx.putImageData(data, 0, 0)

    // As a blob
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error('Canvas is empty'))
          return
        }
        const fileUrl = URL.createObjectURL(blob)
        resolve(fileUrl)
      }, 'image/jpeg')
    })
  }

  const handleSave = async () => {
    if (!croppedAreaPixels) return

    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation,
      )
      onSave(croppedImage)
      onClose()
      // Reset states
      setCrop({ x: 0, y: 0 })
      setZoom(1)
      setRotation(0)
      setAspect(4 / 3)
    } catch (e) {
      console.error('Error cropping image:', e)
    }
  }

  const handleReset = () => {
    setCrop({ x: 0, y: 0 })
    setZoom(1)
    setRotation(0)
    setAspect(4 / 3)
  }

  const handleClose = () => {
    handleReset()
    onClose()
  }

  return (
    <HModal
      opened={opened}
      onClose={handleClose}
      title={<Logo />}
      size="xl"
      centered
      fullScreen={isMobile ? true : false}
      transitionProps={{ transition: 'fade', duration: 200 }}
    >
      <ScrollArea
        h="100dvh"
        scrollbars="y"
        scrollbarSize={4}
      >
        <Stack
          gap="md"
          p="md"
        >
          <Segmented
            value={editMode}
            onChange={(value) =>
              setEditMode(value as 'crop' | 'rotate' | 'zoom')
            }
            data={[
              { label: 'Crop', value: 'crop' },
              { label: 'Rotate', value: 'rotate' },
              { label: 'Zoom', value: 'zoom' },
            ]}
            fullWidth
          />

          <CropContainer>
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              rotation={rotation}
              aspect={aspect}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              onRotationChange={setRotation}
            />
          </CropContainer>

          <Controls>
            <Stack gap="lg">
              {editMode === 'crop' && (
                <>
                  <div>
                    <Text
                      size="sm"
                      mb={5}
                    >
                      Aspect Ratio
                    </Text>
                    <Segmented
                      value={aspect?.toString() || 'free'}
                      onChange={(value) => {
                        if (value === 'free') setAspect(undefined)
                        else setAspect(parseFloat(value))
                      }}
                      data={[
                        { label: 'Free', value: 'free' },
                        { label: '1:1', value: '1' },
                        { label: '4:3', value: String(4 / 3) },
                        { label: '16:9', value: String(16 / 9) },
                      ]}
                      fullWidth
                    />
                  </div>
                </>
              )}

              {editMode === 'zoom' && (
                <div>
                  <Text
                    size="sm"
                    mb={5}
                  >
                    Zoom: {zoom.toFixed(1)}x
                  </Text>
                  <Slider
                    value={zoom}
                    onChange={setZoom}
                    min={1}
                    max={3}
                    step={0.1}
                    label={(value) => `${value.toFixed(1)}x`}
                  />
                </div>
              )}

              {editMode === 'rotate' && (
                <div>
                  <Text
                    size="sm"
                    mb={5}
                  >
                    Rotation: {rotation}°
                  </Text>
                  <Slider
                    value={rotation}
                    onChange={setRotation}
                    min={0}
                    max={360}
                    step={1}
                    label={(value) => `${value}°`}
                    marks={[
                      { value: 0, label: '0°' },
                      { value: 90, label: '90°' },
                      { value: 180, label: '180°' },
                      { value: 270, label: '270°' },
                      { value: 360, label: '360°' },
                    ]}
                  />
                </div>
              )}
            </Stack>
          </Controls>

          <Group
            justify="space-between"
            mt="md"
          >
            <Button
              variant="subtle"
              onClick={handleReset}
            >
              Reset
            </Button>
            <Group>
              <Button
                variant="default"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <SButton onClick={handleSave}>Save Changes</SButton>
            </Group>
          </Group>
        </Stack>
      </ScrollArea>
    </HModal>
  )
}
