import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
    },
    {
        path: 'all',
        component: BooksComponent
    }
]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [BooksComponent]
})
export class BooksModule {}
