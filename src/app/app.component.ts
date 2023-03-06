import { Component, OnInit } from '@angular/core';
import { insertionsort, quicksort } from './shared/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'angular-algorithms';
  private arr: number[] = [5, 2, 4, 6, 10, 3]

  ngOnInit(): void {
    let result = insertionsort(this.arr)
    // let result = quicksort(this.arr)
    setTimeout(() => {
      console.log(result)
    }, 1000)
  }
}
