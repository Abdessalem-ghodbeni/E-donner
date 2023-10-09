import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-form-modal",
  templateUrl: "./form-modal.component.html",
  styleUrls: ["./form-modal.component.scss"],
})
export class FormModalComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      input: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {}
  cancel() {}
}
