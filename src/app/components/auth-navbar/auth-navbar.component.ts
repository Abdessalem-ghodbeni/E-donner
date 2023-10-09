import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { userLogo } from "src/app/lib/dummy";
import { IUser } from "src/app/models/user";
import { getUser, logout } from "src/app/utils/storage";

@Component({
  selector: "app-auth-navbar",
  templateUrl: "./auth-navbar.component.html",
  styleUrls: ["./auth-navbar.component.css"],
})
export class AuthNavbarComponent implements OnInit {
  connectedUser: IUser = getUser();
  userImage = userLogo;
  navbarOpen = false;

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {

   
    console.log({ user: this.connectedUser });
  }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
  handleLogout() {
    logout();
    this.router.navigateByUrl("/");
  }
}
