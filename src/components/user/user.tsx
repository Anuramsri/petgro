import React from "react";
import {
  IonApp,
  IonLabel,
  IonButton,
  IonToolbar,
  IonContent,
  IonPage,
  IonImg,
  IonItem,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonSelect,
  IonSelectOption,
  IonText,
  IonPopover,
  IonDatetime,
} from "@ionic/react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import logo from "../../assets/images/horizontal-light.png";
import { Col } from "reactstrap";
import { useState } from "react";
import "../../pages/login/Signup.css";
import { format, parseISO } from "date-fns";
import { useHistory } from "react-router-dom";
import { updateUserDetails } from "../services/services";

const options = {
  cssClass: "my-custom-interface",
};

const UserPage: React.FC = () => {
  const [, setUserData] = useState({});
  const [gender, setGender] = useState<string>();
  const [city, setCity] = useState<string>();
  const [popoverDate, setPopoverDate] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nameofpetparent: "",
      petdob: popoverDate,
      gender: "",
      state: "",
    },
  });
  const history = useHistory();
  const onSubmit = (data: any) => {
    data.petdob = popoverDate;
    data.gender = gender;
    data.state = city;
    updateUserDetails(data).then((res) => {
      console.log(res.data);
    });

    console.log("data", data);
    // alert(JSON.stringify(data, null, 2));
    setUserData(data);
    history.push("/petdetail");
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
                          User Details Form
                        </IonToolbar>
                        <div>
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <IonItem>
                              <IonLabel position="floating">
                                Name of Pet parent
                              </IonLabel>
                              <IonInput
                                {...register("nameofpetparent", {
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
                              <IonLabel>Pet Dob:</IonLabel>
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
                              <IonLabel position="floating">Gender</IonLabel>
                              <IonSelect
                                value={gender}
                                placeholder="Select One"
                                onIonChange={(e) => setGender(e.detail.value)}
                                {...register("gender", {
                                  required: "This is a required field",
                                })}
                              >
                                <IonSelectOption value="Male">
                                  Male
                                </IonSelectOption>
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

                            <IonItem>
                              <IonLabel position="floating">State</IonLabel>
                              <IonSelect
                                value={city}
                                placeholder="Select One"
                                onIonChange={(e) => setCity(e.detail.value)}
                                interfaceOptions={options}
                                interface="popover"
                                {...register("state", {
                                  required: "This is a required field",
                                })}
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
                                <IonSelectOption value="Salem">
                                  Salem
                                </IonSelectOption>
                              </IonSelect>
                            </IonItem>
                            <ErrorMessage
                              errors={errors}
                              name="state"
                              as={<div style={{ color: "red" }} />}
                            />

                            <div className="signup">
                              <IonButton type="submit">Next</IonButton>
                            </div>
                          </form>
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

export default UserPage;
