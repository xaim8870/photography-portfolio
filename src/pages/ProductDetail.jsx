import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Box, Heading, Text, Button, Flex, Image } from '@chakra-ui/react';

// Sample posters data (should match your Shop component's data)
const posters = [
  { id: 1, src:'/posters/01.jpg', title: 'Babusar Top', price: 30 },
  { id: 2, src:'/posters/02.jpg', title: 'Princess Of Kashmir', price: 25 },
  { id: 3, src:'/posters/03.jpg', title: 'Rising Moon', price: 25 },
  { id: 4, src:'/posters/04.jpg', title: 'The Blood Eagle', price: 20 },
  { id: 5, src:'/posters/05.jpg', title: 'The  Eagle', price: 25 },
  { id: 6, src:'/posters/06.jpg', title: 'Killer Mountain', price: 25 },
  { id: 7, src:'/posters/07.jpg', title: 'The Kashmir Valley', price: 20 },
  { id: 8, src:'/posters/08.jpg', title: 'Punjab Sunset', price: 25 },
  { id: 9, src:'/posters/09.jpg', title: 'Malika Parbat', price: 20 },
  { id: 10, src:'/posters/10.jpg', title: 'Babusar Top', price: 25 },
  { id: 11, src:'/posters/11.jpg', title: 'Meadows', price: 20 },
  { id: 12, src:'/posters/12.jpg', title: 'The Mountain', price: 25 },
  
  // ... add all other posters
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const poster = posters.find(p => p.id === Number(id));

  return (
    <Box p={6} maxW="1200px" mx="auto">
      <Flex direction={['column', 'row']} gap={8}>
        <Box flex={1}>
          <Image
            src={poster.src}
            alt={poster.title}
            objectFit="contain"
            maxH="600px"
          />
        </Box>
        
        <Box flex={1} p={4}>
          <Heading size="2xl" mb={4} fontFamily='Great Vibes'>{poster.title}</Heading>
          <Text fontSize="3xl" mb={6}>${poster.price}</Text>
          <Button
            colorScheme="blue"
            size="lg"
            onClick={() => addToCart(poster)}
            mb={4}
            borderRadius="none"
            _hover={{ bg: 'green.700' }}
          >
            Add to Cart
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductDetail;