import { Component } from '@angular/core';

@Component({
  selector: 'app-reclami-item',
  templateUrl: './reclami-item.component.html',
  styleUrls: ['./reclami-item.component.scss']
})
export class ReclamiItemComponent {
  rows = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Doe', age: 40 }
  ];

  columns = [
    { prop: 'id', name: 'ID' },
    { prop: 'name', name: 'Name' },
    { prop: 'age', name: 'Age' }
  ];
}
  
