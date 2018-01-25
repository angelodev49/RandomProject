import { NgModule } from '@angular/core';


import { RegisterComponent } from './register.component';
import { ThemeModule } from '../../@theme/theme.module';


@NgModule({
    imports: [
        ThemeModule,
    ],
    declarations: [
        RegisterComponent
    ],
})
export class RegisterModule { }
