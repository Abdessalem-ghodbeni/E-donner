import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { LandingComponent } from "./pages/landing/landing.component";
import { IvyGalleryModule } from "angular-gallery";
import { LandingHeaderComponent } from "./components/landing-header/landing-header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
 import { MainHeroComponent } from "./components/main-hero/main-hero.component";
import { MainFooterComponent } from "./components/main-footer/main-footer.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { SimpleModalModule } from "ngx-simple-modal";
import { AuthNavbarComponent } from "./components/auth-navbar/auth-navbar.component";
import { AnemiaComponent } from "./pages/diseases/anemia/anemia.component";
import { LymphomeComponent } from "./pages/diseases/lymphome/lymphome.component";
import { HypercalcemiaComponent } from "./pages/diseases/hypercalcemia/hypercalcemia.component";
import { FormModalComponent } from "./components/modals/landing-forms/form-modal/form-modal.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { Form2ModalComponent } from "./components/modals/landing-forms/form2-modal/form2-modal.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { DemandeSangModalComponent } from "./components/modals/landing-forms/demandeSang-modal/demandeSang-modal.component";
import { QuestionnaireOneComponent } from "./pages/questionnaireOne/questionnaireOne.component";
import { QuestionnaireTwoComponent } from "./pages/questionnaireTwo/questionnaireTwo.component";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    IvyGalleryModule,
    MatToolbarModule,
    CarouselModule,
    MatProgressBarModule,
    MatDialogModule,
    MatExpansionModule,
    SimpleModalModule.forRoot({ container: "modal-container" }),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    LandingComponent,
    AnemiaComponent,
    LymphomeComponent,
    HypercalcemiaComponent,
    QuestionnaireOneComponent,
    QuestionnaireTwoComponent,
    LandingHeaderComponent,
    MainHeroComponent,
    MainFooterComponent,
    AuthNavbarComponent,
    FormModalComponent,
    DemandeSangModalComponent,
    Form2ModalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
