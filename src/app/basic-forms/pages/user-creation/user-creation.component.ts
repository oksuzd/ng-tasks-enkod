import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCreationComponent {
  languages = ['Русский', 'Английский'];
  users = ['Пользователь', 'Администратор'];
  userForm: FormGroup = this.fb.group({
    firstNameValue: ['', Validators.required],
    lastNameValue: ['', Validators.required],
    languageValue: this.languages[0],
    radioValue: 'user',
    skills: this.fb.array([])
  });

  constructor(private fb: FormBuilder) {}

  get skills(): FormArray {
    return this.userForm.get('skills') as FormArray;
  }

  addSkill() {
    const skillForm = this.fb.group({
      name: ['', Validators.required]
    });
    this.skills.push(skillForm);
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  createUser() {
    const skills = this.skills.controls.map(control => (control as FormGroup).value.name);
    console.log(skills);
  }
}
