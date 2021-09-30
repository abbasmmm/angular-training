import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export type AppEvents = 'Login' | 'ThemeChange'

export interface AppEvent {
    name?: AppEvents;
    value?: any;
}

@Injectable({
    providedIn: 'root'
})
export class EventBusService {

    constructor() { }

    eventBus$ = new BehaviorSubject({});

    on(event: AppEvents, action: any): Subscription {
        return this.eventBus$.pipe(
            filter((e: AppEvent) => {
                console.log('event rec');
                return e.name === event
            }),
            map((e: AppEvent) => e.value)).subscribe(action);
    }

    sendEvent(event: AppEvent) {
        console.log('event sent');
        this.eventBus$.next(event);
    }
}