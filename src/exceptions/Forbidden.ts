import { Exception } from "@/exceptions";
import { HttpStatusCode } from "axios";

export class ForbiddenException extends Exception {
    constructor(message?: string) {
        super(HttpStatusCode.Forbidden, message);
    }
}