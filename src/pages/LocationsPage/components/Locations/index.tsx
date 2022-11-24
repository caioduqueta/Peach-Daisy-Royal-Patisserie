import { useState, useEffect } from "react";
import { LocationsInfos } from "../LocationsInfos";
import { PageTitle } from "../../../../components/PageTitle";
import { LocationsContainer, LocationsContent } from "./styles";

interface ILocations {
  id: number
  image: string
  text: string
  altText: string
}

export function Locations() {

  const [locations, setLocations] = useState<ILocations[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/Locations')
      .then((response) => response.json())
      .then((data) => setLocations(data))
  }, [])
  return (
    <LocationsContainer>
      <LocationsContent>
        <PageTitle text="Locations" />
        {locations.map(location => (
          <LocationsInfos
            key={location.id}
            image={location.image}
            title={location.text}
            altText={location.altText}
            />
        ))}
      </LocationsContent>
    </LocationsContainer>
  )
}
