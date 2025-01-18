import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Resetear márgenes y paddings */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Configuración de altura total */
  html, body, #root {
    height: 100%; /* Asegura que el layout ocupe toda la pantalla */
  }

  /* Tipografía base */
  body {
    font-family: ${(props) => props.theme.typography.fonts.primary};
    font-size: ${(props) => props.theme.typography.sizes.medium};
    line-height: 1.6; /* Mejora la legibilidad */
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    overflow-x: hidden; /* Evita scroll horizontal innecesario */
  }

  /* Enlaces */
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  /* Listas */
  ul, ol {
    list-style: none;
  }

  /* Imágenes */
  img {
    max-width: 100%; /* Escalables en contenedores pequeños */
    height: auto;
  }

  /* Botones */
  button {
    font-family: ${(props) => props.theme.typography.fonts.primary};
    font-size: ${(props) => props.theme.typography.sizes.medium};
    border: none;
    background: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  /* Elementos de formulario */
  input, textarea {
    font-family: ${(props) => props.theme.typography.fonts.primary};
    font-size: ${(props) => props.theme.typography.sizes.medium};
  }
`;

export default GlobalStyles;
