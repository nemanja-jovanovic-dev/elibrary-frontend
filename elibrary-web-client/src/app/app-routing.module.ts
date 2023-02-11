import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/guards/login.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'public' },
	{
		path: 'p',
		loadChildren: () =>
			import('./modules/public/public.module').then((m) => m.PublicModule)
	},
    {
		path: 's',
        canActivate: [LoginGuard],
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
