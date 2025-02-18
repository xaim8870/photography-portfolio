import React from 'react';
import { Box, Image, Text, SimpleGrid, Heading } from '@chakra-ui/react';

const Portrait = () => {
  const imageData = [
    { src: '9.jpg', heading: 'Kashmir', description: 'A Man From Kashmir.' },
    { src: '10.jpg', heading: 'Kashmir', description: 'This is image 10 description.' },
    { src: '11.jpg', heading: 'Babusar Top View', description: 'This is image 11 description.' },
    { src: '12.jpg', heading: 'Image 12', description: 'This is image 12 description.' },
    { src: '13.jpg', heading: 'Image 13', description: 'This is image 13 description.' },
    { src: '14.jpg', heading: 'Image 14', description: 'This is image 14 description.' },
    { src: '15.jpg', heading: 'Image 15', description: 'This is image 15 description.' },
    { src: '16.jpg', heading: 'Image 16', description: 'This is image 16 description.' },
    { src: '17.jpg', heading: 'Image 17', description: 'This is image 17 description.' },
    { src: '18.jpg', heading: 'Image 18', description: 'This is image 18 description.' },
    { src: '19.jpg', heading: 'Image 19', description: 'This is image 19 description.' },
    { src: '20.jpg', heading: 'Image 20', description: 'This is image 20 description.' },
    { src: '21.jpg', heading: 'Image 21', description: 'This is image 21 description.' },
    { src: '22.jpg', heading: 'Image 22', description: 'This is image 22 description.' },
    { src: '23.jpg', heading: 'Image 23', description: 'This is image 23 description.' },
    { src: '24.jpg', heading: 'Image 24', description: 'This is image 24 description.' },
    { src: '25.jpg', heading: 'Image 24', description: 'This is image 24 description.' },
    { src: '26.jpg', heading: 'Image 24', description: 'This is image 24 description.' },
  ];

  return (
    <Box p={4}>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {imageData.map((image, index) => (
          <Box
            key={index}
            p={4}
            m={4}
            borderWidth="1px"
            borderRadius="md"
            textAlign="center"
            boxShadow="lg"
            _hover={{ boxShadow: '2xl' }}
          >
            <Image src={image.src} alt={image.heading} borderRadius="md" />
            <Heading size="md" mt={2}>{image.heading}</Heading>
            <Text mt={2}>{image.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Portrait;
