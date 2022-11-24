import Peach from '../../assets/Team/MolduraPeach.png'
import { TeamPhotosContainer } from './styles'


interface TeamPhotosProps {
  image: string
  title: string
  description: string
  altText: string
}


export function TeamPhotos({image, title, description, altText}: TeamPhotosProps) {
  return (
    <TeamPhotosContainer>
      <img src={image} alt={altText} />
      <div className="infos">
        <h2>{title}</h2>
        <p>
          {description}
        </p>
      </div>
    </TeamPhotosContainer>
  )
}
