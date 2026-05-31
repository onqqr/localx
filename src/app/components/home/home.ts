import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { HousingService } from '../../core/services/housting';
import { HousingLocationInfo } from '../../types/housing-location';
import { HousingLocation } from '../housing-location/housing-location';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly housingService: HousingService = inject(HousingService);
  readonly cdr = inject(ChangeDetectorRef);

  housingLocationList: HousingLocationInfo[] = [];
  filteredLocationList: HousingLocationInfo[] = [];
  serverError = false;

  constructor() {
    this.loadData();
  }

  loadData() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocationInfo[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
        this.serverError = false;
        this.cdr.markForCheck();
      })
      .catch(() => {
        this.serverError = true;
        this.cdr.markForCheck();
      });
  }

  filterResults(text: string) {
    if (this.serverError) return;
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
