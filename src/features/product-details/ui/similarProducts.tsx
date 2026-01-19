import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Stack, Grid } from '@mantine/core'; // assuming you're using Mantine
import { ProductCard } from '@shared/ui/product-card/productCard';
import { ResText } from '@shared/styles';
import { Content, IconWrapper, TitleWrapper } from '../styles';

const ProductsMaps =  Array.from({ length: 9 }, (_, i) => ({
    id: i,
    username: 'abraham534',
    timestamp: '3 days ago',
    title:
      'Wooden Sofa Set with Green Floral Cushions, RRP$3998, 6 months old ...',
    price: 'S$99',
    originalPrice: 'S$442',
    status: 'Likely new',
    liked: false,
  }))



export function SimilarAdsSection() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <Stack mt={20} pb={10} >

      <TitleWrapper onClick={toggleOpen}>
        <ResText fontSize={26}>Similar advertisements</ResText>
        <IconWrapper $isOpen={isOpen} variant="transparent">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </IconWrapper>
      </TitleWrapper>

      <Content $isOpen={isOpen}>
        <Grid gutter={{ base: 12, sm: 16, md: 20 }}>
          {ProductsMaps.map((product) => (
            <Grid.Col
              key={product.id}
              span={{ base: 6, sm: 6, md: 4, lg: 4 }}
            >
              <ProductCard
                product={product}
                handeToggleLike={() => console.log('')}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Content>

    </Stack>
  );
}