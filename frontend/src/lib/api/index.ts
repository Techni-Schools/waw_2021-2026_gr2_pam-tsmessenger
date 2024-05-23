import { Options } from "./AxiosManager";
import Auth from "./auth";

class Api {
    public readonly auth;

    constructor(options: Options) {
        this.auth = new Auth(options);
    }
}

export default Api