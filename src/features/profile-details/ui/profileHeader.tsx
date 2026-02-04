import { SCenter } from '../styles'
import { GradientContainer } from '@shared/ui/containers'
import {
  BackgroundImage,
  Flex,
  Group,
  Stack,
  useMantineTheme,
} from '@mantine/core'
import { ProfileSection } from '@features/product-card/ui/profileSection'
import { SActionIcon, ResText, SButton } from '@shared/styles'
import { FaStar } from 'react-icons/fa'
import { MdOutlineFileUpload } from 'react-icons/md'
import { Responsive } from '@shared/hooks/responsive'
import { TypographySize } from '@shared/typography'
import { ProfileConstant } from '../constant'
import { OptionMenu } from '@features/option-menu'

const ProfileHeader = () => {
  const theme = useMantineTheme()
  const { isMobile } = Responsive()

  return (
    <BackgroundImage
      src="/cover.png"
      radius="sm"
      p="md"
      pos="relative"
      h="150px"
    >
      <SCenter
        w="95%"
        pos="absolute"
        top="65%"
        left="50%"
      >
        <GradientContainer p={15}>
          <Flex
            justify={isMobile ? 'center' : 'space-between'}
            gap={20}
            wrap="wrap"
          >
            <Flex
              justify="space-between"
              w={isMobile ? '100%' : 'auto'}
            >
              <ProfileSection
                profile={ProfileConstant}
                showDetails
                showTime={false}
                size="lg"
              />

              {isMobile && (
                <Flex gap={10}>
                  <Stack
                    gap={0}
                    align="center"
                    justify="center"
                    px={10}
                  >
                    <Flex
                      justify="center"
                      align="center"
                      gap={5}
                    >
                      <ResText
                        c="textPrimary"
                        fontSize={TypographySize.Normal}
                      >
                        5.0
                      </ResText>
                      <FaStar color={theme.colors.originalBlue[8]} />
                    </Flex>
                    <ResText
                      c="textPrimary"
                      fontSize={TypographySize.Small}
                    >
                      7 reviews
                    </ResText>
                  </Stack>

                  <Stack
                    gap={0}
                    align="center"
                    justify="center"
                    style={{ borderLeft: '1px solid lightgray' }}
                    px={10}
                  >
                    <ResText
                      c="textPrimary"
                      fontSize={TypographySize.Normal}
                    >
                      1y 7d
                    </ResText>
                    <ResText
                      c="textPrimary"
                      fontSize={TypographySize.Small}
                    >
                      Joined
                    </ResText>
                  </Stack>
                </Flex>
              )}
            </Flex>

            <Group w={isMobile ? '100%' : 'auto'}>
              {!isMobile && (
                <>
                  <Stack
                    gap={0}
                    align="center"
                  >
                    <Flex
                      justify="center"
                      align="center"
                      gap={5}
                    >
                      <ResText
                        c="textPrimary"
                        fontSize={TypographySize.Normal}
                      >
                        5.0
                      </ResText>
                      <FaStar color={theme.colors.originalBlue[8]} />
                    </Flex>
                    <ResText
                      c="textPrimary"
                      fontSize={TypographySize.Small}
                    >
                      7 reviews
                    </ResText>
                  </Stack>

                  <Stack
                    gap={0}
                    px={5}
                    align="center"
                    style={{ borderLeft: '1px solid lightgray' }}
                  >
                    <ResText
                      c="textPrimary"
                      fontSize={TypographySize.Normal}
                    >
                      1y 7d
                    </ResText>
                    <ResText
                      c="textPrimary"
                      fontSize={TypographySize.Small}
                    >
                      Joined
                    </ResText>
                  </Stack>
                </>
              )}

              <SButton
                variant="outline"
                radius={20}
                size="compact-md"
                w={isMobile ? '70%' : 'auto'}
              >
                Follow
              </SButton>

              <SActionIcon
                variant="outline"
                radius="50%"
              >
                <MdOutlineFileUpload size={18} />
              </SActionIcon>

              <OptionMenu
                type="account"
                id="monir"
              />
            </Group>
          </Flex>
        </GradientContainer>
      </SCenter>
    </BackgroundImage>
  )
}

export { ProfileHeader }
