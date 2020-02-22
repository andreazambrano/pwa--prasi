import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';

import { ActivatedRoute, Params} from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-prasicartoverlay',
  templateUrl: './prasicartoverlay.component.html',
  styleUrls: ['./prasicartoverlay.component.css']
})
export class PrasicartoverlayComponent implements OnInit {

  constructor(
  	 private router: Router, 
    private dataApi: DataApiService,
    private route:ActivatedRoute,
    private location: Location,
    public _uw:UserWService
  	) { }


  

  ngOnInit() {

  }

}
