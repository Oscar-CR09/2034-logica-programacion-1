
let numeroMaximoPosible=10;
let numeroSecreto =Math.floor(Math.random()*numeroMaximoPosible)+1; 
//console.log(numeroSecreto);
//let numeroSecretoSecret = parseInt()
let nuemeroUsuario =0;
let intentos = 1;
//let palabraVeces='vez';
let maximosIntentos = 3;

while (nuemeroUsuario != numeroSecreto){


    let nuemeroUsuario = parseInt(prompt(`Me indicas un numero 1 y ${numeroMaximoPosible} por favor: `));

    //console.log(nuemeroUsuario);
    /*
    Este codigrealiza 
    comparacion 

    */

    if (nuemeroUsuario == numeroSecreto){
        alert(`Acertaste, el numero es: ${nummeroUsuario}. Lo hiciste en ${intentos} ${intentos==1?'vez':'veces'}`);
      //acertamos, fue verdadera la condicion si se cumplio

    }else{
            if(nuemeroUsuario > numeroSecreto){
                alert(`El numerosecreto es menor`);

            }else{
                alert(`El numero secreto es mayor`);

            }

            //se incrementa el contador  no aciertas 
            //intentos=intentos + 1;
            //intentos+=1;
            intentos++;
            palabraVeces='veces';

            if(intentos>maximosIntentos){
                alert(`llegaste al número máximo de ${maximosIntentos} intentos`);
                break;
            }
        //acertamos, fue falsa la condicion no se cumplio
        //alert(`Lo siento, no acertaste el número: ${nuemeroUsuario} `);
        
    }


    
}
