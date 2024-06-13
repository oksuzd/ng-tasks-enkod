import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { City } from "../../models/city.model";

@Component({
  selector: 'app-city-editor',
  templateUrl: './city-editor.component.html',
  styleUrls: ['./city-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityEditorComponent implements OnInit {

  data: City =   {
    id: 1,
    image: 'city-moscow.jpg',
    name: 'Москва',
    description: 'Столица России, город федерального значения.',
    favorite: false
  }

  titleName: string = '';
  cityForm: FormGroup = this.fb.group({
    id: this.data?.id ?? 0,
    image: this.data?.image ?? '',
    name: [this.data?.name ?? '', [Validators.required, Validators.minLength(3), Validators.maxLength(24)]],
    description: [this.data?.description ?? '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
  });

  constructor(
    private fb: FormBuilder,
    // public dialogRef: MatDialogRef<CityEditorComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: City
  ) {}

  ngOnInit() {
    if (!!this.data.id) {
      this.titleName = 'Редактировать город';
    } else {
      this.titleName = 'Создать город';
    }
  }

  onCancelClick() {
    // this.dialogRef.close();
  }
}
