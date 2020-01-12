import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prasiproductdetail',
  templateUrl: './prasiproductdetail.component.html',
  styleUrls: ['./prasiproductdetail.component.css']
})
export class PrasiproductdetailComponent implements OnInit {

  constructor() { }
   loadAPI = null;
  url = "assets/assetsprasi/js/main.js";


  ngOnInit() {
  	this.loadAPI = new Promise(resolve => {
          console.log("resolving promise...");
          this.loadScript();
        });
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

}
