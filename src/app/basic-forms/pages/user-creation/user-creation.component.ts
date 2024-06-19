import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCreationComponent implements OnInit {
  skillsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.skillsForm = this.fb.group({
      skills: this.fb.array([])
    });
  }

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  addSkill(): void {
    const skillForm = this.fb.group({
      name: ['', Validators.required]
    });
    this.skills.push(skillForm);
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  createSkills(): void {
    const skills = this.skills.controls.map(control => (control as FormGroup).value.name);
    console.log(skills);
  }

  protected readonly FormGroup = FormGroup;
}
