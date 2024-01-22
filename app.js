let numeroSecreto =5 ;
let nuemeroUsuario =0;
let intentos = 1;
let palabraVeces='vez';

while (nuemeroUsuario != numeroSecreto){


    let nuemeroUsuario = prompt("Me indicas un nuemro por favor: ");

    console.log(nuemeroUsuario);
    /*
    Este codigrealiza 
    comparacion 

    */

    if (nuemeroUsuario == numeroSecreto){
        //acertamos, fue verdadera la condicion si se cumplio
        
        alert(`Acertaste, el numero es: ${nummeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    

    }else{
            if(nuemeroUsuario > numeroSecreto){
                alert(`El numerosecreto es menor`);

            }else{
                alert(`El numero secreto es mayor`);

            }

            //se incrementa el contador  no aciertas 
            intentos=intentos + 1;
            palabraVeces='veces';

            if(intentos>3){
                alert('llegaste al número máximo de intentos');
                break;
            }
        //acertamos, fue falsa la condicion no se cumplio
        //alert(`Lo siento, no acertaste el número: ${nuemeroUsuario} `);
        
    }


    
}
