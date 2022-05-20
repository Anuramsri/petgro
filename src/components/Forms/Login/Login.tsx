import React from "react";
import {
  IonLabel,
  IonBackButton,
  IonButtons,
  IonButton,
  IonHeader,
  IonToolbar,
  IonContent,
  IonImg,
  IonItem,
  IonInput,
} from '@ionic/react';
import { useHistory } from "react-router-dom";
import logo from "../../../../src/assets/images/horizontal-light.png";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import '../../../pages/Login/Signup.css';

export interface LoginData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    }
  });

  const history = useHistory();

  const onSubmit = (data: any) => {
    // alert(JSON.stringify(data, null, 2));
    history.push("/home");
  };

  const imgcss = {
    height: "10vh",
    width: "auto",
    margin: "auto",
  };

  return (
    <div className="login_content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonImg src={logo} alt="test" style={imgcss} />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonItem>
            <IonLabel position="floating">User Name</IonLabel>
            <IonInput
              {...register('username', {
                required: 'This is a required field',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Please enter valid username'
                }
              })}
            />
          </IonItem>
          <ErrorMessage
            errors={errors}
            name="username"
            as={<div style={{ color: 'red' }} />}
          />
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              {...register('password', {
                required: 'This is a required field',
                pattern: {
                  value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                  message: 'Please enter valid password'
                }
              })}
            />
          </IonItem>
          <ErrorMessage
            errors={errors}
            name="password"
            as={<div style={{ color: 'red' }} />}
          />
          <div className="signup">
            <IonButton type="submit">Login</IonButton>
          </div>
        </form>
      </IonContent>
    </div>
  );
};

export { Login };
