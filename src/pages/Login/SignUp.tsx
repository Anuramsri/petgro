import React from "react";
import {
  IonApp,
  IonLabel,
  IonButton,
  IonContent,
  IonPage,
  IonImg,
  IonItem,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonCheckbox,
  IonToolbar,
} from "@ionic/react";
import "./Signup.css";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import logo from "../../assets/images/horizontal-light.png";
import { userSignUp } from "../../components/services/services";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import "./Signup.css";
import { useHistory } from "react-router-dom";

const SignUpPage: React.FC = () => {
  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      privateCheck: true,
    },
    mode: "onBlur",
  });
  const history = useHistory();
  const onSubmit = (data: any) => {
    console.log(data);
    userSignUp(data).then((res) => {
      console.log(res.data);
    });
    history.push("/login");
  };

  const imgcss = {
    height: "10vh",
    width: "auto",
    margin: "auto",
  };

  return (
    <IonApp>
      <IonPage>
        <IonContent>
          <div className="login_sec">
            <div className="container-fluid">
              <div className="row">
                <Col lg={3} md={12} sm={12} className="p-0 mobile_hide">
                  <div className="login_bg"></div>
                </Col>
                <Col sm={12} xs={12} md={12} lg={9}>
                  <IonGrid className="loginGrid">
                    <IonRow className="loginRow">
                      <IonCol sizeMd="6" sizeLg="5" sizeSm="12">
                        <div className="loginHead">
                          <IonImg src={logo} alt="test" style={imgcss} />
                        </div>
                        <IonToolbar
                          style={{
                            backgroundColor: "#f0f8ff",
                            textAlign: "center",
                          }}
                        >
                          Registration Form
                        </IonToolbar>
                        <div className="loginForm">
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <IonItem>
                              <IonLabel position="floating">
                                First Name
                              </IonLabel>
                              <IonInput
                                {...register("firstName", {
                                  required: "This is a required field",
                                })}
                              />
                            </IonItem>
                            <ErrorMessage
                              errors={errors}
                              name="lastname"
                              as={<div style={{ color: "red" }} />}
                            />
                            <IonItem>
                              <IonLabel position="floating">Last Name</IonLabel>
                              <IonInput
                                {...register("lastName", {
                                  required: "This is a required field",
                                })}
                              />
                            </IonItem>
                            <ErrorMessage
                              errors={errors}
                              name="lastname"
                              as={<div style={{ color: "red" }} />}
                            />
                            <IonItem>
                              <IonLabel position="floating">Email</IonLabel>
                              <IonInput
                                {...register("email", {
                                  required: "This is a required field",
                                  pattern: {
                                    value:
                                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Enter a valid email address!",
                                  },
                                })}
                              />
                            </IonItem>
                            <ErrorMessage
                              errors={errors}
                              name="email"
                              as={<div style={{ color: "red" }} />}
                            />

                            <IonItem>
                              <IonLabel position="floating">Password</IonLabel>
                              <IonInput
                                type="password"
                                {...register("password", {
                                  required: "This is a required field",
                                  pattern: {
                                    value:
                                      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}/,
                                    message:
                                      "Password should be 8-20 characters and include atleast 1 letter,1 number,1 special character!",
                                  },
                                })}
                              />
                            </IonItem>
                            <ErrorMessage
                              errors={errors}
                              name="password"
                              as={<div style={{ color: "red" }} />}
                            />

                            <IonItem>
                              <IonLabel position="floating">
                                Confirm Password
                              </IonLabel>
                              <IonInput
                                type="password"
                                {...register("confirmPassword", {
                                  required: "This is a required field",
                                  pattern: {
                                    value:
                                      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}/,
                                    message: "Passwords don't match",
                                  },
                                })}
                              />
                            </IonItem>
                            <ErrorMessage
                              errors={errors}
                              name="confirmpassword"
                              as={<div style={{ color: "red" }} />}
                            />

                            <IonItem>
                              <IonLabel>
                                I agree to the terms and conditions
                              </IonLabel>
                              <Controller
                                name="privateCheck"
                                control={control}
                                render={({ field }) => {
                                  return (
                                    <IonCheckbox
                                      checked={field.value}
                                      onIonChange={(e) => {
                                        setValue(
                                          "privateCheck",
                                          e.detail.checked
                                        );
                                      }}
                                    />
                                  );
                                }}
                              />
                            </IonItem>
                            <div className="signup">
                              <IonButton
                                type="submit"
                                shape="round"
                                size="default"
                              >
                                Sign Up
                              </IonButton>
                            </div>
                          </form>
                          <div className="signupData"></div>
                          <div style={{ paddingTop: 10 }}>
                            Already have an account?
                          </div>
                          <IonButton shape="round" size="default">
                            <Link className="btn_radius" to="/">
                              LOGIN
                            </Link>
                          </IonButton>
                        </div>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </Col>
              </div>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default SignUpPage;
