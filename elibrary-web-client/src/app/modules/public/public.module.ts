import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/reducers';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect } from 'src/app/reducers/app.effects';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        loadChildren: () =>
            import('./login/login.module').then((m) => m.LoginModule)
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('user', reducers),
        EffectsModule.forFeature([LoginEffect])
    ]
})
export class PublicModule {}
