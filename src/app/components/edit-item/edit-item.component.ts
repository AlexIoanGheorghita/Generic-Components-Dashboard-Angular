import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { GenericFormConfiguration } from 'src/app/shared/generic-form/models/generic-form-configuration.model';
import { HeaderService } from 'src/app/shared/header/services/header.service';
import { FORM_CONFIGURATION } from 'src/app/shared/models/form-configuration.const';
import { Person } from 'src/app/shared/models/star-wars-person.model';
import { StarWarsService } from 'src/app/shared/services/star-wars.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit, OnDestroy {
  formConfig: GenericFormConfiguration = FORM_CONFIGURATION;
  person: Person | undefined;
  errorMessage: string;
  private routeSub: Subscription;

  constructor(
    private starWarsService: StarWarsService,
    private headerService: HeaderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: Params) => {
      if (!isNaN(+params['item_id'])) {
        const result = this.starWarsService.getItem(+params['item_id']);
        if (result !== undefined) {
          this.person = result;
        } else {
          this.errorMessage = 'This is not the record you are looking for';
        }
      } else {
        this.errorMessage = 'You have to search for a record using an ID';
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
