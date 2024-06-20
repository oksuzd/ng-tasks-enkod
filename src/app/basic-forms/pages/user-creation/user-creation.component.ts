import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import { TuiValidationError } from "@taiga-ui/cdk";
import { Configs, NewUser } from "../../models/newUser.model";

export function requiredFieldValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value ? null : {requiredField: 'Заполните поле'};
  };
}

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCreationComponent {
  languages: Configs[] = [
    {ru: 'Русский', en: 'Russian'},
    {ru: 'Английский', en: 'English'}
  ];

  roles: Configs[] = [
    {ru: 'Пользователь', en: 'user'},
    {ru: 'Администратор', en: 'admin'}
  ];

  userForm: FormGroup = this.fb.group({
    name: ['', requiredFieldValidator()],
    surname: ['', requiredFieldValidator()],
    lang: this.languages[0].ru,
    role: this.roles[0].ru,
    skills: this.fb.array([])
  });
  skillsError = new TuiValidationError('Желательно не больше 3х умений');

  constructor(private fb: FormBuilder) {
  }

  get skills(): FormArray {
    return this.userForm.get('skills') as FormArray;
  }

  get numberOfSkillsError(): TuiValidationError | null {
    return this.skills.length > 3 ? this.skillsError : null;
  }

  getLanguages(languages: Configs[]): string[] {
    return languages.map(lang => lang.ru);
  }

  getAliases(str: string, arr: Configs[]): string {
    const formItem = this.userForm.get(str)!.value;
    return arr.find(alias => alias.ru === formItem)!.en;
  }

  addSkill() {
    const skillForm = this.fb.group({
      name: ['', requiredFieldValidator()]
    });
    this.skills.push(skillForm);
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  createUser() {
    const newUser: NewUser = {
      name: this.userForm.get('name')?.value,
      surname: this.userForm.get('surname')?.value,
      lang: this.getAliases('lang', this.languages),
      role: this.getAliases('role', this.roles),
      skills: this.skills.controls.map(skill => skill.get('name')?.value)
    };
    console.log(newUser);
  }
}
