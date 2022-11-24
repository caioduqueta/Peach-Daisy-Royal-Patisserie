import { LocationsInfosContainer} from './styles'

interface LocationsInfosProps{
  title: string;
  image: string;
  altText: string;
}

export function LocationsInfos({ title, image, altText }: LocationsInfosProps) {
  return (
    <LocationsInfosContainer>
      <h2>{title}</h2>
      <img src={image} alt={altText} />
    </LocationsInfosContainer>
  )
}
