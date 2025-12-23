import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaEllipsisV } from 'react-icons/fa';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Stack } from '@mantine/core';
import { GradientContainer } from '@shared/ui/containers';




const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  background: #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 220px;
  }
`;

const PlaceholderImage = styled.div`
  width: 80px;
  height: 80px;
  border: 3px solid #333;
  border-radius: 4px;
  position: relative;

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    border: 2px solid #333;
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 30px solid #333;
    left: 15px;
    top: 15px;

    @media (max-width: 480px) {
      border-left: 18px solid transparent;
      border-right: 18px solid transparent;
      border-bottom: 22px solid #333;
      left: 12px;
      top: 10px;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #333;
    right: 15px;
    top: 15px;

    @media (max-width: 480px) {
      width: 12px;
      height: 12px;
      right: 10px;
      top: 10px;
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-bottom: 1px solid #e8e8e8;

  @media (max-width: 480px) {
    padding: 10px 12px;
    gap: 8px;
  }
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #4a90e2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 14px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    font-size: 12px;
  }
`;

const UserDetails = styled.div`
  flex: 1;
`;

const Username = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #333;
`;

const Timestamp = styled.div`
  font-size: 12px;
  color: #666;
`;

const Content = styled.div`
  padding: 16px;

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const Title = styled.h3`
  font-size: 14px;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 480px) {
    font-size: 13px;
    margin: 0 0 6px 0;
  }
`;

const PriceRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
`;

const Price = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #333;
`;

const OriginalPrice = styled.span`
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
`;

const Status = styled.div`
  font-size: 12px;
  color: #666;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-top: 1px solid #e8e8e8;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: #666;
  display: flex;
  align-items: center;
  transition: color 0.2s;

  &:hover {
    color: #333;
  }

  &.liked {
    color: #e74c3c;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #4a90e2;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const EndMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 14px;
`;

interface Product {
  id: number;
  username: string;
  timestamp: string;
  title: string;
  price: string;
  originalPrice: string;
  status: string;
  liked: boolean;
}

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

const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

const Ui = () => {
  const [products, setProducts] = useState<Product[]>(generateProducts(0, 16));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    setTimeout(() => {
      const newProducts = generateProducts(products.length, 16);
      setProducts(prev => [...prev, ...newProducts]);
      
      if (products.length >= 64) {
        setHasMore(false);
      }
    }, 1000);
  };

  const toggleLike = (id: number) => {
    setProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, liked: !p.liked } : p))
    );
  };

  const productChunks = chunkArray(products, 16);

  return (
    <Stack 
      w="100%"
      justify="center"
    >
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <LoadingContainer>
            <Spinner />
          </LoadingContainer>
        }
        endMessage={
          <EndMessage>
            <p>You've reached the end! 🎉</p>
          </EndMessage>
        }
      >
        {productChunks.map((chunk, chunkIndex) => {
          const direction = chunkIndex % 2 === 0 ? 'bottom-to-top' : 'top-to-bottom';
          
          return (
            <GradientContainer key={chunkIndex} gDirection={direction}            
              px={{ base: 'lg', sm: 'lg', md: 'lg', lg: '50px' }}>
              <Grid>
                {chunk.map(product => (
                  <Card key={product.id}>
                    <UserInfo>
                      <Avatar>{product.username.charAt(0).toUpperCase()}</Avatar>
                      <UserDetails>
                        <Username>{product.username}</Username>
                        <Timestamp>{product.timestamp}</Timestamp>
                      </UserDetails>
                    </UserInfo>
                    
                    <ImageContainer>
                      <PlaceholderImage />
                    </ImageContainer>
                    
                    <Content>
                      <Title>{product.title}</Title>
                      <PriceRow>
                        <Price>{product.price}</Price>
                        <OriginalPrice>{product.originalPrice}</OriginalPrice>
                      </PriceRow>
                      <Status>{product.status}</Status>
                    </Content>
                    
                    <Actions>
                      <IconButton
                        className={product.liked ? 'liked' : ''}
                        onClick={() => toggleLike(product.id)}
                      >
                        {product.liked ? <FaHeart size={18} /> : <FaRegHeart size={18} />}
                      </IconButton>
                      <IconButton>
                        <FaEllipsisV size={16} />
                      </IconButton>
                    </Actions>
                  </Card>
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