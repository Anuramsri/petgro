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
} from "@ionic/react";
// import './Signup.css';
import { useForm, Controller } from "react-hook-form";
import logo from "../../assets/images/horizontal-light.png";
import { Link } from "react-router-dom";
import { Button, Col } from "reactstrap";
import { useState } from "react";
import "../../pages/Login/Signup.css";
import { pin, heart, closeCircle, close } from "ionicons/icons";

const VaccinePage: React.FC = () => {
  const [size, setSize] = useState<string>();
  const [text, setText] = useState<string>();

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
                          <IonInput type="text">Parent Name:</IonInput>
                        </IonItem>
                        <IonItem>
                          <IonInput type="text">Pet Name:</IonInput>
                        </IonItem>
                        <IonItem>
                          <IonInput type="text">Pet Age:</IonInput>
                        </IonItem>
                        <IonItem>
                          <IonInput type="text">What Pet ?</IonInput>
                        </IonItem>
                        <IonItem>
                          <IonInput type="text">Pet Breed:</IonInput>
                        </IonItem>
                      </div>
                      <IonItem>
                        <IonLabel position="floating">Pet Size:</IonLabel>
                        <IonSelect
                          value={size}
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
                        <IonInput type="text">Pet Weight:</IonInput>
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
                      <div className="checkbox">
                        <IonLabel>
                          <IonCheckbox color="secondary" /> Reminder
                        </IonLabel>
                      </div>
                      <span>
                        <IonText slot="start">Deworming</IonText>
                        <IonText text-align="centre">30 June 2022</IonText>
                        <IonButton color="success" slot="end">
                          Update
                        </IonButton>
                      </span>
                      <div className="textarea">
                        <IonTextarea
                          value={text}
                          placeholder="Medicine Name / ml /Pills or Tonic"
                          onIonChange={(e) => setText(e.detail.value!)}
                        ></IonTextarea>
                      </div>
                      <br></br>
                      <span>
                        <IonButton
                          className="add"
                          type="submit"
                          color="success"
                        >
                          Add
                        </IonButton>
                        <IonButton
                          className="his"
                          type="submit"
                          color="warning"
                        >
                          History
                        </IonButton>
                        <IonButton className="up" type="submit" color="medium">
                          Upcomings
                        </IonButton>
                      </span>
                      <br></br>
                      <br></br>
                      <br></br>
                      <IonChip className="act">
                        <IonIcon color="primary" />
                        <IonLabel>Activity Reminder</IonLabel>
                      </IonChip>
                      <IonChip className="med">
                        <IonIcon color="primary" />
                        <IonLabel>Medical Records</IonLabel>
                      </IonChip>
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

export default VaccinePage;
