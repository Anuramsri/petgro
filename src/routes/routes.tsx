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

const LoginPage = lazy(() => import("../pages/login/login"));

const SignUpPage = lazy(() => import("../pages/signup/signUp"));

const PetdetailPage = lazy(() => import("../components/petdetail/petdetail"));

const MedicalRecordPage = lazy(() => import("../pages/medicalRecord/record"));

const HomePage = lazy(() => import("../pages/home/home"));

const Tab1 = lazy(() => import("../pages/Tab1"));

const Tab2 = lazy(() => import("../pages/Tab2"));

const Tab3 = lazy(() => import("../pages/Tab3"));

const UserPage = lazy(() => import("../components/user/user"));

const DewormPage = lazy(() => import("../components/deworm/deworm"));

const VaccinePage = lazy(() => import("../components/vaccine/vaccine"));

export const routes: IRoute[] = [
  {
    path: ROUTES.LOGIN,
    component: LoginPage,
  },
  {
    path: ROUTES.SIGNUP,
    component: SignUpPage,
  },
  {
    path: ROUTES.PETDETAILS,
    component: PetdetailPage,
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
  {
    path: ROUTES.USER,
    component: UserPage,
  },
  {
    path: ROUTES.DEWORM,
    component: DewormPage,
  },
  {
    path: ROUTES.VACCINE,
    component: VaccinePage,
  },
  {
    path: ROUTES.MEDICALRECORD,
    component: MedicalRecordPage,
  },
];
