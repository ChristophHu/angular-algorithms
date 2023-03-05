import { Component, OnInit } from '@angular/core';
import { insertionsort } from './shared/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'angular-algorithms';
  private arr: number[] = [5, 2, 4, 6, 1, 3]

  ngOnInit(): void {
    let result = insertionsort(this.arr)
    setTimeout(() => {
      console.log(this.arr)
    }, 500)
    
  }
}
