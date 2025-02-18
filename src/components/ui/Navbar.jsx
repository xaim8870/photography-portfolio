import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from '../../context/CartContext';
import { 
  Flex,
  Box,
  Text,
  IconButton,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import ColorModeButton from "./ColorModeButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart(); // Get cart from context

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Box 
      bg="gray.700" 
      borderBottom="1px solid transparent" // Fix white line issue
      boxShadow="sm"
      color="white"
    >
      <Box maxW="container.xl" mx="auto" px={{ base: 4, lg: 8 }}>
        <Flex justify="space-between" align="center" py={4}>
          {/* Logo */}
          <ChakraLink 
            as={Link} 
            to="/" 
            fontSize="3xl" 
            fontWeight="light" 
            letterSpacing="wide"
            color="white"
            _hover={{ textDecoration: "none" }}
          >
            𝓐𝓫𝓭𝓾𝓵 𝓐𝓱𝓪𝓭 𝓢𝓱𝓪𝓷
          </ChakraLink>

          {/* Desktop Menu */}
          <Flex display={{ base: "none", md: "flex" }} gap={6} textTransform="uppercase" fontSize="l" fontWeight="700">
            <ChakraLink as={Link} to="/" _hover={{ textDecoration: "none" }}>Home</ChakraLink>
            <ChakraLink as={Link} to="/selected-works" _hover={{ textDecoration: "none" }}>Selected Works</ChakraLink>
            <ChakraLink as={Link} to="/Shop" _hover={{ textDecoration: "none" }}>Shop</ChakraLink>
            <ChakraLink as={Link} to="/fine-art-prints" _hover={{ textDecoration: "none" }}>Fine Art Prints</ChakraLink>
            <ChakraLink as={Link} to="/about" _hover={{ textDecoration: "none" }}>About</ChakraLink>
          </Flex>

          {/* Icons Section */}
          <Flex align="center" gap={6}>
            {/* Shopping Cart with dynamic count */}
            <ChakraLink as={Link} to="/cart" _hover={{ textDecoration: "none" }}>
              <Flex align="center" cursor="pointer">
                <FiShoppingCart />
                <Text ml={1} fontSize="sm">{cart.length}</Text>
              </Flex>
            </ChakraLink>
            <ColorModeButton />

            {/* Mobile Menu Toggle */}
            <IconButton
              display={{ base: "block", md: "none" }} // Ensure it only appears on mobile
              onClick={toggleMenu}
              variant="ghost"
              aria-label="Toggle menu"
              icon={menuOpen ? <IoMdClose /> : <IoMdMenu />}
              fontSize="2xl"
              size="lg"
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
            />
          </Flex>
        </Flex>

        {/* Mobile Menu */}
        {menuOpen && (
          <VStack display={{ base: "flex", md: "none" }} width="100%" spacing={6} pb={4} textAlign="center" align="stretch" bg="gray.700" p={4}>
            <ChakraLink as={Link} to="/" onClick={toggleMenu} textTransform="uppercase" fontSize="lg" fontWeight="bold" _hover={{ textDecoration: "none" }}>Home</ChakraLink>
            <ChakraLink as={Link} to="/selected-works" onClick={toggleMenu} textTransform="uppercase" fontSize="lg" fontWeight="bold" _hover={{ textDecoration: "none" }}>Selected Works</ChakraLink>
            <ChakraLink as={Link} to="/Shop" onClick={toggleMenu} textTransform="uppercase" fontSize="lg" fontWeight="bold" _hover={{ textDecoration: "none" }}>Shop</ChakraLink>
            <ChakraLink as={Link} to="/fine-art-prints" onClick={toggleMenu} textTransform="uppercase" fontSize="lg" fontWeight="bold" _hover={{ textDecoration: "none" }}>Fine Art Prints</ChakraLink>
            <ChakraLink as={Link} to="/about" onClick={toggleMenu} textTransform="uppercase" fontSize="lg" fontWeight="bold" _hover={{ textDecoration: "none" }}>About</ChakraLink>
          </VStack>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
