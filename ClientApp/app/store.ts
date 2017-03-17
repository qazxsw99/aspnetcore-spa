import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable, OpaqueToken } from '@angular/core';
import 'rxjs/Rx';

export interface Note {
    color: string,
    title: string,
    value: string,
    id?: string | number,
    createdAt?: string,
    updatedAt?: string,
    userId?: string
}

export interface State {
    notes: Array<Note>
}

const defaultState = {
    notes: []
}

const _store = new BehaviorSubject<State>(defaultState);

// reference: http://stackoverflow.com/questions/39085632/localstorage-is-not-defined-angular-universal/39098748#39098748
export const LocalStorage = new OpaqueToken('localStorage');

@Injectable()
export class Store {
    private _store = _store;
    changes = this._store.asObservable().distinctUntilChanged()

    setState(state: State) {
        this._store.next(state);
    }

    getState(): State {
        return this._store.value;
    }

    purge() {
        this._store.next(defaultState);
    }
}
