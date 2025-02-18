import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text, SimpleGrid, Heading, Image, Button, Flex, Spacer } from '@chakra-ui/react';
import { useCart } from '../context/CartContext';

// Posters data
const posters = [
  { id: 1, src: '/posters/01.jpg', title: 'Babusar Top', price: 30 },
  { id: 2, src: '/posters/02.jpg', title: 'Princess Of Kashmir', price: 25 },
  { id: 3, src: '/posters/03.jpg', title: 'Rising Moon', price: 25 },
  { id: 4, src: '/posters/04.jpg', title: 'The Blood Eagle', price: 20 },
  { id: 5, src: '/posters/05.jpg', title: 'The Eagle', price: 25 },
  { id: 6, src: '/posters/06.jpg', title: 'Killer Mountain', price: 25 },
  { id: 7, src: '/posters/07.jpg', title: 'The Kashmir Valley', price: 20 },
  { id: 8, src: '/posters/08.jpg', title: 'Punjab Sunset', price: 25 },
  { id: 9, src: '/posters/09.jpg', title: 'Malika Parbat', price: 20 },
  { id: 10, src: '/posters/10.jpg', title: 'Babusar Top', price: 25 },
  { id: 11, src: '/posters/11.jpg', title: 'Meadows', price: 20 },
  { id: 12, src: '/posters/12.jpg', title: 'The Mountain', price: 25 },
];

const Shop = () => {
  const { cart } = useCart();

  return (
    <Box p={6}>
      <Flex mb={8}>
        <Box>
          <Heading as="h1" size="5xl" mb={4} fontFamily='Great Vibes'>Posters</Heading>
          <Heading as="h2" size="lg" mb={8} fontFamily='Great Vibes' mt={-5}>
            Signed Original Posters
          </Heading>
        </Box>
        <Spacer />
        
      </Flex>

      <SimpleGrid columns={[1, 1, 3]} spacing={6}>
        {posters.map((poster) => (
          <Link key={poster.id} to={`/product/${poster.id}`}>
            <Box
              p={4}
              textAlign="center"
              boxShadow="lg"
              _hover={{ boxShadow: '2xl', bg: 'teal.700' }}
              m={4}
            >
              <Image
                src={poster.src}
                alt={poster.title}
                boxSize="200px"
                objectFit="contain"
                margin="0 auto"
                
              />
              <Heading size="md" mt={4}>{poster.title}</Heading>
              <Text fontSize="xl" mt={2}>${poster.price}</Text>
            </Box>
          </Link>
        ))}
      </SimpleGrid>

      <Box mt={8} width="100%">
        <Text fontSize="lg" fontFamily='Great Vibes'>
          Our signed original posters are a perfect addition to your collection. Each poster is carefully
          curated and authenticated to ensure that you're getting the highest quality. Whether you're a fan
          of fine art or looking for a unique gift, our collection has something special for you.❤️📷👍
        </Text>
      </Box>
    </Box>
  );
};

export default Shop;