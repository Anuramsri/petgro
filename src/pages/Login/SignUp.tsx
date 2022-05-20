import React from "react";
import {
  IonApp,
  IonLabel,
  IonBackButton,
  IonButtons,
  IonButton,
  IonHeader,
  IonToolbar,
  IonContent,
  IonPage,
  IonImg,
  IonItem,
  IonInput,
  IonCheckbox,
} from '@ionic/react';
import './Signup.css'
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import logo from "../../assets/images/horizontal-light.png";
import { Link } from "react-router-dom";
import { Col } from 'reactstrap';
import '../../pages/Login/Signup.css';

const SignUpPage: React.FC = () => {
  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmpassword: '',
      privateCheck: true,
    },
    
  });


  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };

  const imgcss = {
    height: "10vh",
    width: "auto",
    margin: "auto",
  };

  return (
    <IonPage>
      <IonContent>
        <div className="login_sec">
          <div className="container-fluid">
            <div className="row">
              <Col lg={3} md={12} sm={12} className="p-0 mobile_hide">
                <div className="login_bg">
                </div>
              </Col>
              <Col sm={12} xs={12} md={12} lg={9}>
                <div className="signup_content">
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
                        <IonLabel position="floating">Name</IonLabel>
                        <IonInput
                          {...register('name', {
                            required: 'This is a required field',
                          })}
                        />
                      </IonItem>
                      <ErrorMessage
                        errors={errors}
                        name="name"
                        as={<div style={{ color: 'red' }} />}
                      />

                      <IonItem>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput
                          {...register('email', {
                            required: 'This is a required field',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: 'invalid email address'
                            }
                          })}
                        />
                      </IonItem>
                      <ErrorMessage
                        errors={errors}
                        name="email"
                        as={<div style={{ color: 'red' }} />}
                      />

                      <IonItem>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput
                          {...register('password', {
                            required: 'This is a required field',
                            pattern: {
                              value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                              message: 'invalid password'
                            }
                          })}
                        />
                      </IonItem>
                      <ErrorMessage
                        errors={errors}
                        name="password"
                        as={<div style={{ color: 'red' }} />}
                      />

                      <IonItem>
                        <IonLabel position="floating">Confirm Password</IonLabel>
                        <IonInput
                          {...register('confirmpassword', {
                            required: 'This is a required field',
                            pattern: {
                              value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                              message: 'invalid password'
                            }
                          })}
                        />
                      </IonItem>
                      <ErrorMessage
                        errors={errors}
                        name="confirmpassword"
                        as={<div style={{ color: 'red' }} />}
                      />

                      <IonItem>
                        <IonLabel>I agree to the terms and conditions</IonLabel>
                        <Controller
                          name="privateCheck"
                          control={control}
                          render={({ field }) => {
                            return (
                              <IonCheckbox
                                checked={field.value}
                                onIonChange={e => {
                                  setValue('privateCheck', e.detail.checked);
                                }}
                              />
                            );
                          }}
                        />
                      </IonItem>
                      <div className="signup">
                        <IonButton type="submit">Sign Up</IonButton>
                      </div>
                    </form>
                    <div className="signupData">
                    </div>
                    <div style={{ paddingTop: 10 }}>
                      Already have an account?
                    </div>
                    <IonButton style={{ padding: 5 }}>
                      <Link className="btn_radius" to="/">LOGIN</Link>
                    </IonButton>
                  </IonContent>
                </div>
              </Col>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};


export default SignUpPage;
