import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';


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
    ]
})
export class SecuredModule {}
