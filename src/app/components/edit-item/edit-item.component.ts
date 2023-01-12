import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
export class EditItemComponent implements OnInit, AfterViewInit, OnDestroy {
  formConfig: GenericFormConfiguration = FORM_CONFIGURATION;
  person: Person | undefined;
  errorMessage: string;
  private routeSub: Subscription;

  constructor(
    private starWarsService: StarWarsService,
    private headerService: HeaderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: Params) => {
      if (!isNaN(+params['item_id'])) {
        const result = this.starWarsService.getItem(+params['item_id']);
        if (result !== undefined) {
          this.person = result;
          this.headerService.title.next('Edit item with ID ' + this.person.id);

          this.formConfig.formId = 'edit-item-form';

          this.formConfig.formActions = [
            {
              text: 'Edit Person',
              config: {
                color: '#FFFFFF',
                backgroundColor: '#4d4dff',
                fontSize: 16,
                borderRadius: 5
              },
              action: () => {
                let editedPersonDetails = this.formConfig.formGroup.value;

                const correctBirthYear = new Date(editedPersonDetails.birth_year).getFullYear();  // convert date + timezone into year
                editedPersonDetails = { ...editedPersonDetails, id: this.person!.id, birth_year: correctBirthYear, height: +editedPersonDetails.height, mass: +editedPersonDetails.mass };

                this.starWarsService.updateItem(this.person!.id, editedPersonDetails as Person);

                this.router.navigate(['/']);
              }
            }
          ];

          console.log(this.formConfig);
        } else {
          this.errorMessage = 'This is not the record you are looking for';
        }
      } else {
        this.errorMessage = 'You have to search for a record using an ID';
      }
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // populate form fields with existing values
      this.populateFormFields(this.formConfig, this.person!);
    })
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  private populateFormFields(formConfig: GenericFormConfiguration, person: Person) {
    for (let field of formConfig.formFields) {
      if (field.formFieldId !== 'birth_year') {
        field.formControl.setValue(person![field.formFieldId as keyof Person]);
      } else {
        let date = person![field.formFieldId as keyof Person].toString().split('BBY')[0];
        let prefix: string = '';
        if (!isNaN(+date)) {
          if (date.length < 4) {
            if (date.length <= 1) {
              prefix = '190';
            } else if (date.length >= 3) {
              prefix = '1';
            } else {
              prefix = '19';
            }
          }
        } else {
          prefix = '19';
          date = '00';
        }

        field.formControl.setValue(new Date(prefix + date));
      }
    }

    console.log(formConfig.formFields);
  }
}
