import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterContainerComponent } from './container/register-container.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [{ path: '', component: RegisterContainerComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedModule],
    exports: [],
    declarations: [RegisterContainerComponent, RegisterFormComponent],
    providers: []
})
export class RegisterModule {}
