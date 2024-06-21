import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-searching-page',
  templateUrl: './searching-page.component.html',
  styleUrls: ['./searching-page.component.scss']
})
export class SearchingPageComponent {
  searchForm: FormGroup = this.fb.group({
    searchWord: '',
  });

  constructor(private fb: FormBuilder) {}

  get word(): string {
    return this.searchForm.value['searchWord'];
  }
}
