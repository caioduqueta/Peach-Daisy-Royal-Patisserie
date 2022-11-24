import { Carousel } from "./components/Carousel";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import {Customers } from "./components/Customers";
import { HomeContainer } from "./styles";


export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <Carousel />
        <Customers />
      </HomeContainer>
      <Footer />
    </>
  )
}
