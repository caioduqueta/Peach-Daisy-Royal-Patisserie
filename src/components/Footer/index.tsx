import { FooterPartner } from "../FooterPartner";
import { FooterContainer, ByDuqueta } from "./styles";


export function Footer() {
  return (
    <FooterContainer>
      <FooterPartner />
      <ByDuqueta>
        <a href="https://github.com/caioduqueta">
          <p>2022 Caio Duque Dev</p>
        </a>
      </ByDuqueta>
    </FooterContainer>
  )
}