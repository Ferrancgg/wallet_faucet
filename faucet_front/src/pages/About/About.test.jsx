import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import About from './About';
import theme from '../../style/theme';

describe('About Page', () => {
  it('renders the About page content', () => {
    render(
      <ThemeProvider theme={theme}>
        <About />
      </ThemeProvider>
    );

    // Verifica que el texto esperado esté en la página
    expect(screen.getByText(/Sobre Nosotros/i)).toBeInTheDocument();
  });
});