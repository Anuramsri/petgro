import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonPopover,
  IonCard,
  IonTextarea,
  IonRow,
  IonCol,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonCardHeader,
  IonItemDivider,
  IonButton,
  IonActionSheet,
  IonImg,
  IonDatetime,
} from "@ionic/react";
import { cameraOutline, calendarNumberOutline } from "ionicons/icons";
import { trash, close } from "ionicons/icons";
import { useCamera, UserPhoto } from "../../hooks/Camera/useCamera";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "./style.css";
import { updateMedicalRecord } from "../../components/services/services";

const MedicalRecordPage: React.FC = () => {
  const { deletePhoto, photos, takePhoto } = useCamera();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const onSubmit = (data: any) => {
    data.Othertreatmentorvacination = "";
    data.camera = takePhoto;
    data.calender = Date;
    data.vacination1 = "";
    data.vacination2 = "";
    data.deworming = "";
    data.Othertreatmentorvacination = "";
    data.Othertreatmentorvacination = "";

    updateMedicalRecord(data).then((res) => {
      console.log(res.data);
    });
    history.push("/");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Medical Records</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonCard className="titleCls">
            <IonCardHeader>
              <IonCardTitle className="titleContentCls">
                Add Vaccination/Treatment
              </IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonCard>
            <IonCardContent>
              <IonItem>
                <IonTextarea
                  placeholder="Other Treatment or vaccination "
                  value=""
                ></IonTextarea>
              </IonItem>
            </IonCardContent>
          </IonCard>
          <IonCard className="iconsDiv">
            <IonItem>
              <IonIcon
                icon={cameraOutline}
                slot="start"
                onClick={() => takePhoto()}
              />
              <IonRow>
                {photos.map((photo, index) => (
                  <IonCol size="6" key={index}>
                    <IonImg
                      onClick={() => setPhotoToDelete(photo)}
                      src={photo.webviewPath}
                    />
                  </IonCol>
                ))}
              </IonRow>

              <IonActionSheet
                isOpen={!!photoToDelete}
                buttons={[
                  {
                    text: "Delete",
                    role: "destructive",
                    icon: trash,
                    handler: () => {
                      if (photoToDelete) {
                        deletePhoto(photoToDelete);
                        setPhotoToDelete(undefined);
                      }
                    },
                  },
                  {
                    text: "Cancel",
                    icon: close,
                    role: "cancel",
                  },
                ]}
                onDidDismiss={() => setPhotoToDelete(undefined)}
              />
              <IonIcon
                icon={calendarNumberOutline}
                slot="start"
                id="open-modal"
              />
              <IonPopover trigger="open-modal" showBackdrop={false}>
                <IonDatetime
                  presentation="date"
                  onIonChange={(ev) => console.log("hello")}
                />
              </IonPopover>
              <IonButton color="warning" className="saveBtnCls" size="default">
                {" "}
                Save
              </IonButton>
            </IonItem>
          </IonCard>

          <IonCard className="vacinationDiv">
            <IonCardContent>
              <IonRow>
                <IonCol size="4">Vaccination 1</IonCol>
                <IonCol size="5">30-Jun-22</IonCol>
                <IonCol size="3">
                  <IonButton size="small" color="success">
                    Done
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonCardContent>
          </IonCard>
          <IonCard className="vacinationDiv">
            <IonCardContent>
              <IonRow>
                <IonCol size="4">Vaccination 2</IonCol>
                <IonCol size="5">30-Jun-22</IonCol>
                <IonCol size="3">
                  <IonButton size="small" color="success">
                    Done
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonCardContent>
          </IonCard>
          <IonCard className="vacinationDiv">
            <IonCardContent>
              <IonRow>
                <IonCol size="4"> Dewarming</IonCol>
                <IonCol size="5">30-Jun-22</IonCol>
                <IonCol size="3">
                  <IonButton size="small" color="success">
                    Done
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonCardContent>
          </IonCard>
          <IonItemDivider className="dividerCls"></IonItemDivider>

          <IonCard className="textAreaDiv">
            <IonTextarea
              mode="md"
              placeholder="Other Treatment or vaccination "
              value=""
            ></IonTextarea>
          </IonCard>
          <IonCard className="textAreaDiv">
            <IonTextarea
              mode="md"
              placeholder="Other Treatment or vaccination "
              value=""
            ></IonTextarea>
          </IonCard>
        </form>
      </IonContent>
    </IonPage>
  );
};
export default MedicalRecordPage;
