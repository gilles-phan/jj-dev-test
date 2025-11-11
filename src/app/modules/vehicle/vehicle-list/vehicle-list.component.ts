import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FuelType } from '@app/core/enums';
import { Vehicle } from '@app/core/models';
import { VehicleService } from '@app/shared/service/vehicle.service';
import { DELAY_MS } from '@app/shared/utils/constant.utils';
import { generateMockVehicle } from '@app/shared/utils/vehicle.utils';
import { ColDef } from 'ag-grid-community';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-vehicle-list',
  standalone: false,
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleListComponent {
  @Input()
  showBtnAddRandomVehicle = true;
  private destroy$ = new Subject<void>();
  searchCtrl = new FormControl('', { nonNullable: true });

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.searchCtrl.valueChanges
      .pipe(
        debounceTime(DELAY_MS),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(term => this.vehicleService.updateSearchTerm(term));
  }
  get filteredVehicles$() {
    return this.vehicleService.filteredVehicles$;
  }

  columnDefs: ColDef[] = [
    { field: 'id', headerName: '#', width: 80 },
    { field: 'licensePlate', headerName: 'Immatriculation', flex: 1 },
    { field: 'brand', headerName: 'Marque', flex: 1 },
    { field: 'model', headerName: 'Modèle', flex: 1 },
    { field: 'year', headerName: 'Année', width: 80 },
    { field: 'fuelType', headerName: 'Carburant', flex: 1 },
    { headerName: 'Conducteur', flex: 1, valueGetter: p => p.data?.driver?.firstName ?? '-' },
    {
      headerName: 'Actions',
      cellRenderer: () => `
        <button class="action-btn edit" title="Éditer">✏️</button>
        <button class="action-btn delete" title="Supprimer">🗑️</button>
      `,
      width: 120,
      suppressSizeToFit: true
    },
  ];

  /**
   * Add a mock vehicle.
   */
  onAddMockVehicle() {
    this.vehicleService.addVehicle(generateMockVehicle())
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        console.log('✅ Véhicule ajouté');
      });
  }

  /**
   * Handle cell click events for edit and delete actions.
   *
   * @param event The cell click event.
   */
  onCellClicked(event: any) {
    const vehicle = event.data;
    const target: HTMLElement = event.event?.target;
    if (!target) return;

    if (target.classList.contains('edit')) {
      this.onEdit(vehicle);
    } else if (target.classList.contains('delete')) {
      this.onDelete(vehicle?.id);
    }
  }

  /**
   * Edit a vehicle.
   *
   * @param vehicle The vehicle to edit.
   */
  onEdit(vehicle: Vehicle) {
    const newModel = prompt('Modifier le modèle :', vehicle.model);
    if (newModel && newModel !== vehicle.model) {
      const updated = { ...vehicle, model: newModel };
      this.vehicleService.updateVehicle(updated).subscribe(() => {
        console.log('✅ Véhicule mis à jour');
      });
    }
  }

  /**
   * Delete a vehicle.
   *
   * @param vehicleId The ID of the vehicle to delete.
   */
  onDelete(vehicleId: string) {
    if (!vehicleId) return;
    if (confirm('Supprimer ce véhicule ?')) {
      this.vehicleService.deleteVehicle(vehicleId)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: () => console.log('Véhicule supprimé'),
          error: (e) => console.error('Suppression échouée', e)
        });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
