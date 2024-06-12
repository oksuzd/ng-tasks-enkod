import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoFilter, VISIBILITY_FILTER } from "../../models/filter.model";


@Component({
  selector: 'app-todos-filters',
  templateUrl: './todos-filters.component.html',
  styleUrls: ['./todos-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosFiltersComponent implements OnInit {

  @Input() active!: VISIBILITY_FILTER;
  @Input() filters!: TodoFilter[];
  @Output() update = new EventEmitter<VISIBILITY_FILTER>();

  selectedFilter!: VISIBILITY_FILTER;

  ngOnInit() {
    this.selectedFilter = this.active;
    this.update.emit(this.selectedFilter);
  }

  onFilterChange() {
    this.update.emit(this.selectedFilter);
  }
}
