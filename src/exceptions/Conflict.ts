import { Exception } from "@/exceptions";
import { HttpStatusCode } from "axios";

export class ConflictException extends Exception {
    constructor(message?: string) {
        super(HttpStatusCode.Conflict, message);
    }
}