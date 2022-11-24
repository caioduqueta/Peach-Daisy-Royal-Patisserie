import { createGlobalStyle } from 'styled-components'
import Background from '../assets/Background-Main.png'

export const GlobalStyle = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

html{
  @media (max-width:1080px){
    font-size: 93.75%; //15px
    
  }

  @media (max-width:720px){
    font-size: 87.5%; //14px
  }
}


body{

background-image: url(${Background});
-webkit-font-smoothing: antialiased;
}
`