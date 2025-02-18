import React, { useState, useEffect } from 'react';
import { Box, Image, Text, SimpleGrid, Heading, Grid, GridItem } from '@chakra-ui/react';

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg',
    '5.jpg', '6.jpg', '7.jpg', '8.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000); // Change image every 1 second
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Box>
      {/* Slideshow */}
      <Box position="relative" height="500px" width="100%" overflow="hidden">
        <Image
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          objectFit="cover"
          height="100%"
          width="100%"
        />
        <Heading
          position="absolute"
          bottom="10px"
          left="10px"
          color="white"
          fontSize="4xl"
          zIndex="1"
        >
          About
        </Heading>
      </Box>

      {/* About Paragraphs */}
      <Box p={4}>
        <SimpleGrid columns={[1, 2]} spacing={4}>
          <Box>
            <Heading size="lg" mb={4}>Our Mission</Heading>
            <Text>
              We aim to provide the best service to our customers, ensuring
              that every experience with us is positive and memorable. Our
              mission is to empower individuals by offering innovative solutions
              that meet their needs.
            </Text>
          </Box>
          <Box>
            <Heading size="lg" mb={4}>Our Vision</Heading>
            <Text>
              We envision a world where technology and creativity come together
              to improve people's lives. Our vision is to be at the forefront of
              innovation, driving positive change in the industry and beyond.
            </Text>
          </Box>
          <Box>
            <Heading size="lg" mb={4}>Our Values</Heading>
            <Text>
              Integrity, dedication, and passion are the core values that guide
              our work. We believe in building long-term relationships with
              our customers, based on trust, respect, and mutual benefit.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Quotation and Landscape Image */}
      <Grid
        templateColumns="1fr"
        templateRows="auto 1fr"
        bg="gray.700"
        p={6}
        gap={4}
      >
        <GridItem textAlign="center">
          <Text fontSize="xl" fontStyle="italic">
            "Innovation distinguishes between a leader and a follower."
          </Text>
        </GridItem>
        <GridItem>
          <Image
            src="photographer.jpg" // Place your landscape image here
            alt="Landscape"
            marginLeft="auto"
            marginRight="auto"
            boxSize="80%"
            objectFit="cover"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default About;
