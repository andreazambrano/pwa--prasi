import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { UserWService } from "../../services/user-w.service";

@Component({
  selector: 'app-prasiproductcatalog',
  templateUrl: './prasiproductcatalog.component.html',
  styleUrls: ['./prasiproductcatalog.component.css']
})
export class PrasiproductcatalogComponent implements OnInit {

  constructor(
 private dataApi: DataApiService,
    public _uw:UserWService
  	) { }
public tixs:TixInterface;
  ngOnInit() {
  	  this.getAllTixs();
  }

getAllTixs(){
        this.dataApi.getAllTixs().subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("no");
       }else{
        this.tixs=res;            
        }
     });  
    }
    
}
