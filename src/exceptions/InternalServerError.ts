import { HttpStatusCode } from "axios";
import { Exception } from "./Exception";

export class InternalServerErrorException extends Exception {
    constructor(message: string, errors?: string[]) {
        super(HttpStatusCode.InternalServerError, message, errors);
    }
}