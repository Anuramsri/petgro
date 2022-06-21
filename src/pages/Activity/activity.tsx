import {
  IonContent,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonCol,
  IonSelect,
  IonSelectOption,
  IonToggle,
} from "@ionic/react";

import React from "react";
// import NotificationsIcon from '@mui/icons-material/Notifications';
import "./style.css";

const editActivity: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reminder</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="middleContainer">
          <IonRow>
            <IonCol size="6">Time</IonCol>
            <IonCol size="6">
              <IonToggle ng-model="airplaneMode" toggle-class="toggle-calm">
                Airplane Mode
              </IonToggle>
            </IonCol>
          </IonRow>

          <div>
              {/* <NotificationsIcon/> */}
            <p>Tue 3,May</p>
            <IonItem>
              <IonSelect value="brown" okText="Okay" cancelText="Dismiss">
                <IonSelectOption value="brown">Brown</IonSelectOption>
                <IonSelectOption value="blonde">Blonde</IonSelectOption>
                <IonSelectOption value="black">Black</IonSelectOption>
                <IonSelectOption value="red">Red</IonSelectOption>
              </IonSelect>
            </IonItem>
          </div>
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default editActivity;
