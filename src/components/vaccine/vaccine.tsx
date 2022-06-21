import React from "react";
import {
  IonApp,
  IonLabel,
  IonButton,
  IonHeader,
  IonToolbar,
  IonContent,
  IonPage,
  IonImg,
  IonItem,
  IonTitle,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonToggle,
  IonCol,
  IonGrid,
  IonRow,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import { useForm } from "react-hook-form";
import logo from "../../assets/images/horizontal-light.png";
import { Col } from "reactstrap";
import { useState } from "react";
import "../../pages/petcss/signup.css";
import { useHistory } from "react-router-dom";
import { format, parseISO } from "date-fns";
import { updatepetDetails } from "../services/services";
// import { HttpStatus } from "../../routes/constants";

const DewormPage: React.FC = () => {
  // const [DewormData, setDewormData] = useState({})
  const [size, setSize] = useState<string>();
  const [weight, setWeight] = useState<string>();
  const [text] = useState<string>();
  const [popoverDate] = useState<string>();
  const [checked, setChecked] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const updateVaccination = (id, updateVaccination) => {
  //   setVaccination(vaccination.map((vaccination) => vaccination.id === id ? updateVaccination : vaccination))
  // }

  const history = useHistory();

  var out = {
    parentName: "Kobe",
    petName: "Simba",
    petage: "1",
    whatpet: "Dog",
    petbreed: "Bomarian",
  };

  const onSubmit = (data: any) => {
    data.petsize = size;
    data.petweight = weight;
    data.dateandtime = popoverDate;
    data.description = text;
    data.reminder = checked;

    let result = {
      ...data,
      ...out,
    };
    console.log(result);

    console.log("data", result);
    updatepetDetails(result).then((res) => {
      console.log("success");
    });
    // alert(JSON.stringify(data, null, 2));
    history.push("/");
  };

  const formatDate = (value: string) => {
    return format(parseISO(value), "MMM dd yyyy" + ":" + "hh:mm a");
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="ion-padding">
                            <IonItem>
                              <IonLabel position="floating" className="pet">
                                Parent Name: {out.parentName}
                              </IonLabel>
                              <IonLabel position="floating" className="pet">
                                Pet Name: {out.petName}
                              </IonLabel>
                              <IonLabel position="floating" className="pet">
                                Pet Age: {out.petage}
                              </IonLabel>
                              <IonLabel position="floating" className="pet">
                                What Pet? {out.whatpet}
                              </IonLabel>
                              <IonLabel position="floating" className="pet">
                                Pet Breed: {out.petbreed}
                              </IonLabel>
                            </IonItem>
                          </div>
                          <IonItem>
                            <IonLabel position="floating">Pet Size:</IonLabel>
                            <IonSelect
                              value={size}
                              placeholder="Select One"
                              onIonChange={(e) => setSize(e.detail.value)}
                            >
                              <IonSelectOption value="Small">
                                Small
                              </IonSelectOption>
                              <IonSelectOption value="Medium">
                                Medium
                              </IonSelectOption>
                              <IonSelectOption value="Large">
                                Large
                              </IonSelectOption>
                            </IonSelect>
                          </IonItem>
                          <IonItem>
                            <IonLabel position="floating">Pet Weight:</IonLabel>
                            <IonInput
                              type="text"
                              onIonInput={(e: any) => setWeight(e.target.value)}
                            />
                          </IonItem>
                          <div className="submit">
                            <IonButton type="submit" color="secondary">
                              Update
                            </IonButton>
                          </div>
                          <IonHeader>
                            <IonToolbar>
                              <IonTitle
                                slot="start"
                                color="secondary"
                                className="deworm"
                              >
                                Deworming
                              </IonTitle>
                              <IonTitle slot="end" className="vaccine">
                                Vaccination
                              </IonTitle>
                            </IonToolbar>
                          </IonHeader>
                          <div className="check">
                            <IonLabel className="checkbox">
                              Reminder
                              <IonToggle
                                className="tog"
                                color="secondary"
                                checked={checked}
                                onIonChange={(e) =>
                                  setChecked(e.detail.checked)
                                }
                              />
                            </IonLabel>
                          </div>
                          <IonCard className="vacinaDiv">
                            <IonCardContent>
                              <IonRow>
                                <IonCol size="4">Vaccination 1</IonCol>
                                <IonCol size="5">30-Jun-22</IonCol>
                                <IonCol size="3">
                                  <IonButton size="small" color="success">
                                    Edit
                                  </IonButton>
                                </IonCol>
                              </IonRow>
                            </IonCardContent>
                          </IonCard>
                          <IonCard className="vacinaDiv">
                            <IonCardContent>
                              <IonRow>
                                <IonCol size="4">Vaccination 2</IonCol>
                                <IonCol size="5">30-Jun-22</IonCol>
                                <IonCol size="3">
                                  <IonButton size="small" color="success">
                                    Update
                                  </IonButton>
                                </IonCol>
                              </IonRow>
                            </IonCardContent>
                          </IonCard>
                          <div className="hist">
                            <IonButton
                              slot="center"
                              type="submit"
                              color="success"
                            >
                              Save
                            </IonButton>
                          </div>
                          <div>{text}</div>
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
    </IonApp>
  );
};

export default DewormPage;
