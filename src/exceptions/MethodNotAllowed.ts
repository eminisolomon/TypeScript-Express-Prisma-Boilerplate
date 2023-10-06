import { HttpStatusCode } from "axios";
import { Exception } from "@/exceptions";

export class MethodNotAllowedException extends Exception {
    constructor(message?: string) {
        super(HttpStatusCode.NotAcceptable, message);
    }
}