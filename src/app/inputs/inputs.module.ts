import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputComponent2} from './fmct';
import { TextareaComponent } from './textarea/textarea.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { DateCalendarComponent } from './date-calendar/date-calendar.component';
import { CounterComponent } from './counter/counter.component';
import { SelectComponent } from './select/select.component';
import { CascadeComponent } from './cascade/cascade.component';
import { RateComponent } from './rate/rate.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  declarations: [
    InputComponent,
    InputComponent2,
    TextareaComponent,
    CheckboxComponent,
    RadioComponent,
    DateCalendarComponent,
    CounterComponent,
    SelectComponent,
    CascadeComponent,
    RateComponent,
  ],
  exports:[
    InputComponent,
    TextareaComponent,
    CheckboxComponent,
    RadioComponent,
    DateCalendarComponent,
    CounterComponent,
    SelectComponent,
    CascadeComponent,
    RateComponent,
  ],
  entryComponents:[
    InputComponent,
  ],
})
export class InputsModule { }

