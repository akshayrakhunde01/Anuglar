
import { Routes } from '@angular/router';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { TemplateFromComponent } from './components/template-from/template-from.component';

export const routes: Routes = [
    {path:"DatabindingComponent", component:DatabindingComponent},
    {path:'attribute', component:AttributeDirectiveComponent},
    {path:'template-form',component:TemplateFromComponent}
];
