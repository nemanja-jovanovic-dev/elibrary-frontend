import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, getToken } from 'src/app/reducers';

@Component({
    selector: 'app-dashboard-container',
    templateUrl: './dashboard-container.component.html',
    styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

    userInfo$: Observable<string | null> = this.store.select(getToken);

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        this.userInfo$.subscribe(value => console.log(value));
    }
}
