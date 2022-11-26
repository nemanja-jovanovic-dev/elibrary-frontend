import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/core/rest/login/model/login-response.model';
import { AppState, getUserInfo } from 'src/app/reducers';
import * as fromUserStore from '../../../../../reducers/app.reducer'

@Component({
    selector: 'app-dashboard-container',
    templateUrl: './dashboard-container.component.html',
    styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

    userInfo$: Observable<LoginResponse| null> = this.store.select(getUserInfo);

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        this.userInfo$.subscribe(value => console.log(value));
    }
}
