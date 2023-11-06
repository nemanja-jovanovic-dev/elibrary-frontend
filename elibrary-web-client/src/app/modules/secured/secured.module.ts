import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/reducers/app.reducer';
import { NavComponent } from './components/nav/nav.component';
import { ContainerComponent } from './container/container.component';
import { SecuredEffects } from './store/effects';
import { reducers } from './store/index';

const routes: Routes = [
    {
        path: '',
        component: ContainerComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                loadChildren: () =>
                    import('./modules/dashboard/dashboard.module').then(
                        (m) => m.DashboardModule
                    )
            },
            {
                path: 'books',
                loadChildren: () =>
                    import('./modules/books/books.module').then(
                        (m) => m.BooksModule
                    )
            },
            {
                path: 'saved-books',
                loadChildren: () =>
                    import('./modules/saved-books/saved-books.module').then(
                        (m) => m.SavedBooksModule
                    )
            },
            {
                path: 'in-progress',
                loadChildren: () =>
                    import('./modules/in-progress/in-progress.module').then(
                        (m) => m.InProgressModule
                    )
            },
            {
                path: 'whishlist',
                loadChildren: () =>
                    import('./modules/whishlist/whishlist.module').then(
                        (m) => m.WhishlistModule
                    )
            },
        ]
    }
];

@NgModule({
    declarations: [ContainerComponent, NavComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('secured', reducers),
        EffectsModule.forFeature([SecuredEffects])
    ]
})
export class SecuredModule {}
