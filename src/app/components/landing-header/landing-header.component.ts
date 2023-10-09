import { Component, OnInit } from "@angular/core";
// import { AuthServices } from "src/app/auth/auth.services";
// import { RegisterService } from "../../../auth/components/register/register.service";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { IUser } from "src/app/models/user";
import {userLogo} from "src/app/lib/dummy"
import { getUser, logout } from "src/app/utils/storage";


@Component({
  selector: "app-landing-header",
  templateUrl: "./landing-header.component.html",
  styleUrls: ["./landing-header.component.scss"],
})
export class LandingHeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private dialog: MatDialog // private authService: AuthServices, // private registerService: RegisterService
  ) {}
  userImage = userLogo;
  connectedUser= JSON.parse(localStorage.getItem('user'))
  authStatus: boolean = true;
  isNavbarCollapsed = true;
  username: String;
  ngOnInit() {

  }

  onSignOut() {

    localStorage.removeItem('user');
    this.router.navigateByUrl("/");
 
  }
  toggleProfileU(): void {
  
  }
  handleLogout() {
    logout();
    localStorage.removeItem('user');
    this.router.navigateByUrl("/");
  }
}
