import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";

@Component({
  selector: 'app-prasitopbar',
  templateUrl: './prasitopbar.component.html',
  styleUrls: ['./prasitopbar.component.css']
})
export class PrasitopbarComponent implements OnInit {

  constructor(
  	   public _uw:UserWService
   ) { }

  ngOnInit() {
  }

}
