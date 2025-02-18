import { Box, Input, Grid, GridItem, Heading, FormLabel, Button} from "@chakra-ui/react";
import { useState } from "react";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Box as="form" onSubmit={handleSubmit} m={4}>
      <Heading size="lg" mb={6} fontFamily="Great Vibes">
        Billing Information
      </Heading>

      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <Box mb={4}>
            <FormLabel>First Name</FormLabel>
            <Input 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              focusBorderColor="teal.400"
              isRequired
            />
          </Box>
        </GridItem>

        <GridItem colSpan={1}>
          <Box mb={4}>
            <FormLabel>Last Name</FormLabel>
            <Input 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              focusBorderColor="teal.400"
              isRequired
            />
          </Box>
        </GridItem>

        <GridItem colSpan={2}>
          <Box mb={4}>
            <FormLabel>Email</FormLabel>
            <Input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              focusBorderColor="teal.400"
              isRequired
            />
          </Box>
        </GridItem>

        <GridItem colSpan={2}>
          <Box mb={4}>
            <FormLabel>Address</FormLabel>
            <Input 
              name="address"
              value={formData.address}
              onChange={handleChange}
              focusBorderColor="teal.400"
              isRequired
            />
          </Box>
        </GridItem>

        <GridItem colSpan={1}>
          <Box mb={4}>
            <FormLabel>City</FormLabel>
            <Input 
              name="city"
              value={formData.city}
              onChange={handleChange}
              focusBorderColor="teal.400"
              isRequired
            />
          </Box>
        </GridItem>

        <GridItem colSpan={1}>
          <Box mb={4}>
            <FormLabel>Country</FormLabel>
            <Input 
              name="country"
              value={formData.country}
              onChange={handleChange}
              focusBorderColor="teal.400"
              isRequired
            />
          </Box>
        </GridItem>

        <GridItem colSpan={2}>
          <Heading size="lg" mt={8} mb={6} fontFamily="Great Vibes">
            Payment Details
          </Heading>
        </GridItem>

        <GridItem colSpan={2}>
          <Box mb={4}>
            <FormLabel>Card Number</FormLabel>
            <Input 
              type="number"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              focusBorderColor="teal.400"
              isRequired
            />
          </Box>
        </GridItem>

        <GridItem colSpan={1}>
          <Box mb={4}>
            <FormLabel>Expiry Date</FormLabel>
            <Input 
              type="month"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              focusBorderColor="teal.400"
              isRequired
            />
          </Box>
        </GridItem>

        <GridItem colSpan={1}>
          <Box mb={4}>
            <FormLabel>CVV</FormLabel>
            <Input 
              type="number"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              focusBorderColor="teal.400"
              isRequired
            />
          </Box>
        </GridItem>
      </Grid>
      <Button
      colorScheme="teal"
      size="lg"
      width="full"
      _hover={{ bg: "teal.700" }} 
      borderRadius="none"
      >
                      Proceed to Checkout
                    </Button>
    </Box>
  );
};

export default CheckoutForm;