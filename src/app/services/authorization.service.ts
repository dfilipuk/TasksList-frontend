import { StorageService } from "./storage.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthorizationService {
    private TOKEN_NAME = 'auth';

    constructor(private storageService: StorageService) {
    }

    public isAuthorized(): boolean {
        return this.storageService.get(this.TOKEN_NAME) !== null;
    }

    public authorize(login: string, password: string) {
        if (login === 'admin' && password === 'admin') {
            this.storageService.set(this.TOKEN_NAME, '');
        } else {
            throw new Error('Invalid cridentials');
        }
    }

    public deathorize() {
        this.storageService.unset(this.TOKEN_NAME);
    }
}
