import { CarouselContainer, CarouselContent } from "./styles";
import { CaretLeft, CaretRight, Star } from "phosphor-react";
import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

interface IBanners {
  id: number
  image: string
  altText: string
  description: string
}

export function Carousel() {

  const [banners, setBanners] = useState<IBanners[]>([])
  const carousel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('http://localhost:3000/Banner')
      .then((response) => response.json())
      .then((data) => setBanners(data))
  }, [])

    useEffect(() => {
      setInterval(() => {
        if (null != carousel.current) {
          if (carousel.current.scrollLeft === 0)
          {
             carousel.current.scrollLeft += carousel?.current?.offsetWidth
          }
          else {
            carousel.current.scrollLeft -= carousel?.current?.offsetWidth
          }
             
         } 
      },
    30000)
    }, [])


  function handleLeftClick(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault()
    if (null != carousel.current) {
      carousel.current.scrollLeft -= carousel?.current?.offsetWidth
    }
  }

  function handleRightClick(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault()
    if (null != carousel.current) {
      carousel.current.scrollLeft += carousel?.current?.offsetWidth
    }
  }

  return (
    <CarouselContainer>
      <button type="button" className="left" onClick={(event) => handleLeftClick(event)}>
        <CaretLeft size={64} weight="fill" alt="Left" />
      </button>
      <CarouselContent ref={carousel}>
        {banners.map((banner) => {
          const { id, image, description, altText } = banner
          return (
            <div className="banners" key={id}>
              <img src={image} alt={altText} />
              <div className="textOrder">
                <strong>{description}</strong>
                <NavLink to={'/patisserie'} title="Order">
                  <button type="button" className="order">
                    <Star size={28} weight="fill" />
                    <span>Order Now</span>
                  </button>
                </NavLink>
              </div>
            </div>
          )
        })}
      </CarouselContent>
      <button type="button" className="right" onClick={(event) => handleRightClick(event)}>
        <CaretRight size={64} weight="fill" alt="Right" />
      </button>
    </CarouselContainer>
  )
}
