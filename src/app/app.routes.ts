
import { Routes } from '@angular/router';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { TemplateFromComponent } from './components/template-from/template-from.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormValidationComponent } from './components/reactive-form-validation/reactive-form-validation.component';

export const routes: Routes = [
    {path:"DatabindingComponent", component:DatabindingComponent},
    {path:'attribute', component:AttributeDirectiveComponent},
    {path:'template-form',component:TemplateFromComponent},
    {path:'reactive-form',component:ReactiveFormComponent},
    {path:'reactive-form-Validation',component:ReactiveFormValidationComponent}
];
