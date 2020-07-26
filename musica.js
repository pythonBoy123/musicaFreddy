const ana=require("./analisis");

const scribbel=require("scribbletune");
const fs=require("fs");
let archivo;
try{
archivo= fs.readFileSync('datos.txt', 'utf8');
}
catch{
	console.log("coño")
	archivo="aodfjadpsfiahpqeprqoiu"
}
if(archivo=="h"){
	console.log("no lo logramos")
}

let bass1=ana.bass(archivo);

let patron1=ana.patron(archivo);

function musica(pattron,notas,nombre){  

    let n=scribbel.clip({
        notes:notas,
        pattern:pattron
    });
    scribbel.midi(n,nombre);
}
musica(patron1,bass1,"cumpleaños cancion para freddy");
