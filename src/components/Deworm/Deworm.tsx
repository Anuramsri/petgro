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
  IonTitle,
  IonInput,
  IonCheckbox,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonIcon,
  IonText,
  IonChip,
  IonDatetime,
  IonModal,
  IonToggle,
} from "@ionic/react";
// import './Signup.css';
import { useForm, Controller } from "react-hook-form";
import logo from "../../assets/images/horizontal-light.png";
import { Link } from "react-router-dom";
import { Button, Col } from "reactstrap";
import { useState } from "react";
import "../../pages/Login/Signup.css";
import { calendar } from "ionicons/icons";
import { format, parseISO, getDate, getMonth, getYear } from "date-fns";

const DewormPage: React.FC = () => {
  const [size, setSize] = useState<string>();
  const [text, setText] = useState<string>();
  const [selectedDate, setSelectedDate] = useState("2012-12-15T13:47:20.789");

  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      parentname: "",
      petname: "",
      petage: "",
      whatpet: "",
      petbreed: "",
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
                      <div className="ion-padding">
                        <IonItem>
                          <IonLabel position="floating">Parent Name:</IonLabel>
                          <IonInput />
                          <IonLabel position="floating">Pet Name:</IonLabel>
                          <IonInput />
                          <IonLabel position="floating">Pet Age:</IonLabel>
                          <IonInput />
                          <IonLabel position="floating">What Pet?</IonLabel>
                          <IonInput />
                          <IonLabel position="floating">Pet Breed:</IonLabel>
                          <IonInput />
                        </IonItem>
                      </div>
                      <IonItem>
                        <IonLabel position="floating">Pet Size:</IonLabel>
                        <IonSelect
                          value={size}
                          placeholder="Select One"
                          onIonChange={(e) => setSize(e.detail.value)}
                        >
                          <IonSelectOption value="Small">Small</IonSelectOption>
                          <IonSelectOption value="Medium">
                            Medium
                          </IonSelectOption>
                          <IonSelectOption value="Large">Large</IonSelectOption>
                        </IonSelect>
                      </IonItem>
                      <IonItem>
                        <IonLabel position="floating">Pet Weight:</IonLabel>
                        <IonInput type="number" />
                      </IonItem>
                      <div className="submit">
                        <IonButton type="submit" color="secondary">
                          UPDATE
                        </IonButton>
                      </div>
                      <IonHeader>
                        <IonToolbar>
                          <IonTitle slot="start" className="deworm">
                            Deworming
                          </IonTitle>
                          <IonTitle slot="end" className="vaccine">
                            Vaccination
                          </IonTitle>
                        </IonToolbar>
                      </IonHeader>
                      <div>
                        <IonLabel className="checkbox">
                          Reminder
                          <IonToggle className="tog" color="secondary" />
                        </IonLabel>
                      </div>
                      <span className="title">
                        <IonButton id="open-modal">Date / Time</IonButton>
                        <IonModal trigger="open-modal">
                          <IonContent>
                            <IonDatetime
                              min="1989-06-04"
                              max="2022-05-30"
                              value="1994-12-15T13:47:20.789"
                            ></IonDatetime>
                          </IonContent>
                        </IonModal>
                      </span>
                      <div className="textarea">
                        <IonTextarea
                          value={text}
                          placeholder="Medicine Name / ml /Pills or Tonic"
                          onIonChange={(e) => setText(e.detail.value!)}
                        ></IonTextarea>
                      </div>
                      <div className="hist">
                        <IonButton slot="center" type="submit" color="success">
                          Save
                        </IonButton>
                      </div>

                      {/* <IonChip className="act">
                        <IonIcon color="primary" />
                        <IonLabel>Activity Reminder</IonLabel>
                        </IonChip>
                        <IonChip className="med">
                        <IonIcon color="primary"  />
                        <IonLabel>Medical Records</IonLabel>
                        </IonChip> */}
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

export default DewormPage;
