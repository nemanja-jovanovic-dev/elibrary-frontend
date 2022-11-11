import { Component, OnInit } from '@angular/core';
import { ELIBRARY_LOGO, HOMEPAGE_COVER } from 'src/app/shared/utils/image-routes.util';

@Component({
    selector: 'app-login-container',
    templateUrl: './login-container.component.html',
    styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {

    HOMEPAGE_COVER = HOMEPAGE_COVER;
    ELIBRARY_LOGO = ELIBRARY_LOGO;

    constructor() {}

    ngOnInit(): void {}
}