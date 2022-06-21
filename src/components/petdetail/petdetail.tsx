import React from "react";
import {
  IonLabel,
  IonButton,
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
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import logo from "../../assets/images/horizontal-light.png";
import { Col } from "reactstrap";
import { useState } from "react";
import "../../pages/login/Signup.css";
import { format, parseISO } from "date-fns";
import { useHistory } from "react-router-dom";
import { updatepetDetails } from "../services/services";

const PetdetailPage: React.FC = () => {
  const [pet, setPet] = useState<string>();
  const [breed, setBreed] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [popoverDate, setPopoverDate] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      petname: "",
      petdob: popoverDate,
      whatisyourpet: "",
      breed: "",
      gender: "",
    },
  });
  const history = useHistory();
  const onSubmit = (data: any) => {
    data.petdob = popoverDate;
    data.whatisyourpet = pet;
    data.gender = gender;
    data.breed = breed;
    updatepetDetails(data).then((res) => {
      console.log(res.data);
    });

    console.log("data", data);
    // alert(JSON.stringify(data, null, 2));
    history.push("/deworm");
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
                        Pet Details Form
                      </IonToolbar>
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
                          <IonLabel>Pet Dob:</IonLabel>
                          {/* <IonInput type="number" /> */}
                          <IonText slot="end">{popoverDate}</IonText>
                          <IonPopover
                            trigger="open-date-input"
                            showBackdrop={false}
                            {...register("petdob", {
                              required: "This is a required field",
                            })}
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
                            {...register("whatisyourpet", {
                              required: "This is a required field",
                            })}
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
                            {...register("breed", {
                              required: "This is a required field",
                            })}
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
                            {...register("gender", {
                              required: "This is a required field",
                            })}
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
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </Col>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PetdetailPage;
