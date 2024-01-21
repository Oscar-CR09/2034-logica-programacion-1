let numeroSecreto =5 ;
let nuemeroUsuario =0;
while (nuemeroUsuario != numeroSecreto){

    let nuemeroUsuario = prompt("Me indicas un nuemro por favor: ");

    console.log(nuemeroUsuario);
    /*
    Este codigrealiza 
    comparacion 

    */

    if (nuemeroUsuario == numeroSecreto){
        //acertamos, fue verdadera la condicion si se cumplio
        alert(`Acertaste, el numero es: ${nummeroUsuario} `);
    

    }else{
            if(nuemeroUsuario > numeroSecreto){
                alert(`El numerosecreto es menor`);

            }else{
                alert(`El numero secreto es mayor`);

            }
        //acertamos, fue falsa la condicion no se cumplio
        //alert(`Lo siento, no acertaste el número: ${nuemeroUsuario} `);
        

    }
    
}
