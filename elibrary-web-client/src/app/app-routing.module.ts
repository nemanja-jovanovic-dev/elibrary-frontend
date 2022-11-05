import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'public' },
	{
		path: 'public',
		loadChildren: () =>
			import('./modules/public/public.module').then((m) => m.PublicModule)
	},
    {
		path: 'secured',
		loadChildren: () =>
			import('./modules/secured/secured.module').then((m) => m.SecuredModule)
	},
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
