import { Flex, Grid, Heading, Text, Link, Input, VStack, Box, IconButton,Button,  Icon , HStack,} from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaArrowRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  return (
    <Flex
      as="footer"
      direction="column"
      py={12}
      px={{ base: 4, md: 8 }}
      borderColor="gray.200"
      bg="gray.900"
    >
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={8}
        mb={12}
        maxW="container.xl"
        mx="auto"
        w="full"
      >
        {/* Contact Column */}
        <VStack align="start" spacing={4}>
          <Heading fontSize="lg" mb={2} color="white">CONTACT</Heading>
          <Text color="white">Lets Connect</Text>
          <HStack>
          <Input 
            placeholder="your email" 
            variant="flushed" 
            borderColor="gray.300"
            _placeholder={{ color: "gray.400" }}
            color="white"
          />
          <Button 
              variant="ghost" 
              color="white" 
              rightIcon={<FiArrowUpRight />}
              _hover={{ bg: "whiteAlpha.100" }}
              px={4}
              href="mailto:abdulahadshan4@gmail.com" 
            >
              Submit
          </Button>
          </HStack>
          <Flex align="center" gap={2}>
            <Link href="mailto:abdulahadshan4@gmail.com" mt={2} color="white">
              abdulahadshan4@gmail.com
            </Link>
            <Icon as={FiArrowUpRight} color="white" />
          </Flex>
        </VStack>

        {/* Work Column */}
        <VStack align="start" spacing={2}>
          <Heading fontSize="lg" mb={2} color="white">WORK</Heading>
          <Link color="white">Selected Works</Link>
          <Link color="white">Exhibitions</Link>
          <Link color="white">Fine Art Prints</Link>
          <Link color="white">Shop</Link>
        </VStack>

        {/* Lahore Column */}
        <VStack align="start" spacing={2}>
          <Heading fontSize="lg" mb={2} color="white">LAHORE</Heading>
          
          <Text color="white">Lahore, Pakistan</Text>
         
        </VStack>
      </Grid>

      {/* Bottom Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="container.xl"
        mx="auto"
        w="full"
        pt={8}
        borderTop="1px solid"
        borderColor="gray.200"
      >
        <Heading 
          as="h3" 
          fontSize="2xl"
          mb={{ base: 4, md: 0 }}
          fontFamily="'Playfair Display', serif"
          fontWeight="600"
          color="white"
        >
          Abdul Ahad Shan
        </Heading>

        <Flex gap={6}>
          <Link href="https://x.com/thenotorious541?t=hUky0eU5az3MEdnh362gmg&s=09" isExternal>
            <FaTwitter size={24} color="white" />
          </Link>
          <Link href="https://www.instagram.com/ahadjpeg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="  isExternal>
            <FaInstagram size={24} color="white" />
          </Link>
        </Flex>

        <VStack spacing={1} mt={{ base: 4, md: 0 }}>
          <Text color="white" fontSize="sm">
            © {new Date().getFullYear()} Abdul Ahad Shan Pictures
          </Text>
          <Text color="white" fontSize="xs">
            <Link href="">
            Made By Usama Jabar
            </Link>
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Footer;