import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { StoreModule } from '@ngrx/store';

import { reducers } from 'src/app/reducers';

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
        // StoreModule.forFeature('user', reducers)
    ]
})
export class SecuredModule {}
