import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({

selector:'app-root',
standalone:true,
imports:[CommonModule,FormsModule],
templateUrl:'./app.html',
styleUrl:'./app.css'

})

export class App{

muestraSeleccionada='';

resultado='';

paciente='';
edad=0;
fecha='';
observaciones='';


hemoglobina=0;
globulos=0;
glucosa=0;

ph=0;
proteinas=0;

phSaliva=0;
amilasa=0;

celulas=0;
inflamacion=0;


seleccionarMuestra(tipo:string){

this.muestraSeleccionada=tipo;
this.resultado='';

}

analizar(){

if(this.muestraSeleccionada==="sangre"){

if(this.hemoglobina<12){

this.resultado=
"⚠ Posible anemia detectada";

}

else if(this.glucosa>126){

this.resultado=
"⚠ Glucosa elevada. Posible hiperglucemia";

}

else if(this.globulos>11000){

this.resultado=
"⚠ Posible infección";

}

else{

this.resultado=
"✅ Valores sanguíneos normales";

}

}


if(this.muestraSeleccionada==="orina"){

if(this.ph>7){

this.resultado=
"⚠ pH alterado";

}

else if(this.proteinas>30){

this.resultado=
"⚠ Proteínas elevadas";

}

else{

this.resultado=
"✅ Parámetros urinarios normales";

}

}



if(this.muestraSeleccionada==="saliva"){

if(this.phSaliva<6){

this.resultado=
"⚠ Acidez elevada";

}

else{

this.resultado=
"✅ Microbiota oral saludable";

}

}


if(this.muestraSeleccionada==="tejido"){

if(this.inflamacion>5){

this.resultado=
"⚠ Posible inflamación tisular";

}

else{

this.resultado=
"✅ Tejido sin alteraciones visibles";

}

}

}

}