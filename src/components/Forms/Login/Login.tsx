import React, { useState } from "react";
import {
  IonLabel,
  IonButton,
  IonRow,
  IonCol,
  IonImg,
  IonItem,
  IonGrid,
  IonInput,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import logo from "../../../../src/assets/images/horizontal-light.png";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "../../../pages/petcss/signup.css";
import { userLogin } from "../../services/services";

export interface LoginData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const history = useHistory();

  const onSubmit = (data: any) => {
    let payload  = {
      "email" : data.username,
      "password" : data.password
    }
    userLogin(payload).then(
      res =>{
        console.log("logged in",res.data)
        window.localStorage.setItem("token",res.data['token'])
        if(res.data['token']){
          history.push('/user')
        }else{
          alert("there was some issues")
        }
      }
    )
  };

  const imgcss = {
    height: "10vh",
    width: "auto",
    margin: "auto",
  };

  return (
    <IonGrid className="loginGrid">
      <IonRow className="loginRow">
        <IonCol sizeMd="6" sizeLg="5" sizeSm="12">
          <div className="loginHead">
            <IonImg src={logo} alt="test" style={imgcss} />
          </div>
          <div className="loginForm">
            <form onSubmit={handleSubmit(onSubmit)}>
              <IonItem>
                <IonLabel position="floating">Email :</IonLabel>
                <IonInput
                  {...register("username", {
                    required: "This is a required field",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Please enter valid email",
                    },
                  })}
                />
              </IonItem>
              <ErrorMessage
                errors={errors}
                name="username"
                as={<div style={{ color: "red" }} />}
              />
              <IonItem>
                <IonLabel position="floating">Password :</IonLabel>
                <IonInput
                  {...register("password", {
                    required: "This is a required field",
                    pattern: {
                      value: /^(?=.*\d).{8,}$/,
                      message: "Please enter valid password",
                    },
                  })}
                />
              </IonItem>
              <ErrorMessage
                errors={errors}
                name="password"
                as={<div style={{ color: "red" }} />}
              />
              <div className="signup">
                <IonButton type="submit" shape="round" size="default">
                  Login
                </IonButton>
              </div>
            </form>
          </div>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export { Login };
