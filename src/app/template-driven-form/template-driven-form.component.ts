import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  public name: string = '';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(private common: CommonService) { }


  public submitForm(): void {
    console.log('submit form: name=' + this.name);
    this.common.submitData(this.name)
  }
}
