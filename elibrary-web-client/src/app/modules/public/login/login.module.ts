import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent } from './login-container/login-container.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: LoginContainerComponent
    }
];

@NgModule({
    declarations: [LoginFormComponent, LoginContainerComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class LoginModule {}
