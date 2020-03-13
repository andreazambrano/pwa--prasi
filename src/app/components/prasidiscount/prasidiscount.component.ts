import { AddInterface } from '../../models/add-interface'; 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { ConfirmEqualValidatorDirective } from '../../confirm-equal-validator.directive';
import { DataApiService } from '../../services/data-api.service';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { HttpClient } from  '@angular/common/http';
import { isError } from "util";
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ScrollTopService }  from '../../services/scroll-top.service';
import { TixInterface } from '../../models/tix-interface'; 
import { UserWService } from "../../services/user-w.service";
import { ValidationError } from '../../../assets/file-picker/src/lib/validation-error.model';

@Component({
  selector: 'app-prasidiscount',
  templateUrl: './prasidiscount.component.html',
  styleUrls: ['./prasidiscount.component.css']
})
export class PrasidiscountComponent implements OnInit {

  constructor(
  	public scrollTopService:ScrollTopService,
    private router: Router, 
    private dataApi: DataApiService,
    private route:ActivatedRoute,
    private location: Location,
    public _uw:UserWService,
    private formBuilder: FormBuilder
    ) { }
    loadAPI = null;
    url2 = "assets/assetsprasi/js/main.js";
    url = "assets/assetsprasi/js/plugins.js";
    
    ngFormAddToCar: FormGroup;
    submitted = false;

    public tix:TixInterface;
    public addp:AddInterface;
    public seted = false;
    public checked = true;
    public plants = "Sin planta antideslizante";
    public priceCon = 0;
    public priceSin = 0;
    public indiceTalla = 0;
    public finalPrice = 0;

    public precio = "sin";
    public precio2 = "con";
    public check = "check";
    public urlCreated = "";
    public images:any[]=[];
    public checks:any[]=[];
    public sin:any[]=[];
    public con:any[]=[];
    public tallas:any[]=[];

  ngOnInit() {
  	  if (this._uw.editingTrek){
        this.tix=this._uw.foredit;
      }  
      this.scrollTopService.setScrollTop();
      if (this._uw.loaded==true){
        this.loadAPI = new Promise(resolve => {
          this.loadScript();
          this.loadScript2();
        });
      }
      this._uw.loaded=true;     
      console.log("id de tix a editar: "+this.tix.id)
      this.getDetails(this.tix.id);
      if (this._uw.editingTrek){
      }
  }
    public loadScript() {
      let node = document.createElement("script");
      node.src = this.url;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }


    public loadScript2() {
      let node = document.createElement("script");
      node.src = this.url2;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
	getDetails(id: string){
		this.dataApi.getTixById(id).subscribe(tix => (this.tix = tix));
	}

}
