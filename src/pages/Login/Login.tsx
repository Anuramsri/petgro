import {
  IonContent,
  IonPage
} from "@ionic/react";
import { Login } from "../../components/Forms/Login/Login";

import React from "react";
import { Col } from 'reactstrap';
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
      <div className="login_sec">
        <div className="container-fluid">
          <div className="row">
            <Col lg={3} md={12} sm={12} className="p-0 mobile_hide">
              <div className="login_bg">
                <div className="welcome_txt">
                  <h1>Welcome!</h1>
                  <p>Sign up your breed details and start earning</p>
                  <Link className="button_base btn_radius button_bordered" to="/signup">SIGN UP</Link>
                </div>
              </div>
            </Col>
            <Col sm={12} xs={12} md={12} lg={9}>
              <Login />
            </Col>
          </div>
        </div>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
