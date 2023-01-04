import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-echipa',
  templateUrl: './echipa.component.html',
  styleUrls: ['./echipa.component.css']
})
export class EchipaComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  response: any;
  submitted: boolean = false;
  coach: any;
  scorers: any;
  player : any;
  goluri : any;
  stadioane: any;
  antrenor:any;
  ngOnInit(): void {
  }


  onSubmitEchipa(data: any){
    this.submitted = true;
    console.log(data);
    let numeEchipa = data.data.numeEchipa;
    
    const sentData = 
     {
         
    };
   
   
  this.httpClient.get<any>('http://localhost:8080/echipa/getJucatoriByEchipa?nume='+ numeEchipa, sentData)
  .subscribe(response =>{ this.response = response
  console.log(response)
  console.log(this.response[1])
  });
    
  this.httpClient.get<any>('http://localhost:8080/echipa/getNumeAntrenorByEchipa?numeEchipa='+ numeEchipa, sentData)
  .subscribe(response =>{ this.coach = response
  
  });


  this.httpClient.get<any>('http://localhost:8080/meci/getTopScorersByEchipa?numeEchipa='+ numeEchipa, sentData)
  .subscribe(response =>{ this.scorers = response
  
  });

  this.httpClient.get<any>('http://localhost:8080/echipa/getStadioaneByEchipa?numeEchipa='+ numeEchipa, sentData)
  .subscribe(response =>{ this.stadioane = response
  console.log(this.stadioane)
  });
  }
  onSearchJucator(data:any){


    const numeJucator= data.data.numeJucator;
      
     this.httpClient.get<any>('http://localhost:8080/jucator/searchJucator?numeJucator='+ numeJucator)
     .subscribe(response =>{ this.player = response
      console.log(this.player)
     });

     this.httpClient.get<any>('http://localhost:8080/jucator/goluriMarcate?numeJucator='+ numeJucator)
     .subscribe(response =>{ this.goluri = response
      console.log(this.goluri)
      if(this.goluri == null)
      this.goluri = 0;
     });

     this.httpClient.get<any>('http://localhost:8080/antrenor/getAntrenorByJucator?numeJucator='+ numeJucator)
     .subscribe(response =>{ this.antrenor = response
      console.log(this.antrenor)
     });

   }
}
