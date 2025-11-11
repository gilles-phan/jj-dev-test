import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-vehicle-dashboard',
  standalone: false,
  templateUrl: './vehicle-dashboard.component.html',
  styleUrl: './vehicle-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleDashboardComponent {

}
