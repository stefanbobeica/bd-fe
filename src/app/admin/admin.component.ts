import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable, of, tap } from "rxjs";
import { Data } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  selectatiTabelul : any;
  player:any;
  ngOnInit(): void {
  }

  onSelect(data : any){
    this.selectatiTabelul =  data.data.selectatiTabelul;
    console.log(this.selectatiTabelul);
  }

  onSubmitAntrenor(data: any){
    

     const sentData = 
      {
        "numeAntrenor":data.data.numeAntrenor,
        "dataNastere": data.data.dataNastere.split('T')[0]
        
    
     };
    
    
   this.httpClient.post<any>('http://localhost:8080/antrenor/insert', sentData).subscribe();
  }

  onSubmitJucator(data: any){
    console.log(data);

    const sentData = 
     {
       "numeJucator":data.data.numeJucator,
       "dataNastere": data.data.dataNastere.split('T')[0],
       "pozitie": data.data.pozitie,
       "idEchipa": data.data.echipaNationala
       
   
    };
   
   
  this.httpClient.post<any>('http://localhost:8080/jucator/insert', sentData).subscribe();
 }

 onUpdateJucator(data: any){
  console.log(data);
   const numeJucator = data.data.numeJucator;
  const sentData = 
   {
       "numeJucator":data.data.numeNouJucator,
       "dataNastere": data.data.dataNastere.split('T')[0],
       "pozitie": data.data.pozitie,
       "idEchipa": data.data.echipaNationala
     
 
  };
 
 
this.httpClient.post<any>('http://localhost:8080/jucator/update?nume='+ numeJucator, sentData).subscribe();
}

onUpdateAntrenor(data: any){
    console.log(data);  
  const newName = data.data.numeAntrenor;
  
  const sentData = 
   { 
      
     "numeAntrenor":data.data.numeNouAntrenor,
     "dataNastere": data.data.dataNastere.split('T')[0]
     
 
  };
 
 
this.httpClient.post<any>('http://localhost:8080/antrenor/update?nume=' + newName , sentData).subscribe();
}


onDeleteJucator(data: any){
    

  const sentData = 
   {
    "numeJucator":data.data.numeJucator
     
     
 
  };
 
 
this.httpClient.post<any>('http://localhost:8080/jucator/delete', sentData).subscribe();
}

onDeleteAntrenor(data: any){
    

  const sentData = 
   {
     "numeAntrenor":data.data.numeAntrenor
     
 
  };
 
 
this.httpClient.post<any>('http://localhost:8080/antrenor/delete', sentData).subscribe();
}




}
