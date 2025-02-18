// In your theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Inter', sans-serif",
  },
});

export default theme;