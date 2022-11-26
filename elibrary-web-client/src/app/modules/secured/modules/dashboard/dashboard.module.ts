import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: DashboardContainerComponent }];

@NgModule({
    declarations: [DashboardContainerComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class DashboardModule {}
