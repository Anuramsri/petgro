import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Suspense } from "react";
import { Redirect, Route, RouteComponentProps } from "react-router";
// import Home from "../pages/Home/Home";
import { HOME } from "./constants";
import { IRoute, routes } from "./routes";

const Router: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Suspense fallback={<div>Loading...</div>}>
          {routes.map((route: IRoute, index: number) => (
            <Route
              key={index}
              exact
              path={route.path}
              render={(props: RouteComponentProps) => {
                if (route.component) {
                  const { component: Component } = route;

                  return <Component {...props} />;
                }
              }}
            />
          ))}
          <Route exact render={() => <Redirect to={HOME} />} />
        </Suspense>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export { Router };
