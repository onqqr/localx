import { Injectable } from '@angular/core';
import { HousingLocationInfo } from '../../types/housing-location';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getHousingLocationById(id: number): Promise<HousingLocationInfo | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    const locationJson = await data.json();
    return locationJson ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
