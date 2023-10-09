import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { LandingComponent } from "./pages/landing/landing.component";
import { AuthGuard } from "./guard/auth.guard";
import { AnemiaComponent } from "./pages/diseases/anemia/anemia.component";
import { LymphomeComponent } from "./pages/diseases/lymphome/lymphome.component";
import { HypercalcemiaComponent } from "./pages/diseases/hypercalcemia/hypercalcemia.component";
import { QuestionnaireOneComponent } from "./pages/questionnaireOne/questionnaireOne.component";
import { QuestionnaireTwoComponent } from "./pages/questionnaireTwo/questionnaireTwo.component";

const routes: Routes = [
  {
    path: "",
    component: LandingComponent,
  },
  {
    path: "maladies/anémie",
    component: AnemiaComponent,
  },
  {
    path: "maladies/lymphome",
    component: LymphomeComponent,
  },
  {
    path: "maladies/hypercalcémie",
    component: HypercalcemiaComponent,
  },
  {
    path: "questionnaireOne",
    component: QuestionnaireOneComponent,
  },
  {
    path: "questionnaireTwo",
    component: QuestionnaireTwoComponent,
  },
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("src/app/layouts/admin-layout/admin-layout.module").then(
            (m) => m.AdminLayoutModule
          ),
      },
    ],
    canActivate: [AuthGuard],
  },

  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("src/app/layouts/auth-layout/auth-layout.module").then(
            (m) => m.AuthLayoutModule
          ),
      },
    ],
  },
  // {
  //   path: "**",
  //   redirectTo: "dashboard",
  // },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
