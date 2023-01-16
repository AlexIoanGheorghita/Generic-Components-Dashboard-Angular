import { Component, OnInit } from '@angular/core';
import { GenericFormConfiguration } from 'src/app/shared/generic-form/models/generic-form-configuration.model';
import { FORM_CONFIGURATION } from 'src/app/shared/models/form-configuration.const';
import { StarWarsService } from 'src/app/shared/services/star-wars.service';
import { HeaderService } from 'src/app/shared/header/services/header.service';
import { Person } from 'src/app/shared/models/star-wars-person.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit{
  formConfig: GenericFormConfiguration = FORM_CONFIGURATION;

  constructor(
    private starWarsService: StarWarsService,
    private headerService: HeaderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.headerService.title.next('Add a person');

    this.emptyFields(this.formConfig);

    this.formConfig.formActions = [
      {
        text: 'Add Person',
        config: {
          color: '#FFFFFF',
          backgroundColor: '#4d4dff',
          fontSize: 16,
          borderRadius: 5
        },
        action: () => {
          let newPerson = this.formConfig.formGroup.value;

          const correctBirthYear = new Date(newPerson.birth_year).getFullYear();  // convert date + timezone into year
          newPerson = { ...newPerson, birth_year: correctBirthYear, height: +newPerson.height, mass: +newPerson.mass };
          this.starWarsService.addItem(newPerson as Person);

          this.router.navigate(['/']);
        }
      }
    ]
  }

  private emptyFields(formConfig: GenericFormConfiguration) {
    for (let field of formConfig.formFields) {
      field.formControl.setValue(null);
    }
  }
}
