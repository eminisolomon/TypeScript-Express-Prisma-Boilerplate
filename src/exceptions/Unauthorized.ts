import { HttpStatusCode } from "axios";
import { Exception } from "./Exception";


export class UnauthorizedException extends Exception {
    constructor(message: string) {
        super(HttpStatusCode.Unauthorized, message);
    }
}