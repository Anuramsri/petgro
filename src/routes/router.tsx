import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Suspense } from "react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import { LOGIN } from "./constants";
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
          <Route exact path="/" render={() => <Redirect to={LOGIN} />} />
        </Suspense>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export { Router };
