import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-test-rxjs',
  imports: [],
  templateUrl: './test-rxjs.html',
  styleUrl: './test-rxjs.scss',
})
export class TestRxjs implements OnInit {
  rxConsole$ = of('click', 'http', 'timer');

  ngOnInit() {
    this.getApplyObservableData();
    // this.getRxConsole();
    // this.createObservable();
  }

  getRxConsole() {
    this.rxConsole$.subscribe((value) => console.log(value));
  }

  createObservable() {
    const stream$ = new Observable((subscriber) => {
      console.log('Observable started!');
      subscriber.next('Value');
    });
    stream$.subscribe((value) => console.log('Received: ' + value));
  }

  getApplyObservableData() {
    const data = ['Banana', 'Apple', 'Orange', 'Watermelon', 'Cherry'];
    const stream$ = new Observable((subscriber) => {
      for (const item of data) {
        if (item === 'Watermelon') {
          subscriber.error('Error. You have Watermelon!');
          return;
        } else {
          subscriber.next(item);
        }
      }
      subscriber.complete();
    });

    stream$.subscribe({
      next: (value) => console.log('Next: ' + value),
      error: (error) => console.log('Error: ' + error),
      complete: () => console.log('Complete!'),
    });
  }
}
