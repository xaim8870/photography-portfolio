import { Box, Flex, Text, Button, Heading, VStack } from "@chakra-ui/react";
import { useCart } from "../../context/CartContext";

const PaymentSummary = ({ subtotal }) => {
  const { cart } = useCart();
  const shipping = 15.00;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <Box bg="gray.50" p={6} borderRadius="md">
      <Heading size="lg" mb={6} fontFamily="Great Vibes">
        Order Summary
      </Heading>

      <VStack spacing={4} align="stretch" mb={8}>
        {cart.map((item, index) => (
          <Flex key={index} justify="space-between">
            <Text>
              {item.title} x1
            </Text>
            <Text>${item.price}</Text>
          </Flex>
        ))}
      </VStack>

      <VStack spacing={3} mb={8}>
        <Flex justify="space-between" w="full">
          <Text>Subtotal:</Text>
          <Text>${subtotal.toFixed(2)}</Text>
        </Flex>
        <Flex justify="space-between" w="full">
          <Text>Shipping:</Text>
          <Text>${shipping.toFixed(2)}</Text>
        </Flex>
        <Flex justify="space-between" w="full">
          <Text>Tax (10%):</Text>
          <Text>${tax.toFixed(2)}</Text>
        </Flex>
      </VStack>

      <Flex justify="space-between" mb={8} borderTop="1px" borderColor="gray.200" pt={4}>
        <Text fontWeight="bold">Total:</Text>
        <Text fontWeight="bold">${total.toFixed(2)}</Text>
      </Flex>

      <Button 
        colorScheme="teal" 
        size="lg" 
        width="full"
        _hover={{ bg: "teal.700" }}
        borderRadius="none"
        type="submit"
        form="checkout-form"
      >
        Confirm Payment
      </Button>
    </Box>
  );
};

export default PaymentSummary;