import { Flex, Box, Text, Button, Image, Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FiShoppingCart } from "react-icons/fi";

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Destructure removeFromCart
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Box maxW="container.xl" mx="auto" p={6}>
      <Heading size="2xl" mb={8} fontFamily="Great Vibes" display="flex" alignItems="center" gap={2}>
        <FiShoppingCart /> Shopping Cart
      </Heading>

      {cart.length === 0 ? (
        <VStack spacing={4} textAlign="center" py={20}>
          <Text fontSize="2xl">Your cart is empty</Text>
          <Button as={Link} to="/shop" colorScheme="teal" size="lg" _hover={{ bg: "teal.700" }} borderRadius="none">
            Continue Shopping
          </Button>
        </VStack>
      ) : (
        <>
          <VStack spacing={6} align="stretch" mb={8}>
            {cart.map((item, index) => (
              <Flex
                key={index}
                p={4}
                boxShadow="md"
                borderRadius="md"
                align="center"
                gap={6}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  boxSize="120px"
                  objectFit="contain"
                  borderRadius="md"
                />
                <Box flex={1}>
                  <Heading size="md" fontFamily="Great Vibes" mb={2}>
                    {item.title}
                  </Heading>
                  <Text fontSize="lg" fontWeight="500">
                    ${item.price}
                  </Text>
                </Box>
                <Button
                  color="white"
                  variant="outline"
                  size="sm"
                  onClick={() => removeFromCart(item.id)} // Implement removal
                  bg="teal.700"
                  borderRadius="none"
                  _hover={{ bg: "teal.700" }} 
                >
                  Remove
                </Button>
              </Flex>
            ))}
          </VStack>

          <Flex justify="flex-end" borderTop="2px" borderColor="gray.100" pt={6}>
            <Box width={{ base: "100%", md: "400px" }}>
              <Flex justify="space-between" mb={4}>
                <Text fontSize="xl" fontWeight="600">
                  Subtotal
                </Text>
                <Text fontSize="xl" fontWeight="600">
                  ${subtotal}
                </Text>
              </Flex>
              
              <Button
                as={Link}
                to="/checkout"
                colorScheme="teal"
                size="lg"
                width="full"
                _hover={{ bg: "teal.700" }} 
                borderRadius="none"
              >
                Proceed to Checkout
              </Button>
            </Box>
          </Flex>
        </>
      )}
    </Box>
  );
};

export default Cart;