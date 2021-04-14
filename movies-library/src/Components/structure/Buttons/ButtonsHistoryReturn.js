import { useHistory } from "react-router";
import { BntGroupe,  ButtonShrink} from "../stylredComponents/Button.styled";

const ButtonsHistoryReturn = () => {
  const history = useHistory();
  const goHome = () => history.push("/");
  const goBack = () => history.goBack();
  return (
    <BntGroupe>
      <ButtonShrink onClick={goBack}>Go Back</ButtonShrink>
      <ButtonShrink onClick={goHome}>Home</ButtonShrink>
    </BntGroupe>
  );
  // return [goHome, goBack];
};

export default ButtonsHistoryReturn;
