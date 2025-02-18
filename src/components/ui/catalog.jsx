import React from 'react';
import { Box, SimpleGrid, Image, Text, Heading } from '@chakra-ui/react';

const Catalog = () => {
  const items = [
    { src: '1.jpg', description: 'Item 1 description here.' },
    { src: '2.jpg', description: 'Item 2 description here.' },
    { src: '3.jpg', description: 'Item 3 description here.' },
    { src: '4.jpg', description: 'Item 4 description here.' },
    { src: '5.jpg', description: 'Item 5 description here.' },
    { src: '6.jpg', description: 'Item 6 description here.' },
    { src: '7.jpg', description: 'Item 7 description here.' },
    { src: '8.jpg', description: 'Item 8 description here.' },
    { src: '9.jpg', description: 'Item 9 description here.' },
    { src: '10.jpg', description: 'Item 10 description here.' },
    { src: '11.jpg', description: 'Item 11 description here.' },
    { src: '12.jpg', description: 'Item 12 description here.' },
    { src: '13.jpg', description: 'Item 13 description here.' },
    { src: '14.jpg', description: 'Item 14 description here.' },
    { src: '15.jpg', description: 'Item 15 description here.' },
    { src: '16.jpg', description: 'Item 16 description here.' },
    { src: '17.jpg', description: 'Item 17 description here.' },
    { src: '18.jpg', description: 'Item 18 description here.' },
    { src: '19.jpg', description: 'Item 19 description here.' },
    { src: '20.jpg', description: 'Item 20 description here.' },
    { src: '21.jpg', description: 'Item 21 description here.' },
    { src: '22.jpg', description: 'Item 22 description here.' },
    { src: '23.jpg', description: 'Item 23 description here.' },
    { src: '24.jpg', description: 'Item 24 description here.' },
    { src: '25.jpg', description: 'Item 25 description here.' },
    { src: '26.jpg', description: 'Item 26 description here.' },
    { src: '27.jpg', description: 'Item 27 description here.' },
    { src: '28.jpg', description: 'Item 28 description here.' },
    
  ];

  return (
    <Box p={6}>
      {/* Catalog Header */}
      <Heading as="h1" size="2xl" mb={8}>Our Catalog</Heading>

      {/* Simple Grid with 5 Columns */}
      <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={6}>
        {items.map((item, index) => (
          <Box key={index}  p={4}  boxShadow="lg">
            <Image src={item.src} alt={`Item ${index + 1}`}  />
            <Text mt={2} color="#ffff" fontWeight="500">{item.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Catalog;
