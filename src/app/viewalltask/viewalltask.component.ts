import { Component, OnInit } from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewalltask',
  templateUrl: './viewalltask.component.html',
  styleUrls: ['./viewalltask.component.css']
})
export class ViewalltaskComponent implements OnInit {

  constructor(private firebaseservice: FirebaseserviceService, private router: Router) { }

  ngOnInit() {
  }
  update(use) {
    this.firebaseservice.selectuser = use;
    this.firebaseservice.getData();
    this.router.navigateByUrl('/addtask');

  }

  delete(use) {
    this.firebaseservice.deleteData(use).subscribe(data => {
      console.log(data);
      this.firebaseservice.getData();


    }, err => {
      console.log(err);
    })

  }

  ngOnInIt() {
    this.firebaseservice.getData();
  }
}
