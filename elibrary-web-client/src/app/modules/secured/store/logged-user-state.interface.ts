import { UserDetailsModel } from "src/app/core/rest/login/model/login-response.model";

export interface LoggedUserState {
    userInfo: UserDetailsModel | null;
    token: string | null;
}
