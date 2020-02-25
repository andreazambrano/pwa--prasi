import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { AddInterface } from '../../models/add-interface'; 
import { ActivatedRoute, Params} from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ValidationError } from '../../../assets/file-picker/src/lib/validation-error.model';
import { ConfirmEqualValidatorDirective } from '../../confirm-equal-validator.directive';

@Component({
  selector: 'app-prasifilter',
  templateUrl: './prasifilter.component.html',
  styleUrls: ['./prasifilter.component.css']
})
export class PrasifilterComponent implements OnInit {

  constructor(
  private router: Router, 
    private dataApi: DataApiService,
    private route:ActivatedRoute,
    private location: Location,
    public _uw:UserWService,
    private formBuilder: FormBuilder
  	) { }
 loadAPI = null;
public tixs:TixInterface;
    url2 = "assets/assetsprasi/js/main.js";
    url = "assets/assetsprasi/js/plugins.js";
    
  ngOnInit() {
  	if (this._uw.loaded==true){
        this.loadAPI = new Promise(resolve => {
          // console.log("resolving promise...");
          this.loadScript();
          this.loadScript2();
        });
      }
      this._uw.loaded=true;   
      // this.getTixsFilter(this.route.snapshot.paramMap.get('category')); 
       this.getTixsFilter(this.route.snapshot.paramMap.get('category'));
  }

   getTixsFilter(catego: string){
   	let categ = catego; 
	 this.dataApi.getTixsFilter(categ).subscribe((res:any) => {
	      if (res[0] === undefined){
	        console.log("no");
	       }else{
	        this.tixs=res;            
	        }
	     }); 
   }




    public loadScript() {
      // console.log("preparing to load...");
      let node = document.createElement("script");
      node.src = this.url;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }


    public loadScript2() {
      // console.log("preparing to load 2...");
      let node = document.createElement("script");
      node.src = this.url2;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
    
//     getTixsFilter(category: string){
//     this.dataApi.getTixsFilter(category).subscribe((res:any) => {

//       });
// }





  // getCards(card_id: string){
  //   this.dataApi.getCards(card_id);
  //   }

}
