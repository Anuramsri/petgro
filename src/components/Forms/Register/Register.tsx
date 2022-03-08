import { IonItem, IonLabel, IonInput, IonButton } from "@ionic/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface RegisterData {
  name: string;
  dob: Date;
  gender: string;
  email: string;
  phone: string;
  otp: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const initialValue = {
    name: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    otp: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValue,
    mode: "onBlur",
  });

  const [data, setData] = useState<RegisterData>();

  const submitHandler = () => {
    console.log(data);
    setData(data);
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
        <IonLabel>Parent Name:</IonLabel>
        <IonInput
          type="text"
          {...register("name", { required: true, maxLength: 30 })}
        />

        {showError("name")}
      </IonItem>

      <IonItem>
        <IonLabel>DoB:</IonLabel>
        <IonInput
          type="text"
          {...register("dob", { required: true, maxLength: 10 })}
        />

        {showError("dob")}
      </IonItem>

      <IonItem>
        <IonLabel>Gender:</IonLabel>
        <IonInput type="text" {...register("gender", { required: true })} />

        {showError("gender")}
      </IonItem>

      <IonItem>
        <IonLabel>Email:</IonLabel>
        <IonInput
          type="email"
          {...register("email", { required: true, maxLength: 50 })}
        />

        {showError("email")}
      </IonItem>

      <IonItem>
        <IonLabel>Phone:</IonLabel>
        <IonInput
          type="tel"
          {...register("phone", { required: true, maxLength: 10 })}
        />

        {showError("phone")}
      </IonItem>

      <IonItem>
        <IonLabel>Password:</IonLabel>
        <IonInput
          type="password"
          {...register("password", { required: true, minLength: 8 })}
        />

        {showError("password")}
      </IonItem>

      <IonItem>
        <IonLabel>Confirm Password:</IonLabel>
        <IonInput
          type="password"
          {...register("confirmPassword", { required: true, minLength: 8 })}
        />

        {showError("confirmPassword")}
      </IonItem>

      <IonItem>
        <IonLabel>OTP:</IonLabel>
        <IonInput
          type="number"
          {...register("otp", { required: true, minLength: 6, maxLength: 6 })}
        />

        {showError("otp")}
      </IonItem>

      <IonButton type="submit" className="ion-margin-top" expand="full">
        Submit
      </IonButton>
    </form>
  );
};

export { Register };
