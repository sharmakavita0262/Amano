import { ThemeProvider } from '@mui/material';
import './App.css';
import AppRoutes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import theme from './Theme';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
