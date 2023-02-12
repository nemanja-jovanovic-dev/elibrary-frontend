import { Component, OnInit } from '@angular/core';
import { SECURED__BOOKS, SECURED__HOME, SECURED__IN_PROGRESS, SECURED__SAVED_BOOKS, SECURED__WHISHLIST } from 'src/app/core/utils/route-service';
import { ELIBRARY_LOGO } from 'src/app/shared/utils/image-routes.util';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    readonly ELIBRARY_LOGO = ELIBRARY_LOGO;

    readonly SECURED__HOME = SECURED__HOME;
    readonly SECURED__BOOKS = SECURED__BOOKS;
    readonly SECURED__SAVED_BOOKS = SECURED__SAVED_BOOKS;
    readonly SECURED__IN_PROGRESS = SECURED__IN_PROGRESS;
    readonly SECURED__WHISHLIST = SECURED__WHISHLIST;

    constructor() {}

    ngOnInit() {}
}
