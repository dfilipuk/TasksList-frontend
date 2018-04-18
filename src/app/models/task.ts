export class Task {
    constructor(private _num: number, private _name: string, private _author: string, private _priority: string) {
    }

    public get num(): number {
        return this._num;
    }

    public get name(): string {
        return this._name;
    }

    public get author(): string {
        return this._author;
    }

    public get priority(): string {
        return this._priority;
    }
}
