import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";

interface State {
    //form
}

const INITIAL_STATE: State = {

}

@Injectable()
export class RegisterStore extends ComponentStore<State> {
    constructor() {
        super(INITIAL_STATE)
    }

    //register effect
}
