import { HttpStatusCode } from "axios";
import { Exception } from "./Exception";

export class BadRequestException extends Exception {
    constructor(message: string, errors: string[]) {
        super(HttpStatusCode.BadRequest, message, errors);
    }
}