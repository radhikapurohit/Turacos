import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private fb:FormBuilder, private service:ServicesService) {   }

  ngOnInit() {
  }

  ContactForm = this.fb.group({
    name:[''],
    email:[''],
    phone:[''],
    message:[''],
    subject:[''],
    state_id:[''],
    city_id:['']
  })

  onSubmit() {
    // console.log(this.ContactForm.value);
    this.service.Radhika('/contactEnd',this.ContactForm.value)
  }
}
