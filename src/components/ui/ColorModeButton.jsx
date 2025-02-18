import { useColorMode } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export default function ColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </Button>
  );
}
