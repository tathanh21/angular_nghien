import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private common: CommonService, private formBuilder: FormBuilder) { }

  // public formData: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl('')
  // });

  public formData = this.formBuilder.group({
    name: ['', Validators.required],
    age: ['', Validators.required]
  })
  ngOnInit(): void {

  }
  public onSubmit(): void {
    // console.log('submit name:', this.formData.value)
    this.common.submitData(this.formData.value)
  }
}
