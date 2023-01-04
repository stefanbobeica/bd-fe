import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-rezultate',
  templateUrl: './rezultate.component.html',
  styleUrls: ['./rezultate.component.css']
})
export class RezultateComponent implements OnInit {

  constructor( private httpClient : HttpClient) { }
  rezultate: any;
  stadion: any;
  marcatori: any;
  async ngOnInit(): Promise<void> {
   
    await this.fetchEchipe().then(this.fetchEchipe);
  
    

    
  }


  async fetchEchipe(){
    this.httpClient.get<any>('http://localhost:8080/echipa/getRezultate')
    .subscribe(response =>{ this.rezultate = response
    console.log(response);
    
    });
  }

  async fetchStadion(idMeci:any){
   
      this.httpClient.get<any>('http://localhost:8080/stadion/getStadion?numeGazde='+idMeci)
    .subscribe(response =>{ this.stadion = response
    console.log(this.stadion);
    });
    this.httpClient.get<any>('http://localhost:8080/meci/getMarcatoriByMeci?idMeci='+idMeci)
    .subscribe(response =>{ this.marcatori = response
    console.log(this.marcatori);
    });
    }
  
  

}
