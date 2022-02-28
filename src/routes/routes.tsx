import {
  ComponentProps,
  ComponentType,
  lazy,
  LazyExoticComponent,
} from "react";

import * as ROUTES from "./constants";

export enum RoutesGuards {
  AUTHENTICATED,
  UNAUTHENTICATED,
}

export interface IRoute {
  path: string;

  exact?: boolean;

  component:
    | LazyExoticComponent<ComponentType<ComponentProps<any>>>
    | ComponentType<ComponentProps<any>>;

  redirect?: string;

  guard?: RoutesGuards;
}

const LoginPage = lazy(() => import("../pages/Login/Login"));

const HomePage = lazy(() => import("../pages/Home/Home"));

const Tab1 = lazy(() => import("../pages/Tab1"));

const Tab2 = lazy(() => import("../pages/Tab2"));

const Tab3 = lazy(() => import("../pages/Tab3"));

export const routes: IRoute[] = [
  {
    path: ROUTES.LOGIN,
    component: LoginPage,
  },
  {
    path: ROUTES.HOME,
    component: HomePage,
  },
  {
    path: ROUTES.TAB1,
    component: Tab1,
  },
  {
    path: ROUTES.TAB2,
    component: Tab2,
  },
  {
    path: ROUTES.TAB3,
    component: Tab3,
  },
];
