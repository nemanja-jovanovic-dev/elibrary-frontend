import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/reducers/app.reducer';
import { ContainerComponent } from './container/container.component';
import { SecuredEffects } from './store/effects';
import { reducers } from './store/index';


const routes: Routes = [
    {
        path: '',
        component: ContainerComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('./modules/dashboard/dashboard.module').then(
                        (m) => m.DashboardModule
                    )
            }
        ]
    }
];

@NgModule({
    declarations: [ContainerComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('secured', reducers),
        EffectsModule.forFeature([SecuredEffects])
    ]
})
export class SecuredModule {}
