import {useState} from 'react'

import {AppContainer, Image, Description, Button} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const imageUrl = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const altText = isUnlocked ? 'unlock' : 'lock'
  const lockText = isUnlocked ? 'Unlocked' : 'Locked'
  const buttonText = isUnlocked ? 'Lock' : 'Unlock'

  const onChangeLockStatus = () => setIsUnlocked(prevStatus => !prevStatus)

  return (
    <AppContainer>
      <Image alt={altText} src={imageUrl} />
      <Description>Your Device is {lockText}</Description>
      <Button type="button" onClick={onChangeLockStatus}>
        {buttonText}
      </Button>
    </AppContainer>
  )
}

export default Unlock

