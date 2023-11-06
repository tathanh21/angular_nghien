import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit {
  ngOnInit(): void {
    console.log('on intt form child')
  }
  @Input() username = '';
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChange', changes)
  }
}
