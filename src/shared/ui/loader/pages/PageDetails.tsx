import { Container, Grid, Group, Skeleton, Stack } from '@mantine/core'
import styled from 'styled-components'

const PageWrapper = styled.div`
  background: #f5f5f5;
  min-height: 100vh;
  padding: 20px;
`

const Breadcrumb = styled.div`
  margin-bottom: 20px;
`

const ListingCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`

const Thumbnails = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  margin-top: 16px;
`

const SidebarCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`

const QuickQuestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`

const ProductDetails: React.FC = () => {
  return (
    <PageWrapper>
      <Container
        size="xl"
        mt={40}
      >
        <Breadcrumb>
          <Skeleton
            height={20}
            width={200}
            radius="sm"
          />
        </Breadcrumb>

        <Grid gutter="lg">
          <Grid.Col span={{ base: 12, md: 8 }}>
            <ListingCard>
              <Skeleton
                height={32}
                width="80%"
                mb="md"
                radius="sm"
              />

              <Group
                gap="xs"
                mb="lg"
              >
                <Skeleton
                  height={36}
                  width={160}
                  radius="sm"
                />
                <Skeleton
                  height={36}
                  width={130}
                  radius="sm"
                />
              </Group>

              <Skeleton
                height={450}
                radius="sm"
                mb="md"
              />

              <Thumbnails>
                <Skeleton
                  height={80}
                  radius="sm"
                />
                <Skeleton
                  height={80}
                  radius="sm"
                />
                <Skeleton
                  height={80}
                  radius="sm"
                />
                <Skeleton
                  height={80}
                  radius="sm"
                />
                <Skeleton
                  height={80}
                  radius="sm"
                />
                <Skeleton
                  height={80}
                  radius="sm"
                />
              </Thumbnails>
            </ListingCard>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="md">
              <SidebarCard>
                <Skeleton
                  height={40}
                  width="60%"
                  mb="lg"
                  radius="sm"
                />
                <Skeleton
                  height={48}
                  width="100%"
                  mb="sm"
                  radius="sm"
                />
                <Skeleton
                  height={48}
                  width="100%"
                  mb="lg"
                  radius="sm"
                />
                <div
                  style={{
                    height: '1px',
                    background: '#eee',
                    margin: '20px 0',
                  }}
                />
                <Group
                  gap="sm"
                  mb="md"
                >
                  <Skeleton
                    height={50}
                    width={50}
                    circle
                  />
                  <div style={{ flex: 1 }}>
                    <Skeleton
                      height={20}
                      width="60%"
                      mb="xs"
                      radius="sm"
                    />
                    <Skeleton
                      height={16}
                      width="80%"
                      radius="sm"
                    />
                  </div>
                </Group>
                <Skeleton
                  height={40}
                  width="100%"
                  radius="sm"
                />
              </SidebarCard>

              <SidebarCard>
                <Skeleton
                  height={24}
                  width="40%"
                  mb="md"
                  radius="sm"
                />
                <Skeleton
                  height={40}
                  width="100%"
                  mb="md"
                  radius="sm"
                />

                <QuickQuestions>
                  <Skeleton
                    height={36}
                    width={150}
                    radius="xl"
                  />
                  <Skeleton
                    height={36}
                    width={180}
                    radius="xl"
                  />
                  <Skeleton
                    height={36}
                    width={140}
                    radius="xl"
                  />
                  <Skeleton
                    height={36}
                    width={170}
                    radius="xl"
                  />
                </QuickQuestions>
              </SidebarCard>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </PageWrapper>
  )
}

export { ProductDetails }
