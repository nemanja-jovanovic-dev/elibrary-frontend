import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import * as actions from '../store/actions';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        const token = window.localStorage.getItem('token');
        this.store.dispatch(actions.setToken({token: token ?? ''}));
        this.store.dispatch(actions.setUserDetails({token: token ?? ''}));
    }
}
