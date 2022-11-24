import styled from "styled-components";


export const HeaderContainer = styled.header`
width: 100%;
background-color: ${(props) => props.theme['Bg-header']};

display: flex;
justify-content: center;
align-items: center;
`

export const HeaderContent = styled.nav`
  width: 70rem;
  height: 6.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 4rem;
  background-color: ${(props) => props.theme['Bg-header']};
  padding: 2rem;
`

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  img {
    width: 6.25rem;
    height: 4rem;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 130%;

    color: ${(props) => props.theme.Golden};
    background: none;

    cursor: pointer;
    transition: all 0.2s;
    position: relative;

    border-bottom: 2px solid transparent;
    padding-bottom: 0.25rem;

    &:hover {
      color: ${(props) => props.theme.White};
    }
    &.active span {
      border-bottom: 2px solid ${(props) => props.theme.Golden};
    }
  }
`

export const IconsMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;

  span.userIcon {
    color: ${(props) => props.theme.Golden};
    cursor: pointer;
    background: none;
    border: none;
    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme.White};
    }
  }

  span.cakeIcon {
    color: ${(props) => props.theme.Golden};
    cursor: pointer;
    background: none;
    border: none;
    transition: all 0.2s;
    position: relative;

    :hover {
      color: ${(props) => props.theme.White};
    }

     span.productInCart{
      position: absolute;
      top: -2.5rem;
      left: 2.5rem;
      height: 1.5rem;
      width: 1.5rem;
      border-radius: 50%;
    

      background-color: ${(props) => props.theme.Golden};
      color: ${(props) => props.theme["Bg-header"]};
      text-align: center;
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      font-weight: 700;
      line-height: 150%
    }
  }
`

export const Nothing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  visibility: hidden;

  span.userIcon {
    color: ${(props) => props.theme.Golden};
    cursor: pointer;
    background: none;
    border: none;
    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme.White};
    }
  }

  span.cakeIcon {
    color: ${(props) => props.theme.Golden};
    cursor: pointer;
    background: none;
    border: none;
    transition: all 0.2s;
    position: relative;

    :hover {
      color: ${(props) => props.theme.White};
    }
  }
`