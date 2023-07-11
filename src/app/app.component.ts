import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form = new FormGroup({});
  model = { email: 'email@gmail.com', firstname: 'Pier', lastname: 'cretara' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
    },
    {
      key: 'firstname',
      type: 'input',
      props: {
        label: 'First name',
        placeholder: 'Enter email',
        required: true,
      },
    }
  ];

  onSubmit({ valid, value }: { valid: any; value: any }) {
    console.log('valid', valid);
    console.log('value', value);
  }
}
