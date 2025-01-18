import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column; /* Cambia de diseño horizontal a vertical */
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    background-color: pink;
  }
`;

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Main>

        <Footer />
      </Container>
    </BrowserRouter>
  );
};
export default AppRouter;
