function verificar(nombre){
    let label=document.getElementById('msja');
    let text=document.getElementById('textinicial') 
    
    if(nombre=="keldeo" | nombre=="drilbur"| nombre=="ninjask" ){
        label.innerHTML="Pokémon incorrecto, la respuesta es: excadrill"
        text.className="textmal";
        document.getElementById('img1').src='../image/pcolor.jpg';
    }else{
        label.innerHTML="Felicitaciones, has seleccionado la opción correcta"
        text.className="textok"
        document.getElementById('img1').src='../image/pcolor.jpg';
    }
}