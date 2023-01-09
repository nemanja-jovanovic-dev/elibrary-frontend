import { Component } from '@angular/core';
import {
    ELIBRARY_LOGO,
    REGISTER_COVER
} from 'src/app/shared/utils/image-routes.util';

@Component({
    selector: 'app-register-container',
    templateUrl: './register-container.component.html',
    styleUrls: ['./register-container.component.scss']
})
export class RegisterContainerComponent {
    readonly ELIBRARY_LOGO = ELIBRARY_LOGO;
    readonly REGISTER_COVER = REGISTER_COVER;

    onRegister(): void {
        throw new Error('Method not implemented.');
    }

    onBack(): void {
        throw new Error('Method not implemented.');
    }
}
