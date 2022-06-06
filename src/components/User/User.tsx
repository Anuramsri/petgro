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
  IonSelect,
  IonSelectOption,
  IonText,
  IonPopover,
  IonDatetime,
} from "@ionic/react";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import logo from "../../assets/images/horizontal-light.png";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import { useState } from "react";
import "../../pages/Login/Signup.css";
import { format, parseISO, getDate, getMonth, getYear } from "date-fns";

const UserPage: React.FC = () => {
  const [gender, setGender] = useState<string>();
  const [city, setCity] = useState<string>();
  const [popoverDate, setPopoverDate] = useState("");
  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
      age: "",
      privateCheck: true,
    },
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };
  const formatDate = (value: string) => {
    return format(parseISO(value), "MMM dd yyyy");
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
                <div className="login_bg"></div>
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
                        <IonLabel position="floating">
                          Name of the parent
                        </IonLabel>
                        <IonInput
                          {...register("name", {
                            required: "This is a required field",
                          })}
                        />
                      </IonItem>
                      <ErrorMessage
                        errors={errors}
                        name="name of the parent"
                        as={<div style={{ color: "red" }} />}
                      />

                      <IonItem button={true} id="open-date-input">
                        <IonLabel position="floating">Pet Dob:</IonLabel>{" "}
                        <IonInput type="number" />
                        <IonText slot="end">{popoverDate}</IonText>
                        <IonPopover
                          trigger="open-date-input"
                          showBackdrop={false}
                        >
                          <IonDatetime
                            presentation="date"
                            onIonChange={(ev) =>
                              setPopoverDate(formatDate(ev.detail.value!))
                            }
                          />
                        </IonPopover>
                      </IonItem>
                      <ErrorMessage
                        errors={errors}
                        name="DOB"
                        as={<div style={{ color: "red" }} />}
                      />

                      <IonItem>
                        <IonLabel position="floating">Gender</IonLabel>
                        <IonSelect
                          value={gender}
                          placeholder="Select One"
                          onIonChange={(e) => setGender(e.detail.value)}
                        >
                          <IonSelectOption value="Male">Male</IonSelectOption>
                          <IonSelectOption value="female">
                            Female
                          </IonSelectOption>
                        </IonSelect>
                      </IonItem>

                      <IonItem>
                        <IonLabel position="floating">State</IonLabel>
                        <IonSelect
                          value={city}
                          placeholder="Select One"
                          onIonChange={(e) => setCity(e.detail.value)}
                        >
                          <IonSelectOption value="Chennai">
                            Chennai
                          </IonSelectOption>
                          <IonSelectOption value="Kanyakumari">
                            Kanyakumari
                          </IonSelectOption>
                          <IonSelectOption value="Tirunelveli">
                            Tirunelveli
                          </IonSelectOption>
                          <IonSelectOption value="Tirchy">
                            Tirchy
                          </IonSelectOption>
                          <IonSelectOption value="Salem">Salem</IonSelectOption>
                        </IonSelect>
                      </IonItem>

                      <div className="save">
                        <IonButton type="submit">Next</IonButton>
                      </div>
                    </form>
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

export default UserPage;
