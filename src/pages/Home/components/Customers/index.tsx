import { useEffect, useState } from "react";
import { PageTitle } from "../../../../components/PageTitle";
import { CustomersTestimonial } from "../CustomersTestimonial";
import { CustomersContainer, CustomersContent, Testimonial } from "./styles";

interface ICustomers {
  id: number
  image: string
  description: string
  name: string
  altText: string
}

export function Customers() {

  const [Customers, setCustomers] = useState<ICustomers[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/Customers')
      .then((response) => response.json())
      .then((data) => setCustomers(data))
  }, [])

  return (
    <CustomersContainer>
      <CustomersContent>
        <PageTitle text="Customers Testimonials" />
        <Testimonial>
          {Customers.map((customer) => {
            return (
              <CustomersTestimonial
                key={customer.id}
                id={customer.id}
                image={customer.image}
                description={customer.description}
                name={customer.name}
                altText={customer.altText}
              />
            )
          })}
        </Testimonial>
      </CustomersContent>
    </CustomersContainer>
  )
}

