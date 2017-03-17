import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount: number = 1;

    public incrementCounter() {
        let temp = this.currentCount;
        temp *= 2;

        this.currentCount = temp;
    }
}
