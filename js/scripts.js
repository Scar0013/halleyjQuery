var global = 0;

function buscarDadosLol(){

    /*
    if(global==0){
        jQuery("#retornoDados").html(` `);
        global = 1;
    }
    
    jQuery("#retornoDados").append(`<p>Aqui o conteúdo que eu quero</p>`);
    */

   
var personagens; 

fetch('js/champions.json') 
	.then(response => response.json()) 
	.then(data => { 
        personagens = data; 
        console.log(personagens);
    
        for(var i = 0; i<personagens.length; i++){
  
            console.log(`${personagens[i].id} ${personagens[i].name} ${personagens[i].icon}`);
            //console.log("Fim da promessa");
             
            if(global==0){
                jQuery("#retornoDados").html(` `);
                global = 1;
            }
            
            jQuery("#retornoDados").append(`<p><img src="${personagens[i].icon}" /> ${personagens[i].name} <br></p>`);
        }
         
    
    })
	.catch(error => console.log('Erro ao ler o arquivo JSON:', error));


    console.log("Fim do código");
  
}


