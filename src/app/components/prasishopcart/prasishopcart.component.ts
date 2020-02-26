import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';

import { ActivatedRoute, Params} from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-prasishopcart',
  templateUrl: './prasishopcart.component.html',
  styleUrls: ['./prasishopcart.component.css']
})
export class PrasishopcartComponent implements OnInit {

  constructor(
 private router: Router, 
    private dataApi: DataApiService,
    private route:ActivatedRoute,
    private location: Location,
    public _uw:UserWService
  	) { }

   public envio = 0;
   public destino ='Seleccione un destino';

 localidades: string[]=[
  'Arica, Iquique',
  'Antofagasta',
  'Calama',
  'Copiapo',
  'La Serena, Coquimbo',
  'Valparaiso, Viña del mar',
  'Santiago',
  'Rancagua; San Fernando',
  'Curico, Talca, Chillan, Concepción, Los Angeles',
  'Temuco, Valdivia, Osorno',
  'Puerto Montt, Pto. Varas, Castro',
  'Coyhaique',
  'Punta Arenas'
  ];
	costosEnvio: number[]=[
	8140,
	7210,
	8330,
	4510,
	4400,
	4110,
	2830,
	4270,
	4360,
	4450,
	4930,
	8050,
	8320  
	];

setEnvio(){
	for (var i = 0; i < this.costosEnvio.length; i++) {
		if (this.destino==this.localidades[i]){
			this.envio=this.costosEnvio[i];
		}
	}
}
  ngOnInit() {
  }

}
