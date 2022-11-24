import { PageTitleContainer, StarsIcons } from "./styles";

import { Star } from 'phosphor-react'


interface PageTitleProps{
  text: string;
}

export function PageTitle({text}: PageTitleProps) {
  return (
    <PageTitleContainer>
      <StarsIcons>
        <Star size={24} weight="fill" />
        <Star size={24} weight="fill" />
        <Star size={24} weight="fill" />
      </StarsIcons>
      <h1>{text}</h1>
      <StarsIcons>
        <Star size={24} weight="fill" />
        <Star size={24} weight="fill" />
        <Star size={24} weight="fill" />
      </StarsIcons>
    </PageTitleContainer>
  )
}