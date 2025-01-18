
import styled from 'styled-components'

const StyledHeader=styled.div`
height: 8svh;
display: flex;
align-items: center;
justify-content: center;
border: 2px solid red;

@media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column; /* Cambia de diseño horizontal a vertical */
    background-color:blue;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
   background-color:green;
   display: none;
  }



`


const Header = () => {
  return (
    <StyledHeader>Header</StyledHeader>
  )
}

export default Header