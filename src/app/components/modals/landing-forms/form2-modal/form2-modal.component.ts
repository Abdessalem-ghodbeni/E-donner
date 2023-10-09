import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-form2-modal",
  templateUrl: "./form2-modal.component.html",
  styleUrls: ["./form2-modal.component.scss"],
})
export class Form2ModalComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      input: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {}
  cancel() {}
}
