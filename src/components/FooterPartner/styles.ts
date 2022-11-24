import styled from "styled-components";
 
export const FooterPartnerContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 5rem;

width: 100%;
height: 6.5rem;

background-color: ${props => props.theme["Bg-header"]};

img{
  height: 3.5rem;
}
`