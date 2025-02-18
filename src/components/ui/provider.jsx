import { ThemeProvider } from './color-mode';
import ColorModeButton from './ColorModeButton'; // ✅ Correct import

const Provider = ({ children }) => {  
  return (
    <ThemeProvider>
      {children}  
      
    </ThemeProvider>
  );
};

export default Provider;
