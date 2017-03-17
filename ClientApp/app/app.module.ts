import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router';

// Components

import {
    AppComponent,
    NavMenuComponent
} from './components/app'

import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { AuthComponent } from './components/auth/auth.component';

// Providers

import { Store, LocalStorage } from './store';
import {
    ApiService,
    AuthService,
    StoreHelper
} from './services'

//const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        AuthComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },

            { path: 'home', component: HomeComponent, canActivate: [AuthService] },
            { path: 'counter', component: CounterComponent, canActivate: [AuthService] },
            { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthService] },

            { path: 'auth', component: AuthComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        Store, ApiService, AuthService, StoreHelper, { provide: LocalStorage, useValue: window.localStorage }
    ]
})
export class AppModule {
}
