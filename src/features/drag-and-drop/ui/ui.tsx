import { useDropDown } from '../modal'
import { DragAndDropProps } from '../types'
import {
  Description,
  ImagePreviewItem,
  ImagePreviewWrapper,
  SDropzone,
  Wrapper,
} from '../styles'
import { Group, Image, SimpleGrid, Text } from '@mantine/core'
import { FaDownload } from 'react-icons/fa'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { MdCancel, MdOutlineFileUpload, MdCropRotate } from 'react-icons/md'
import { HoveredActionIcon, SButton } from '@shared/styles'
import { MIME_TYPES } from '@mantine/dropzone'
import { ImageEditor } from './imageEditor'

const Ui = ({
  images,
  setImages,
  maxFiles = 4,
  maxSize = 10,
}: DragAndDropProps) => {
  const {
    removeImage,
    isCompressing,
    openRef,
    theme,
    handleDrop,
    handleSaveEdit,
    editingImage,
    setEditingImage,
    isDark,
  } = useDropDown({ images, setImages })

  return (
    <>
      <Wrapper>
        <SDropzone
          openRef={openRef}
          onDrop={handleDrop}
          radius="md"
          accept={[MIME_TYPES.jpeg, MIME_TYPES.png, MIME_TYPES.webp]}
          maxSize={maxSize * 1024 ** 2}
          maxFiles={maxFiles - images.length}
          aria-label="Drop photos here"
          loading={isCompressing}
        >
          <div style={{ pointerEvents: 'none' }}>
            <Group
              justify="center"
              p="xs"
            >
              <SDropzone.Accept>
                <FaDownload
                  size={50}
                  color={theme.colors.primary[8]}
                />
              </SDropzone.Accept>
              <SDropzone.Reject>
                <MdCancel
                  size={50}
                  color={theme.colors.red[6]}
                />
              </SDropzone.Reject>
              <SDropzone.Idle>
                <MdOutlineFileUpload
                  size={50}
                  color={theme.colors.primary[8]}
                />
              </SDropzone.Idle>
            </Group>

            <Text
              ta="center"
              fw={700}
              fz="lg"
              mt="sm"
              c="darkText"
            >
              <SDropzone.Accept>Drop files here</SDropzone.Accept>
              <SDropzone.Reject>
                Image file less than {maxSize}mb
              </SDropzone.Reject>
              <SDropzone.Idle>
                {isCompressing
                  ? 'Compressing images...'
                  : 'Drag & drop to Upload'}
              </SDropzone.Idle>
            </Text>

            <Description>
              Drag & drop photos here to upload. We can accept <i>.jpeg</i>,{' '}
              <i>.png</i>, and <i>.webp</i> photos that are less than {maxSize}
              mb in size.{' '}
              {images.length < maxFiles &&
                `Maximum ${maxFiles - images.length} more photos.`}
            </Description>
          </div>
        </SDropzone>

        <SButton
          size="md"
          radius="xl"
          onClick={() => openRef.current?.()}
          disabled={images.length >= maxFiles || isCompressing}
          maw={250}
        >
          {isCompressing ? 'Compressing...' : 'Select photos'}
        </SButton>
      </Wrapper>

      {images.length > 0 && (
        <ImagePreviewWrapper>
          <Text
            fw={600}
            mb="sm"
            c="darkText"
          >
            Uploaded Photos ({images.length}/{maxFiles})
          </Text>
          <SimpleGrid
            cols={2}
            spacing="sm"
          >
            {images.map((image) => (
              <ImagePreviewItem
                key={image.id}
                $isDark={isDark}
              >
                <Group
                  pos="absolute"
                  p={5}
                  gap={5}
                  w="100%"
                  justify="flex-end"
                >
                  <HoveredActionIcon
                    onClick={() =>
                      setEditingImage({
                        id: image.id,
                        src: image.preview,
                        name: image.file.name,
                      })
                    }
                    aria-label="Edit image"
                    variant="subtle"
                    c="white"
                    style={{
                      backdropFilter: 'brightness(40%)',
                    }}
                  >
                    <MdCropRotate size={14} />
                  </HoveredActionIcon>
                  <HoveredActionIcon
                    onClick={() => removeImage(image.id)}
                    aria-label="Remove image"
                    variant="subtle"
                    c="white"
                    style={{
                      backdropFilter: 'brightness(40%)',
                    }}
                  >
                    <RiDeleteBin5Line size={14} />
                  </HoveredActionIcon>
                </Group>

                <Image
                  src={image.preview}
                  alt="Preview"
                  fit="cover"
                  h="100%"
                  aria-label="info images with compression"
                />
              </ImagePreviewItem>
            ))}
          </SimpleGrid>
        </ImagePreviewWrapper>
      )}

      {editingImage && (
        <ImageEditor
          opened={!!editingImage}
          onClose={() => setEditingImage(null)}
          imageSrc={editingImage.src}
          onSave={handleSaveEdit(editingImage.id)}
          fileName={editingImage.name}
        />
      )}
    </>
  )
}

export { Ui }
