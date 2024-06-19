import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent {
  @Input() skillForm: any;
  @Output() remove: EventEmitter<void> = new EventEmitter();

  removeSkill(): void {
    this.remove.emit();
  }
}
