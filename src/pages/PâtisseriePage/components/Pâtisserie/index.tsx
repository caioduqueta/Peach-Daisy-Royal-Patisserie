import React, { useEffect, useState } from 'react'
import { PageTitle } from '../../../../components/PageTitle'
import { Product } from '../Product'
import { PaginationButtons, ProductsList, PâtisserieContainer, PâtisserieContent } from './styles'

interface IProducts {
  id: number
  image: string
  name: string
  altText: string
  price: number
}

export function Pâtisserie() {

  const [products, setProducts] = useState<IProducts[]>([])
  const [itensPerPage, setItensPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(products.length / itensPerPage)
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage
  const currentitens = products.slice(startIndex, endIndex)

  function changePage(event: React.MouseEvent<HTMLButtonElement>) { 
  const target = event.target as HTMLButtonElement
  setCurrentPage(Number(target.value))
}

  useEffect(() => {
    fetch('http://localhost:3000/Products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <PâtisserieContainer>
      <PâtisserieContent>
        <PageTitle text="Pâtisserie" />
        <ProductsList>
          {currentitens.map(product => {
            return (
              <Product
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                altText={product.altText}
                price={product.price}
              />
            )
          })}
        </ProductsList>
        <PaginationButtons>
          {Array.from(Array(pages), (product, index) => { 
            return (
              <button
                type="button"
                style={index === currentPage ? { color: '#E0BB65' } : { color: 'white' }}
                value={index}
                onClick={changePage}
              >
                {index + 1}
              </button>
            )
          })}
        </PaginationButtons>
      </PâtisserieContent>
    </PâtisserieContainer>
  )
}