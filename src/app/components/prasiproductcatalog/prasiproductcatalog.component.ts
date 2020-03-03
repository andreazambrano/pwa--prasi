import { ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataApiService} from '../../services/data-api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
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
    private location: Location,
    private route:ActivatedRoute,
    private router: Router, 
    public _uw:UserWService
  	) { }
  
public tixs:TixInterface;
public seted=false;
  ngOnInit() {
  	  this.getAllTixsNew();
      this._uw.loaded=true;
      this._uw.editingTrek = false;
  }
edit(tix){
  this._uw.editingTrek = true;
  this._uw.foredit=tix;
  this._uw.images=tix.images;
  this.router.navigate(['/prasiproductdetail/'+tix.id]);
}
getAllTixsNew(){
        this.dataApi.getAllTixsNew().subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("no");
       }else{
        this.tixs=res;            
        }
     });  
    }
    
}
