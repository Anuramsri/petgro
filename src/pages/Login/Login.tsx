import {
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonThumbnail,
} from "@ionic/react";
import { Login } from "../../components/Forms/Login/Login";

import logo from "../Login/logo.jpeg";

const LoginPage: React.FC = () => {
  const imgcss = {
    height: "10vh",
    width: "auto",
    margin: "auto",
  };
  return (
    <IonPage>
      <IonThumbnail>
        <IonImg src={logo} alt="test" style={imgcss} />
      </IonThumbnail>
      <IonHeader>
        <h2>Sign In</h2>
      </IonHeader>

      <IonContent>
        <Login />
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
