import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { META_REDUCERS, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { RestModule } from './core/rest/rest.module';

import { reducers } from './reducers';

@NgModule({
    declarations: [AppComponent, NotFoundComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        }),
        EffectsModule.forRoot([]),
        StoreModule.forRoot({}),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        RestModule,
        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
