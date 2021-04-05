import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/auth';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() openRegisterModal: boolean;

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.contactForm = this.createForm();
    this.openRegisterModal = false;
  }

  ngOnInit(): void {
  }

  createForm() {
    return this.formBuilder.group(new User());
  }

  onSubmit = () => {
    this.userService.registerUser(this.contactForm.value);
  }

  onClickExit = () => {
    this.openRegisterModal = false;
  }
}
