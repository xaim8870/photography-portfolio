import React, { useState } from 'react';
import { Box, Heading, Grid, IconButton, Text, Stack } from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const FineArtPrints = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    
  ];

  const handlePrevClick = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <Box p={6} width="100%">
      {/* Heading */}
      <Heading as="h1" size="9xl" mb={0} fontSize="5xl" fontFamily={'Great Vibes'}>
        Fine Art Prints
      </Heading>

      {/* Image Slider */}
      <Box position="relative" mt={6}>
        <IconButton
          icon={<FaArrowLeft />}
          aria-label="Previous"
          position="absolute"
          top="50%"
          left={4}
          transform="translateY(-50%)"
          colorScheme="gray"
          onClick={handlePrevClick}
          zIndex={1}
        >⬅️</IconButton>
        
        <Box display="flex" overflow="hidden" justifyContent="center">
          <img
            src={images[currentImageIndex]}
            alt={`Fine Art ${currentImageIndex}`}
            style={{ width: '100%', maxWidth: '500px', height: 'auto' }}
          />
        </Box>

        <IconButton
          icon={<FaArrowRight />}
          aria-label="Next"
          position="absolute"
          top="50%"
          right={4}
          transform="translateY(-50%)"
          colorScheme="gray.900"
          onClick={handleNextClick}
          zIndex={1}
        >➡️</IconButton>
      </Box>

      {/* Grid Section */}
<Grid 
  templateColumns="repeat(2, 1fr)" 
  gap={6} 
  mt={12} 
  bg="#b3a46f" 
  p={6} 
  width="100%" 
  marginBottom="0"
>
  <Box>
    <Heading size="lg">Fine Art Prints</Heading>
  </Box>
  <Box>
    <Text fontSize="md" lineHeight="1.8">
      Print Sizes: Available in various sizes. Please inquire for options.
      <br />
      Certificate of Authenticity: Each print is accompanied by a certificate.
      <br />
      For questions, email us at{' '}
      <a href="mailto:info@example.com" style={{ color: '#3182CE' }}>
        info@example.com
      </a>
    </Text>
    <Stack spacing={4} mt={4} align="center">
      <Link to="/catalog">
        <IconButton
          icon={<FiArrowUpRight />}
          aria-label="View Catalog"
          colorScheme="blue"
          size="lg"
          padding="1.5rem 2rem"
          borderRadius="none"
          mr={20}
        >
          View Full Catalog
        </IconButton>
      </Link>

    </Stack>
  </Box>
</Grid>



      {/* Button to View Catalog */}
      
    </Box>
  );
};

export default FineArtPrints;
