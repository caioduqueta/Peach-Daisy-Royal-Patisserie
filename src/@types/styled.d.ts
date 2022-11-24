import 'styled-components'
import { defaultTheme } from '../theme/DefaultTheme'

type Themetype = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Themetype {}
}
