import { useState } from 'react';
import { FaHeart, FaRegHeart, FaEllipsisV } from 'react-icons/fa';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Stack, Grid, Card as MantineCard, Avatar, Text, Group, ActionIcon, rem } from '@mantine/core';
import { GradientContainer } from '@shared/ui/containers';
import { LoaderSpinner, StyledImageContainer, StyledPlaceholderImage } from '../styles';
import { Product } from '../types';


const ImageContainer = () => (
  <StyledImageContainer>
    <StyledPlaceholderImage />
  </StyledImageContainer>
);


const generateProducts = (start: number, count: number): Product[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: start + i,
    username: 'abraham534',
    timestamp: '3 days ago',
    title: 'Wooden Sofa Set with Green Floral Cushions, RRP$3998, 6 months old ...',
    price: 'S$99',
    originalPrice: 'S$442',
    status: 'Likely new',
    liked: false,
  }));
};

const Ui = () => {
  const [products, setProducts] = useState<Product[]>(generateProducts(0, 16));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    setTimeout(() => {
      const newProducts = generateProducts(products.length, 16);
      setProducts((prev) => [...prev, ...newProducts]);

      if (products.length + newProducts.length >= 64) {
        setHasMore(false);
      }
    }, 1000);
  };

  const toggleLike = (id: number) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, liked: !p.liked } : p))
    );
  };

  const chunkArray = <T,>(array: T[], size: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const productChunks = chunkArray(products, 16);

  return (
    <Stack w="100%" justify="center">
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <Group justify="center" py="xl">
            <LoaderSpinner />
          </Group>
        }
        endMessage={
          <Text ta="center" py="xl" c="dimmed">
            You've reached the end! 🎉
          </Text>
        }
      >
        {productChunks.map((chunk, chunkIndex) => {
          const direction = chunkIndex % 2 === 0 ? 'bottom-to-top' : 'top-to-bottom';

          return (
            <GradientContainer
              key={chunkIndex}
              gDirection={direction}
              px={{ base: 'lg', sm: 'lg', md: 'lg', lg: '50px' }}
              pb={{ base: 12, sm: 16, md: 20 }}
            >
              <Grid gutter={{ base: 12, sm: 16, md: 20 }}>
                {chunk.map((product) => (
                  <Grid.Col
                    key={product.id}
                    span={{ base: 12, sm: 6, md: 4, lg: 3 }}
                  >
                    <MantineCard
                      shadow="sm"
                      padding="0"
                      radius="md"
                      withBorder={false}
                      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                      <Group px="md" py="sm" style={{ borderBottom: '1px solid #e8e8e8' }}>
                        <Avatar color="blue" radius="xl" size="sm">
                          {product.username.charAt(0).toUpperCase()}
                        </Avatar>
                        <div style={{ flex: 1 }}>
                          <Text fw={600} size="sm">
                            {product.username}
                          </Text>
                          <Text size="xs" c="dimmed">
                            {product.timestamp}
                          </Text>
                        </div>
                      </Group>

                      <ImageContainer />

                      <div style={{ padding: '16px', flexGrow: 1 }}>
                        <Text
                          size="sm"
                          fw={500}
                          lineClamp={2}
                          mb="xs"
                        >
                          {product.title}
                        </Text>
                        <Group gap="xs" mb="xs">
                          <Text size="lg" fw={700}>
                            {product.price}
                          </Text>
                          <Text size="sm" c="dimmed" td="line-through">
                            {product.originalPrice}
                          </Text>
                        </Group>
                        <Text size="xs" c="dimmed">
                          {product.status}
                        </Text>
                      </div>

                      <Group
                        justify="space-between"
                        px="md"
                        py="xs"
                        style={{ borderTop: '1px solid #e8e8e8' }}
                      >
                        <ActionIcon
                          variant="subtle"
                          color={product.liked ? 'red' : 'gray'}
                          onClick={() => toggleLike(product.id)}
                        >
                          {product.liked ? <FaHeart size={18} /> : <FaRegHeart size={18} />}
                        </ActionIcon>
                        <ActionIcon variant="subtle" color="gray">
                          <FaEllipsisV size={16} />
                        </ActionIcon>
                      </Group>
                    </MantineCard>
                  </Grid.Col>
                ))}
              </Grid>
            </GradientContainer>
          );
        })}
      </InfiniteScroll>
    </Stack>
  );
};

export { Ui };