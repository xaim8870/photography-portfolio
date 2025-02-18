import { useState, useEffect } from 'react';
import { Box, Heading, Text, Button, Flex, Grid, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

// Project data array
const projects = [
  {
    id: 1,
    title: "Nanga Parbat",
    description: "Killer Mountain Under A Starry Night",
    image: "NangaParbat.jpg"
  },
  {
    id: 2,
    title: "Babusar Top View",
    description: "The Majestic View from Babusar Top",
    image: "BabusarTop.jpg"
  },
  {
    id: 3,
    title: "Malika Parbat",
    description: "Also Known As Queen of Mountains",
    image: "MalikaParbat.jpg"
  },
  {
    id: 4,
    title: "Under His Name",
    description: "Masjid Wazir Khan",
    image: "MasjidWazirKhan.jpg"
  },
  {
    id: 5,
    title: "The Vision",
    description: "An Eye Through A Lens",
    image: "HorseEye.jpg"
  },
  {
    id: 6,
    title: "The Tree of Life",
    description: "Azad Kashmir",
    image: "TreeLife.jpg"
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % projects.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box as="main" maxW="container.xl" mx="auto" px={{ base: 4, md: 8 }} py={12}>
      {/* Hero Section */}
      <Flex 
        direction={{ base: "column", md: "row" }} 
        align="center" 
        mb={20}
        gap={12}
      >
        <Box flex={1}>
          <Heading 
            as="h1" 
            size="4xl" 
            mb={6} 
            lineHeight="1.2"
            fontWeight="600"
            fontFamily="sans-serif"
          >
            Abdul Ahad Shan
            <Text as="span" display="block" fontSize="md" mt={2}>
            "This is how the world breathes"
            </Text>
          </Heading>
          <Text fontSize="lg" mb={8} maxW="xl" w="400px" textAlign="justify">
          A Self taught photographer and visual artist, trying to tell stories through his pictures, with half a decade of experience in photography. 
          </Text>
          <Button 
            as={RouterLink}
            to="/SelectedWorks"
            size="lg"
            colorScheme="black"
            variant="outline"
            _hover={{ bg: "black", color: "white" }}
          >
            View Selected Work
          </Button>
        </Box>
        
        <Box flex={1} w="full">
          <Image 
            src={new URL("../assets/Ahad.jpg", import.meta.url).href}
            alt="Featured Work"
            borderRadius="lg"
            objectFit="cover"
            h={{ base: "300px", md: "500px" }}
            w="full"
          />
        </Box>
      </Flex>

      {/* Featured Works Grid */}
      <Box mb={20}>
        <Heading as="h2" size="xl" mb={12} textAlign="center" fontWeight="300">
          Recent Works
        </Heading>

        <Grid 
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={8}
          mb={12}
        >
          {projects.map((project) => (
            <Box 
              key={project.id} 
              pos="relative" 
              overflow="hidden" 
              borderRadius="lg"
            >
              <Image
                src={new URL(`../assets/${project.image}`, import.meta.url).href}
                alt={`${project.title} - ${project.description}`}
                objectFit="cover"
                h="300px"
                w="full"
                loading="lazy"
                _hover={{ transform: "scale(1.05)" }}
                transition="transform 0.3s ease"
              />
              <Box
                pos="absolute"
                bottom="0"
                left="0"
                p={4}
                w="full"
                bg="linear-gradient(transparent, rgba(0,0,0,0.7))"
              >
                <Text fontSize="lg" fontWeight="bold" color="white">
                  {project.title}
                </Text>
                <Text fontSize="sm" color="gray.300">
                  {project.description}
                </Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>

      {/* Image Slideshow Section */}
      <Box mb={20} w="full" overflow="hidden" position="relative" h={{ base: "300px", md: "500px" }}>
        {projects.map((project, index) => (
          <Box
            key={project.id}
            position="absolute"
            top="0"
            left="0"
            w="full"
            h="full"
            opacity={currentSlide === index ? 1 : 0}
            transition="opacity 0.5s ease"
          >
            <Image
              src={new URL(`../assets/${project.image}`, import.meta.url).href}
              alt={`Slideshow - ${project.title}`}
              w="full"
              h="full"
              objectFit="cover"
              loading="lazy"
            />
          </Box>
        ))}

        {/* Slide Indicators */}
        <Flex
          position="absolute"
          bottom="4"
          w="full"
          justify="center"
          gap="2"
          zIndex="1"
        >
          {projects.map((_, index) => (
            <Box
              key={index}
              w="2"
              h="2"
              borderRadius="full"
              bg={currentSlide === index ? "white" : "whiteAlpha.500"}
              transition="background 0.3s ease"
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default Home;