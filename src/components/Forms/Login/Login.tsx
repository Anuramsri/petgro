import {
  IonButton,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonThumbnail,
} from "@ionic/react";
import { image } from "ionicons/icons";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

export interface LoginData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const initialValue = {
    username: "etest",
    password: "asdsafsdf",
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValue,
    mode: "onBlur",
  });

  const [data, setData] = useState<LoginData>();

  const submitHandler = () => {
    console.log(data);
    setData(data);
  };

  const showError = (_fieldName: string) => {
    let error = (errors as any)[_fieldName];

    console.log(error);
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
        <Controller
          name="username"
          render={({ field: { onChange, onBlur } }) => {
            return <IonInput />;
          }}
          control={control}
          rules={{ required: false }}
        />

        {showError("username")}
      </IonItem>
      <IonItem>
        <IonLabel>Password:</IonLabel>
        <IonInput
          type="password"
          {...register("password", { required: false })}
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
