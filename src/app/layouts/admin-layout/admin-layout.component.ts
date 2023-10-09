import { Component, OnInit } from "@angular/core";
import { getRole } from "src/app/utils/storage";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"],
})
export class AdminLayoutComponent implements OnInit {
  role: string = getRole();
  constructor() {}

  ngOnInit() {}
}
