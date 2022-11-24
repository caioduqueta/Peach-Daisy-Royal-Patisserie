import { HeaderContainer, HeaderContent, IconsMenu, NavMenu, Nothing } from "./styles";
import LogoImg from "../../assets/Logo/Logo.png"
import { Cake, UserCircle } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../Context/Context";


export function Header() {

  const {itensInCart} = useContext(ProductsContext)

  function productInCart() {
    if (itensInCart.length > 0) {
      return <span className="productInCart">{itensInCart.length}</span>
    } else {  }
  }
  return (
    <HeaderContainer>
      <HeaderContent>
        <Nothing>
          <span className="userIcon">
            <UserCircle size={48} weight="fill" />
          </span>
          <NavLink to={'/cart'} title="Cart">
            <span className="cakeIcon">
              <Cake size={48} weight="fill" />
            </span>
          </NavLink>
        </Nothing>
        <NavMenu>
          <NavLink to={'/'} title="Home">
            <span>Home</span>
          </NavLink>
          <NavLink to={'/patisserie'} title="Pâtisserie">
            <span>Pâtisserie</span>
          </NavLink>
          <NavLink to={'/'} title="Home">
            <img src={LogoImg} alt="Peach & Daisy Royal Patisserie" />
          </NavLink>
          <NavLink to={'/locations'} title="Locations">
            <span>Location</span>
          </NavLink>
          <NavLink to={'/team'} title="Team">
            <span>Team</span>
          </NavLink>
        </NavMenu>
        <IconsMenu>
          <span className="userIcon">
            <UserCircle size={48} weight="fill" />
          </span>
          <NavLink to={'/cart'} title="Cart">
            <span className="cakeIcon">
              <Cake size={48} weight="fill" />
              {productInCart()}
            </span>
          </NavLink>
        </IconsMenu>
      </HeaderContent>
    </HeaderContainer>
  )
}
