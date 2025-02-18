'use client'

import { 
  ChakraProvider, 
  ColorModeScript 
} from '@chakra-ui/react';

// Chakra provider with color mode initialization
export const ThemeProvider = ({ children }) => (
  <ChakraProvider>
    <ColorModeScript initialColorMode="system" />
    {children}
  </ChakraProvider>
); 
