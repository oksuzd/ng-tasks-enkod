import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { City } from "../../models/city.model";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { CitiesService } from "../../state/cities.service";
import { UntilDestroy} from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-city-editor',
  templateUrl: './city-editor.component.html',
  styleUrls: ['./city-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityEditorComponent implements OnInit {

  data: Partial<City> = {};

  cityForm: FormGroup = this.fb.group({
    id: [''],
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(24)]],
    description: ['',
      [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
    image: [''],
    favorite: [false]
  });

  constructor(
    private fb: FormBuilder,
    public route: ActivatedRoute,
    private citiesService: CitiesService,
    private cdr: ChangeDetectorRef,
    private location: Location
  ) {
  }

  ngOnInit() {
    const itemId = this.route.snapshot.params['id'];
    if (itemId) {
      this.data = this.citiesService.getCityById(itemId)!;
      const { id, name, description, image, favorite } = this.data;
      this.cityForm.patchValue({ id, name, description, image, favorite });
      this.cdr.detectChanges();
    }
  }

  submitForm() {
    if (this.cityForm.valid) {
      if (this.data.id) {
        this.editCity();
      } else {
        this.createCity();
      }
    }
    this.location.back();
  }

  private createCity() {
    this.citiesService.addCity(this.cityForm.value).subscribe();
  }

  private editCity() {
    this.citiesService.updateCity(this.cityForm.value).subscribe();
  }
}
