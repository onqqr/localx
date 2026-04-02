import { Component, inject } from '@angular/core';
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
  housingLocationList: HousingLocationInfo[] = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
