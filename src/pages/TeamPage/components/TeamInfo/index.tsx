import { PageTitle } from '../../../../components/PageTitle'

import { TeamContainer, TeamContent} from './styles'
import { TeamPhotos } from '../TeamPhotos'
import { useEffect, useState } from 'react'

interface ITeamInfo {
  id: number
  image: string
  title: string
  description: string
  altText: string
}

export function TeamInfo() {
 const [teamInfos, setTeamInfos] = useState<ITeamInfo[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/Team')
      .then(response => response.json())
      .then(data => setTeamInfos(data))
  }, [])
  
  return (
    <TeamContainer>
      <TeamContent>
        <PageTitle text="Team" />
        {teamInfos.map( teamInfo => (
          <TeamPhotos
            key={teamInfo.id}
            image={teamInfo.image}
            title={teamInfo.title}
            description={teamInfo.description}
            altText={teamInfo.altText}
          />
        ))}
      </TeamContent>
    </TeamContainer>
  )
}


