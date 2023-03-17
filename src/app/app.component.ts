import { Component, OnInit } from '@angular/core';
import { insertion_sort, quick_sort, merge_sort, heap_sort } from './shared/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'angular-algorithms';
  private arr: number[] = [5, 2, 4, 6, 10, 3]

  ngOnInit(): void {
    console.log(this.arr)
    let result = heap_sort(this.arr)
    
    // let result = quicksort(this.arr)
    setTimeout(() => {
      console.log(this.arr) // for heap_sort
      console.log(result)   // for restsort
    }, 1000)
  }
}
