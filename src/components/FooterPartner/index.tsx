import { FooterPartnerContainer } from "./styles";
import MarioKart from "../../assets/Logo/LogoMarioKart.png";
import Nintendo from '../../assets/Logo/LogoNintendo.png'

export function FooterPartner() {
  return (
    <FooterPartnerContainer>
      <img src={MarioKart} alt="Mario Kart" />
      <img src={Nintendo} alt="Nintendo" />
      <img src={MarioKart} alt="Mario Kart" />
      <img src={Nintendo} alt="Nintendo" />
      <img src={MarioKart} alt="Mario Kart" />
      <img src={Nintendo} alt="Nintendo" />
    </FooterPartnerContainer>
  )
}
