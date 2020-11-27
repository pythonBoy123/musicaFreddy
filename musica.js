const ana=require("./analisis");
const read=require("readline")
const scribbel=require("scribbletune");
const fs=require("fs");
let archivo;
try{//lo convierte en un string
archivo= fs.readFileSync('datos.txt', 'utf8');
}
catch{
	console.log("coño")
	archivo="no quizo funcionar uwu"
}


let bass1=ana.bass(archivo);

let patron1=ana.patron(archivo);

function musica(pattron,notas,nombre){  // solo es para generar la cancion y darle un nombre

    let n=scribbel.clip({
        notes:notas,
        pattern:pattron
    });
    scribbel.midi(n,nombre);
}
const rl = read.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Que nombre quiere ponerle?", (respuesta) => {
  musica(patron1,bass1,respuesta);
  rl.close();
});
