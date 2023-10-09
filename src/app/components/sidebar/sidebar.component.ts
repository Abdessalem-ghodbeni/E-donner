import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  permission: string[];
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Tableau de bord",
    icon: "ni-tv-2 text-primary",
    class: "",
    permission: ["admin", "responsable"],
  },
   {
     path: "/my-profile",
     title: "My profile",
     icon: "ni-single-02 text-yellow",
     class: "",
    permission: ["responsable", "citoyen"],
  },
  // {
  //   path: "/my-projects",
  //   title: "My projects",
  //   icon: "ni-circle-08 text-pink",
  //   class: "",
  //   permission: ["entrepreneur"],
  // },
  // {
  //   path: "/invested-projects",
  //   title: "My invested projects",
  //   icon: "ni-circle-08 text-pink",
  //   class: "",
  //   permission: ["investor"],
  // },
  {
    path: "/donationHistory",
    title: "Historique don",
    icon: "ni-circle-08 text-pink",
    class: "",
    permission: ["citoyen"],
  },

  {
    path: "/centers",
    title: "Gestion des centres",
    icon: "ni-circle-08 text-pink",
    class: "",
    permission: ["admin"],
  },
  {
    path: "/centers",
    title: "Centres",
    icon: "ni-circle-08 text-pink",
    class: "",
    permission: ["citoyen"],
  },
  {
    path: "/my-center",
    title: "Mon centre",
    icon: "ni-circle-08 text-pink",
    class: "",
    permission: ["responsable"],
  },

  {
    path: "/supply",
    title: "stock de Sang",
    icon: "ni-circle-08 text-pink",
    class: "",
    permission: ["responsable"],
  },

  {
    path: "/responsables",
    title: "Responsables",
    icon: "ni-circle-08 text-pink",
    class: "",
    permission: ["responsable"],
  },


  {
    path: "/users",
    title: "Citoyens",
    icon: "ni-circle-08 text-pink",
    class: "",
    permission: ["responsable"],
  },
  {
    path: "/appointments",
    title: "Demandes des Rendez-vous",
    icon: "ni-circle-08 text-pink",
    class: "",
    permission: ["responsable"],
  },


  {
    path: "/accepted-appointments",
    title: "Rendez-vous",
    icon: "ni-circle-08 text-pink",
    class: "",
    permission: ["responsable"],
  },
  
  {
    path: "/my-appointments",
    title: "Mes rendez-vous",
    icon: "ni-circle-08 text-pink",
    class: "",
    permission: ["citoyen"],
  },
  {
    path: "/blood-request",
    title: "Demandes de sang",
    icon: "ni-circle-08 text-pink",
    class: "",
    permission: ["admin", "responsable", "citoyen"],
  },
  {
    path: "/my-blood-request",
    title: "Mes Demandes de sang",
    icon: "ni-circle-08 text-pink",
    class: "",
    permission: ["citoyen"],
  },
  {
    path: "/events",
    title: "Événements",
    icon: "ni-circle-08 text-pink",
    class: "",
    permission: ["admin", "citoyen"],
  },
  {
    path: "/my-events",
    title: "Mes événements",
    icon: "ni-circle-08 text-pink",
    class: "",
    permission: ["responsable"],
  },
  {
    path: "/reclamations",
    title: "Réclamations",
    icon: "ni-circle-08 text-pink",
    class: "",
    permission: ["admin"],
  },

 
  // {
  //   path: "/project-requests",
  //   title: "Project requests",
  //   icon: "ni-circle-08 text-pink",
  //   class: "",
  //   permission: ["admin"],
  // },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  @Input() role: string;
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) =>
      menuItem.permission.includes(this.role)
    );
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
