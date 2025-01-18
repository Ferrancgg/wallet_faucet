import { render, screen } from '@testing-library/react'; // Herramientas para renderizar y consultar el DOM
import { BrowserRouter } from 'react-router-dom'; // Proveedor de navegación
import { ThemeProvider } from 'styled-components'; // Proveedor de tema para styled-components
import AppRouter from './AppRouter'; // Componente principal que vamos a probar
import theme from '../styles/theme'; // Tema que usaremos en las pruebas

// Describe un conjunto de pruebas para el AppRouter
describe('AppRouter Tests', () => {
  // Helper function para envolver cualquier componente con los providers necesarios
  const renderWithProviders = (ui) => {
    return render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>{ui}</BrowserRouter>
      </ThemeProvider>
    );
  };

  // Prueba: Verifica que el Header y el Footer se renderizan correctamente
  it('renders the Header and Footer', () => {
    renderWithProviders(<AppRouter />); // Renderizamos el AppRouter dentro de los providers

    // Verifica que el Header está presente (por el rol "banner")
    expect(screen.getByRole('banner')).toBeInTheDocument();

    // Verifica que el Footer está presente (por el rol "contentinfo")
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  // Prueba: Verifica que la página inicial (Home) se renderiza por defecto
  it('renders the Home page by default', () => {
    renderWithProviders(<AppRouter />); // Renderizamos el AppRouter

    // Verifica que el texto "Bienvenido a la Página de Inicio" está presente en el DOM
    expect(screen.getByText(/Bienvenido a la Página de Inicio/i)).toBeInTheDocument();
  });

  // Prueba: Verifica que la página About se renderiza al navegar a "/about"
  it('renders the About page when navigating to /about', () => {
    // Cambia manualmente la URL a "/about"
    window.history.pushState({}, 'About Page', '/about');

    renderWithProviders(<AppRouter />); // Renderizamos el AppRouter

    // Verifica que el texto "Sobre Nosotros" está presente en el DOM
    expect(screen.getByText(/Sobre Nosotros/i)).toBeInTheDocument();
  });

  // Prueba: Verifica que una página 404 se renderiza para rutas desconocidas
  it('renders the 404 page for unknown routes', () => {
    // Cambia manualmente la URL a una ruta inexistente
    window.history.pushState({}, 'Unknown Route', '/unknown');

    renderWithProviders(<AppRouter />); // Renderizamos el AppRouter

    // Verifica que el texto "Página no encontrada" (de tu componente 404) está presente
    expect(screen.getByText(/Página no encontrada/i)).toBeInTheDocument();
  });
});
