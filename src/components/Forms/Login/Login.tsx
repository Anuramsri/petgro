import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export interface LoginData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const initialValue = {
    username: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValue,
    mode: "onTouched",
    reValidateMode: "onSubmit",
  });

  const history = useHistory();

  const submitHandler = (formData: LoginData) => {
    console.log(formData?.username, formData?.password);
    history.push("/home");
  };

  const showError = (_fieldName: string) => {
    let error = (errors as any)[_fieldName];

    return (
      error && (
        <div
          style={{
            color: "red",
            padding: 5,
            paddingLeft: 12,
            fontSize: "smaller",
          }}
        >
          This field is required
        </div>
      )
    );
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <IonItem>
        <IonLabel>Username:</IonLabel>
        <IonInput type="text" {...register("username", { required: true })} />

        {showError("username")}
      </IonItem>
      <IonItem>
        <IonLabel>Password:</IonLabel>
        <IonInput
          type="password"
          {...register("password", { required: true })}
        />
        {showError("password")}
      </IonItem>
      <IonButton type="submit" className="ion-margin-top" expand="full">
        Submit
      </IonButton>
    </form>
  );
};

export { Login };
