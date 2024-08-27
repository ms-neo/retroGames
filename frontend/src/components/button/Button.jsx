import { ButtonContainer , Btn} from "./buttonStyles"

const Button = ({children}) => {
  return (
    <ButtonContainer>
    <Btn>{children}</Btn>
    </ButtonContainer>
  )
}

export default Button