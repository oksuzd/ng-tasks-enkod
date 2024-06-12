import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { City } from "../../models/city.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolBarComponent {
  @Output() public newCity = new EventEmitter<City>();

  view = 'list';

  constructor(
    private router: Router,
    // public dialog: MatDialog,
  ) {}

  addCity(): void {
    // const dialogRef: MatDialogRef<CityEditorComponent> = this.dialog.open(CityEditorComponent,
    //   {
    //     data: {id: ''}
    //   });
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.newCity.emit(result);
    //   }
    // });
  }

  navigate(view: string) {
    this.router.navigate([view]).then();
  }

}
