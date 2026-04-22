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
import { SActionIcon, SButton } from '@shared/styles'
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
    t,
  } = useDropDown({ images, setImages })
 console.log(images.length);
 
  return (
    <>
      <Wrapper>
        <SDropzone
          openRef={openRef}
          onDrop={(files)=>handleDrop(files,maxFiles)}
          radius="md"
          accept={[MIME_TYPES.jpeg, MIME_TYPES.png, MIME_TYPES.webp]}
          maxSize={maxSize * 1024 ** 2}
          maxFiles={maxFiles - images.length}
          aria-label={t('image.dropFiles')}
          disabled={Image.length >= 4}
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
              <SDropzone.Accept>{t('image.dragAndDrop')}</SDropzone.Accept>
              <SDropzone.Reject>
                Image file less than {maxSize}mb
              </SDropzone.Reject>
              <SDropzone.Idle>
                {isCompressing
                  ? t('image.compressingImages')
                  : t('image.dragAndDrop')}
              </SDropzone.Idle>
            </Text>

            <Description>
              {t('image.dropDescription')}
              <br/>
              {images.length < maxFiles &&
                `${maxFiles - images.length} ${t('image.maxMorePhotos')}`}
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
          {isCompressing ? t('image.compressing') : t('image.selectPhotos')}
        </SButton>
      </Wrapper>

      {images.length > 0 && (
        <ImagePreviewWrapper>
          <Text
            fw={600}
            mb="sm"
            c="darkText"
          >
            {t('image.uploadedPhotos')} ({images.length}/{maxFiles})
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
                  <SActionIcon
                    onClick={() =>
                      setEditingImage({
                        id: image.id,
                        src: image.preview,
                        name: image.file.name,
                      })
                    }
                    aria-label="Edit image"
                    variant="subtle"
                    $isSubtle
                    c="white"
                    style={{
                      backdropFilter: 'brightness(40%)',
                    }}
                  >
                    <MdCropRotate size={14} />
                  </SActionIcon>
                  <SActionIcon
                    onClick={() => removeImage(image.id)}
                    aria-label="Remove image"
                    variant="subtle"
                    $isSubtle
                    c="white"
                    style={{
                      backdropFilter: 'brightness(40%)',
                    }}
                  >
                    <RiDeleteBin5Line size={14} />
                  </SActionIcon>
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
