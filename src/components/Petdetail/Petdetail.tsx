import React from "react";
import {
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
  IonSelect,
  IonSelectOption,
  IonPopover,
  IonDatetime,
  IonText,
} from "@ionic/react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import logo from "../../assets/images/horizontal-light.png";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import { useState } from "react";
import "../../pages/Login/Signup.css";
import { musicalNote } from "ionicons/icons";
import { format, parseISO, getDate, getMonth, getYear } from "date-fns";

const PetdetailPage: React.FC = () => {
  const [pet, setPet] = useState<string>();
  const [breed, setBreed] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [popoverDate, setPopoverDate] = useState("");

  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      petname: "",
      petdob: "",
      whatisyourpet: "",
      breed: "",
      gender: "",
      privateCheck: true,
    },
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
    console.log("saved data", data);
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
                        <IonLabel position="floating">Pet Name</IonLabel>
                        <IonInput
                          {...register("petname", {
                            required: "This is a required field",
                          })}
                        />
                      </IonItem>
                      <ErrorMessage
                        errors={errors}
                        name="petname"
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
                        name="petdob"
                        as={<div style={{ color: "red" }} />}
                      />
                      <IonItem>
                        <IonLabel position="floating">
                          What is your pet
                        </IonLabel>
                        <IonSelect
                          value={pet}
                          placeholder="Select One"
                          onIonChange={(e) => setPet(e.detail.value)}
                        >
                          <IonSelectOption value="Dog">Dog</IonSelectOption>
                          <IonSelectOption value="Cat">Cat</IonSelectOption>
                          <IonSelectOption value="Not Specified">
                            Not Specified
                          </IonSelectOption>
                        </IonSelect>
                      </IonItem>
                      <ErrorMessage
                        errors={errors}
                        name="whatisyourpet"
                        as={<div style={{ color: "red" }} />}
                      />

                      <IonItem>
                        <IonLabel position="floating">breed</IonLabel>
                        <IonSelect
                          value={breed}
                          placeholder="Select One"
                          onIonChange={(e) => setBreed(e.detail.value)}
                        >
                          <IonSelectOption value="Bulldog">
                            Bulldog
                          </IonSelectOption>
                          <IonSelectOption value="Labrador Retriever">
                            Labrador Retriever
                          </IonSelectOption>
                          <IonSelectOption value="German Shepherd">
                            German Shepherd
                          </IonSelectOption>
                          <IonSelectOption value="Poodles">
                            Poodles
                          </IonSelectOption>
                          <IonSelectOption value="Golden Retriever">
                            Golden Retriever
                          </IonSelectOption>
                        </IonSelect>
                      </IonItem>
                      <ErrorMessage
                        errors={errors}
                        name="breed"
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
                      <ErrorMessage
                        errors={errors}
                        name="gender"
                        as={<div style={{ color: "red" }} />}
                      />

                      <div className="save">
                        <IonButton type="submit">Save</IonButton>
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

export default PetdetailPage;
