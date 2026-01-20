import React from 'react'
import styled from 'styled-components'
import { Container, Skeleton, Group } from '@mantine/core'

const PageWrapper = styled.div`
  background: #f0f0f0;
  min-height: 100vh;
  padding: 20px 0;
`

const Header = styled.div`
  background: white;
  padding: 16px 0;
  margin-bottom: 90px;
  margin-top: 40px;
`

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
  margin-bottom: 60px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
`

const CategoryCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const BannerSection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 60px 40px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`

const BannerContent = styled.div`
  position: relative;
  z-index: 1;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin: 40px 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
`

const FeatureItem = styled.div`
  text-align: center;
`

const HomePageSkeleton: React.FC = () => {
  const categories = Array(12).fill(null)

  return (
    <PageWrapper>
      {/* Header with Search */}
      <Header>
        <SearchBar>
          <Skeleton
            height={48}
            width={48}
            radius="md"
          />
          <Skeleton
            height={48}
            style={{ flex: 1 }}
            radius="md"
          />
          <Skeleton
            height={48}
            width={100}
            radius="md"
          />
        </SearchBar>
      </Header>

      <Container size="xl">
        {/* Categories Grid */}
        <CategoriesGrid>
          {categories.map((_, idx) => (
            <CategoryCard key={idx}>
              <Skeleton
                height={20}
                width="70%"
                radius="sm"
              />
              <Skeleton
                height={20}
                radius="sm"
              />
            </CategoryCard>
          ))}
        </CategoriesGrid>

        {/* Banner Section */}
        <BannerSection>
          <BannerContent>
            {/* Main Heading */}
            <Group
              justify="center"
              mb="md"
            >
              <Skeleton
                height={40}
                width="60%"
                radius="sm"
              />
            </Group>

            {/* Subheading */}
            <Group
              justify="center"
              mb={40}
            >
              <Skeleton
                height={20}
                width="45%"
                radius="sm"
              />
            </Group>

            {/* Features Grid */}
            <FeaturesGrid>
              <FeatureItem>
                <Skeleton
                  height={50}
                  width={50}
                  circle
                  mb="md"
                  style={{ margin: '0 auto 16px' }}
                />
                <Skeleton
                  height={24}
                  width="80%"
                  mb="sm"
                  style={{ margin: '0 auto 8px' }}
                />
                <Skeleton
                  height={16}
                  width="90%"
                  style={{ margin: '0 auto' }}
                />
              </FeatureItem>

              <FeatureItem>
                <Skeleton
                  height={50}
                  width={50}
                  circle
                  mb="md"
                  style={{ margin: '0 auto 16px' }}
                />
                <Skeleton
                  height={24}
                  width="80%"
                  mb="sm"
                  style={{ margin: '0 auto 8px' }}
                />
                <Skeleton
                  height={16}
                  width="90%"
                  style={{ margin: '0 auto' }}
                />
              </FeatureItem>

              <FeatureItem>
                <Skeleton
                  height={50}
                  width={50}
                  circle
                  mb="md"
                  style={{ margin: '0 auto 16px' }}
                />
                <Skeleton
                  height={24}
                  width="80%"
                  mb="sm"
                  style={{ margin: '0 auto 8px' }}
                />
                <Skeleton
                  height={16}
                  width="90%"
                  style={{ margin: '0 auto' }}
                />
              </FeatureItem>

              <FeatureItem>
                <Skeleton
                  height={50}
                  width={50}
                  circle
                  mb="md"
                  style={{ margin: '0 auto 16px' }}
                />
                <Skeleton
                  height={24}
                  width="80%"
                  mb="sm"
                  style={{ margin: '0 auto 8px' }}
                />
                <Skeleton
                  height={16}
                  width="90%"
                  style={{ margin: '0 auto' }}
                />
              </FeatureItem>
            </FeaturesGrid>

            {/* CTA Text */}
            <Group
              justify="center"
              mt={40}
            >
              <Skeleton
                height={28}
                width="50%"
                radius="sm"
              />
            </Group>
          </BannerContent>
        </BannerSection>
      </Container>
    </PageWrapper>
  )
}

export { HomePageSkeleton }
