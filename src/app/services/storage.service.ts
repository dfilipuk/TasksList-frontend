export class StorageService {
    public get(key: string): string | null {
        return localStorage.getItem(key);
    }

    public set(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    public unset(key: string) {
        localStorage.removeItem(key);
    }
}
