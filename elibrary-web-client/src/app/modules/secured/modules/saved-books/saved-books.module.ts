import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedBooksComponent } from './saved-books.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
    },
    {
        path: 'all',
        component: SavedBooksComponent
    }
]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [SavedBooksComponent]
})
export class SavedBooksModule {}
