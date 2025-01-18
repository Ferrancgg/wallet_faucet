
import styled from 'styled-components'

const StyledFooter=styled.div`
height: 5svh;
border:2px solid red;
display: flex;
align-items: center;
justify-content:center;

@media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column; /* Cambia de diseño horizontal a vertical */
    
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
   background-color:green
  }
`
const Footer = () => {
  return (
    <StyledFooter>Footer</StyledFooter>
  )
}

export default Footer