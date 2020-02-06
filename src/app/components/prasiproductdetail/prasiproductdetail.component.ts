import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { ActivatedRoute, Params} from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-prasiproductdetail',
  templateUrl: './prasiproductdetail.component.html',
  styleUrls: ['./prasiproductdetail.component.css']
})
export class PrasiproductdetailComponent implements OnInit {

  constructor(
  private router: Router, 
  private dataApi: DataApiService,
  private route:ActivatedRoute,
    private location: Location,
     public _uw:UserWService,
    ) { }
   loadAPI = null;
  url = "assets/assetsprasi/js/main.js";

  public tix:TixInterface;

  ngOnInit() {
  	this.loadAPI = new Promise(resolve => {
          console.log("resolving promise...");
          this.loadScript();
        });
     this.getDetails(this.route.snapshot.paramMap.get('id'));
  }
    public loadScript() {
      console.log("preparing to load...");
      let node = document.createElement("script");
      node.src = this.url;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
    getDetails(id: string){
    this.dataApi.getTixById(id).subscribe(tix => (this.tix = tix));
    
  }


}
