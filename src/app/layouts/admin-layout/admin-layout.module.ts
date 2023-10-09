import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ClipboardModule } from "ngx-clipboard";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CentersComponent } from "src/app/pages/centers/centers.component";
// import { ToastrModule } from 'ngx-toastr';
import { IvyGalleryModule } from "angular-gallery";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { UsersComponent } from "src/app/pages/users/users.component";
import { AddUserComponent } from "src/app/pages/add-user/add-user.component";
import { MyProfileComponent } from "src/app/pages/my-profile/my-profile.component";
import { DonationHistoryComponent } from "src/app/pages/donation-history/donation-history.component";
import { MatDialogModule } from "@angular/material/dialog";
import { AppointmentModalComponent } from "src/app/components/modals/appointment-modal/appointment-modal.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { AddCenterComponent } from "src/app/pages/add-center/add-center.component";
import { ResponsablesComponent } from "src/app/pages/responsables/responsables.component";
import { AddResponsableComponent } from "src/app/pages/add-responsable/add-responsable.component";
import { MatSelectModule } from "@angular/material/select";
import { AppointmentsComponent } from "src/app/pages/appointments/appointments.component";
import { ReclamationsComponent } from "src/app/pages/reclamations/reclamations.component";
import { CheckFormComponent } from "src/app/components/modals/check-form/check-form.component";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { EditCenterComponent } from "src/app/pages/edit-center/edit-center.component";
import { EditResponsableComponent } from "src/app/pages/edit-responsable/edit-responsable.component";
import { BloodSupplyComponent } from "src/app/pages/blood-supply/blood-supply.component";
import { UsersCenterComponent } from "src/app/pages/users-center/users-center.component";
import { UserCenterHistoryComponent } from "src/app/pages/user-center-history/user-center-history.component";
import { UserHistoryComponent } from "src/app/pages/user-history/user-history.component";
import { UnauthorizedComponent } from "src/app/pages/unauthorized/unauthorized.component";
import { BloodRequestComponent } from "src/app/pages/blood-request/blood-request.component";
import{MyBloodRequestComponent} from '../../pages/my-blood-request/my-blood-request.component'
import { EventsComponent } from "src/app/pages/events/events.component";
import { MyAppointmentsComponent } from "src/app/pages/my-appointments/my-appointments.component";
import { MyCenterComponent } from "src/app/pages/my-center/my-center.component";
import { MyEventsComponent } from "src/app/pages/my-events/my-events.component";
import { AddEventComponent } from "src/app/pages/add-event/add-event.component";
import { AcceptedAppointmentsComponent } from "src/app/pages/accepted-appointments/accepted-appointments.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
    IvyGalleryModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,

    CentersComponent,
    UsersComponent,
    AddUserComponent,
    MyProfileComponent,
    DonationHistoryComponent,
    AppointmentModalComponent,
    CheckFormComponent,
    AddCenterComponent,
    ResponsablesComponent,
    AddResponsableComponent,
    AppointmentsComponent,
    ReclamationsComponent,
    EditCenterComponent,
    EditResponsableComponent,
    BloodSupplyComponent,
    UsersCenterComponent,
    UserCenterHistoryComponent,
    UserHistoryComponent,
    UnauthorizedComponent,
    BloodRequestComponent,
    EventsComponent,
    MyAppointmentsComponent,
    MyCenterComponent,
    MyEventsComponent,
    AddEventComponent,
    MyBloodRequestComponent,
    AcceptedAppointmentsComponent
  ],
})
export class AdminLayoutModule {}
