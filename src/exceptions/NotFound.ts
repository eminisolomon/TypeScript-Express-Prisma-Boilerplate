import { HttpStatusCode } from "axios";
import { Exception } from "./Exception";

export class NotFoundException extends Exception {
    constructor(message: string, errors?: string[]) {
        super(HttpStatusCode.NotFound, message, errors);
    }
}