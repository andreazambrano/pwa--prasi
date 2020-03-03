import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-prasitopbar',
  templateUrl: './prasitopbar.component.html',
  styleUrls: ['./prasitopbar.component.css']
})
export class PrasitopbarComponent implements OnInit {

  constructor(
  	private _router: Router,
	public _uw:UserWService
   ) {
    }

  ngOnInit() {
  }

}
