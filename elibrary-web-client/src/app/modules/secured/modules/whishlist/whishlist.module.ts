import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhishlistComponent } from './whishlist.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
    },
    {
        path: 'all',
        component: WhishlistComponent
    }
]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [WhishlistComponent]
})
export class WhishlistModule {}
