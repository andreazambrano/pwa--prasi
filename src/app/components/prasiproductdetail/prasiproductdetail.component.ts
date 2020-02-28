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

declare var $: any;
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
     // public productToAdd:any[][]=[];
 


    ngOnInit() {
    
      this.ngFormAddToCar = this.formBuilder.group({
        cantidad:[1,[Validators.required]]
        // checked:[true,[]]
      });
      this.ngFormAddToCar.value.cantidad=1;
      if (this._uw.loaded==true){
        this.loadAPI = new Promise(resolve => {
          // console.log("resolving promise...");
          this.loadScript();
          this.loadScript2();
        });
      }
      this._uw.loaded=true;     
      this.getDetails(this.route.snapshot.paramMap.get('id'));

    } 
 
    public add(tix){
      if ( !this.seted && tix.category=='Moccs' ){
        tix.price=tix.sin[0];
        this.seted=true;
      }

      if (tix.discount){
        this.finalPrice=tix.price - (tix.price*tix.discount/100);  
      }
      if (!tix.discount){
        this.finalPrice=tix.price;  
      }
      console.log("hola, entiendo que debo agregar "+this.ngFormAddToCar.value.cantidad +" pares del modelo: " +tix.productName+" para un total de: " +(this.ngFormAddToCar.value.cantidad*this.finalPrice));
  
        this.addp=tix;
        this.addp.cantidad=this.ngFormAddToCar.value.cantidad;
        this.addp.finalPrice=this.finalPrice;
        this._uw.car.push(this.addp);
        this._uw.subTotal=this._uw.subTotal+(this.ngFormAddToCar.value.cantidad*this.finalPrice);
        this._uw.numProd=this._uw.numProd+1;
         this.router.navigate(['/']);
    }

    public setPlants(tix){
if (this.plants=="Con planta antideslizante"){
          this.tix.price=tix.con[this.indiceTalla];
        this.tix.price=this.priceCon;
        }
         if (this.plants=="Sin planta antideslizante"){
           this.tix.price=tix.sin[this.indiceTalla];
         this.tix.price=this.priceSin; 
        }
        this.setSize(tix,this.indiceTalla);
    }

    public setSize(tix,i){
      // let i = i ;
      if (tix.category=="Moccs" ){  
        if (this.plants=="Con planta antideslizante"){
          this.tix.price=tix.con[i];
          this.priceCon=tix.con[i];
          this.indiceTalla=i;
        }
        if (this.plants=="Sin planta antideslizante"){
         this.tix.price=tix.sin[i]; 
          this.priceSin=tix.sin[i];        
        this.indiceTalla=i;
        }
      // console.log(i);
      this.seted=true;
      }
       if (tix.category=="Botas y botines" || tix.category=="Zapatos" ){  
        this.tix.price=tix.globalPrice;
        this.indiceTalla=i;
      }
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
     get fval() {
  return this.ngFormAddToCar;
  }

    getDetails(id: string){
    this.dataApi.getTixById(id).subscribe(tix => (this.tix = tix));

   
  }
}
