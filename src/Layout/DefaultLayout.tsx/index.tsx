import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LayoutMain } from "../styles";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <LayoutMain>
        <Outlet />
      </LayoutMain>
      <Footer />
    </>
  )
}
