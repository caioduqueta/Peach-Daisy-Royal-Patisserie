import { Quotes } from "phosphor-react"
import { CustomersTestimonialContainer, CustomersTestimonialContent } from "./styles"

interface CustomersTestimonialProps {
  id: number;
  image: string
  description: string
  name: string
  altText: string
}

export function CustomersTestimonial({ image, description, name, altText}: CustomersTestimonialProps) {
  return (
    <CustomersTestimonialContainer>
      <CustomersTestimonialContent>
        <img src={image} alt={altText} />
        <div>
          <Quotes size={32} weight="fill" />
          <p>{description}</p>
          <Quotes size={32} weight="fill" />
          <span>{name}</span>
        </div>
      </CustomersTestimonialContent>
    </CustomersTestimonialContainer>
  )
}
