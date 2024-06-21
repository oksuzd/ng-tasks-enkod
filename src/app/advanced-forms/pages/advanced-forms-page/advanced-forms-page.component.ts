import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-advanced-forms-page',
  templateUrl: './advanced-forms-page.component.html',
  styleUrls: ['./advanced-forms-page.component.scss']
})
export class AdvancedFormsPageComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      keyValue: [{ key: 'Key', value: 'Value' }]
    });
  }
}
