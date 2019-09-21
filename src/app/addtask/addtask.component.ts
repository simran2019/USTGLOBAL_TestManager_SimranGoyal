import { Component, OnInit } from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor(private firebaseservice: FirebaseserviceService, private router: Router) { }

  postDetails(register: NgForm) {
    if (register.value.id) {
      this.firebaseservice.updateData(register.value).subscribe(resdata => {
        console.log(resdata);
        this.firebaseservice.getData();

      }), err => {
        console.log(err);
      }
    } else {
      this.firebaseservice.postData(register.value).subscribe(resdata => {
        console.log(resdata);
        this.firebaseservice.getData();
        this.router.navigateByUrl('/viewalltask')
        register.reset();
      }), err => {
        console.log(err);
      }
    }

  }

  ngOnInit() {
  }

}
