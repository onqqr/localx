import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../core/services/housting';
import { HousingLocationInfo } from '../../types/housing-location';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {
  readonly route: ActivatedRoute = inject(ActivatedRoute);
  readonly housingService = inject(HousingService);
  public housingLocation: HousingLocationInfo | undefined;
  readonly cdr = inject(ChangeDetectorRef);

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
      this.housingLocation = housingLocation;
      this.cdr.markForCheck();
    });
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}
