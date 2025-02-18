import { Box, FormControl, FormLabel, Input, Grid, GridItem, Heading } from "@chakra-ui/react";
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
    // Add your payment processing logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Heading size="lg" mb={6} fontFamily="Great Vibes">
        Billing Information
      </Heading>

      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <FormControl isRequired>
            <FormLabel>First Name</FormLabel>
            <Input 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              focusBorderColor="teal.400"
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              focusBorderColor="teal.400"
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              focusBorderColor="teal.400"
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isRequired>
            <FormLabel>Address</FormLabel>
            <Input 
              name="address"
              value={formData.address}
              onChange={handleChange}
              focusBorderColor="teal.400"
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl isRequired>
            <FormLabel>City</FormLabel>
            <Input 
              name="city"
              value={formData.city}
              onChange={handleChange}
              focusBorderColor="teal.400"
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Country</FormLabel>
            <Input 
              name="country"
              value={formData.country}
              onChange={handleChange}
              focusBorderColor="teal.400"
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <Heading size="lg" mt={8} mb={6} fontFamily="Great Vibes">
            Payment Details
          </Heading>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isRequired>
            <FormLabel>Card Number</FormLabel>
            <Input 
              type="number"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              focusBorderColor="teal.400"
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl isRequired>
            <FormLabel>Expiry Date</FormLabel>
            <Input 
              type="month"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              focusBorderColor="teal.400"
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl isRequired>
            <FormLabel>CVV</FormLabel>
            <Input 
              type="number"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              focusBorderColor="teal.400"
            />
          </FormControl>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default CheckoutForm;