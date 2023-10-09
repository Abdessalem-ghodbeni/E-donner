import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { CentersComponent } from "src/app/pages/centers/centers.component";
import { UsersComponent } from "src/app/pages/users/users.component";
import { AddUserComponent } from "src/app/pages/add-user/add-user.component";
import { MyProfileComponent } from "src/app/pages/my-profile/my-profile.component";
import { DonationHistoryComponent } from "src/app/pages/donation-history/donation-history.component";
import { AddCenterComponent } from "src/app/pages/add-center/add-center.component";
import { ResponsablesComponent } from "src/app/pages/responsables/responsables.component";
import { AddResponsableComponent } from "src/app/pages/add-responsable/add-responsable.component";
import { AppointmentsComponent } from "src/app/pages/appointments/appointments.component";
import { ReclamationsComponent } from "src/app/pages/reclamations/reclamations.component";
import { EditCenterComponent } from "src/app/pages/edit-center/edit-center.component";
import { EditResponsableComponent } from "src/app/pages/edit-responsable/edit-responsable.component";
import { BloodSupplyComponent } from "src/app/pages/blood-supply/blood-supply.component";
import { UsersCenterComponent } from "src/app/pages/users-center/users-center.component";
import { UserCenterHistoryComponent } from "src/app/pages/user-center-history/user-center-history.component";
import { UserHistoryComponent } from "src/app/pages/user-history/user-history.component";
import { ResponsableGuard } from "src/app/guard/responsable.guard";
import { AdminOrResponsableGuard } from "src/app/guard/admin-or-responsable.guard";
import { AdminGuard } from "src/app/guard/admin.guard";
import { UnauthorizedComponent } from "src/app/pages/unauthorized/unauthorized.component";
import { BloodRequestComponent } from "src/app/pages/blood-request/blood-request.component";
import { EventsComponent } from "src/app/pages/events/events.component";
import { MyAppointmentsComponent } from "src/app/pages/my-appointments/my-appointments.component";
import { CitoyenGuard } from "src/app/guard/citoyen.guard";
import { MyCenterComponent } from "src/app/pages/my-center/my-center.component";
import { AdminOrCitoyenGuard } from "src/app/guard/admin-or-citoyen.guard";
import { MyEventsComponent } from "src/app/pages/my-events/my-events.component";
import { AddEventComponent } from "src/app/pages/add-event/add-event.component";
import { MyBloodRequestComponent } from "src/app/pages/my-blood-request/my-blood-request.component";
import { AcceptedAppointmentsComponent } from "src/app/pages/accepted-appointments/accepted-appointments.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "my-profile", component: MyProfileComponent },

  { path: "centers", component: CentersComponent },
  { path: "centers/:id", component: EditCenterComponent },
  {
    path: "centers/:id/supply",
    component: BloodSupplyComponent,
    canActivate: [AdminOrResponsableGuard],
  },
  {
    path: "supply",
    component: BloodSupplyComponent,
    canActivate: [AdminOrResponsableGuard],
  },
  {
    path: "centers/:id/users",
    component: UsersCenterComponent,
    canActivate: [AdminOrResponsableGuard],
  },
  {
    path: "centers/:id/users/:userId/history",
    component: UserCenterHistoryComponent,
    canActivate: [AdminOrResponsableGuard],
  },
  {
    path: "add-center",
    component: AddCenterComponent,
    canActivate: [AdminGuard],
  },
  {
    path: "my-center",
    component: MyCenterComponent,
    canActivate: [ResponsableGuard],
  },

  { path: "donationHistory", component: DonationHistoryComponent ,  canActivate: [CitoyenGuard] },

  {
    path: "users",
    component: UsersComponent,
    canActivate: [ResponsableGuard],
  },
  {
    path: "users/:id",
    component: UserHistoryComponent,
    canActivate: [AdminOrResponsableGuard],
  },
  {
    path: "users/profile/:id",
    component: UserProfileComponent,
    canActivate: [AdminOrResponsableGuard],
  },
  { path: "users/add", component: AddUserComponent,
  canActivate: [ResponsableGuard], },

  { path: "addCitoyen", component: AddUserComponent,
  canActivate: [ResponsableGuard], },

  {
    path: "responsables",
    component: ResponsablesComponent,
    canActivate: [ResponsableGuard],
  },
  {
    path: "responsables/add",
    component: AddResponsableComponent,
    canActivate: [AdminOrResponsableGuard],
  },
  {
    path: "responsables/:id",
    component: EditResponsableComponent,
    canActivate: [AdminOrResponsableGuard],
  },



  {
    path: "appointments",
    component: AppointmentsComponent,
    canActivate: [ResponsableGuard],
  },

  {
    path: "accepted-appointments",
    component: AcceptedAppointmentsComponent,
    canActivate: [ResponsableGuard],
  },
  {
    path: "my-appointments",
    component: MyAppointmentsComponent,
    canActivate: [CitoyenGuard],
  },
  {
    path: "events",
    component: EventsComponent,
    canActivate: [AdminOrCitoyenGuard],
  },
  {
    path: "my-events",
    component: MyEventsComponent,
    canActivate: [ResponsableGuard],
  },
  {
    path: "my-events/add",
    component: AddEventComponent,
    canActivate: [ResponsableGuard],
  },

  {
    path: "reclamations",
    component: ReclamationsComponent,
    canActivate: [AdminGuard],
  },
  {
    path: "blood-request",
    component: BloodRequestComponent,
  },
  {
    path:"my-blood-request",
    component:MyBloodRequestComponent
  },
  {
    path: "unauthorized",
    component: UnauthorizedComponent,
  },
];
