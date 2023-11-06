import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserDetailsModel } from 'src/app/core/rest/login/model/login-response.model';
import { AppState, getToken, getUserInfo } from 'src/app/reducers';

@Component({
    selector: 'app-dashboard-container',
    templateUrl: './dashboard-container.component.html',
    styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

    userInfo$: Observable<UserDetailsModel | null> = this.store.select(getUserInfo);

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        // this.userInfo$.subscribe(value => console.log(value));
    }
}
