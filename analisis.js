//
const Analisis={};

function bass(entrada){
    let m=[];
    
    let lista=entrada.split("");   
    let notas=["c2","d2","e2","f2","g2","a2","b2",
               "c3","d3","e3","f3","g3","a3","b3",
               "c4","d4","e4","f4","g4","a4","b4",
               "c5","d5","e5","f5","g5","a5","b5"];
    let abecedario=["q","w","e","r","t","y","u",
                    "i","o","p","a","s","d","f",
                    "g","h","j","k","l","ñ","z",
                    "x","c","v","b","n","m"]
   
    //compara   
    for(let x=0;x<=lista.length;x++){
        for(let y=0;y<abecedario.length;y++){
            if(lista[x]===abecedario[y]){   
                m.push(notas[y]);
            }    
        }
    }
   

  
    return m;
}
function patron(ni){
    let n=ni.split("")
    let s=new String("")
    let abecedario="qwertyuiopasdfghjklñzxcvbnm".split("")
    let numeros="1234567890".split("")
    for(let i=0;i<=n.length;i++){
        if(n[i]===" "){
            s=s+"-"//silencio

        }
        else{
            for(let x=0;x<=abecedario.length;x++){
                if(n[i]===abecedario[x]){
                    s=s+"x"//toca una nota
                }
            }
            for(let y=0;y<=numeros.length;y++){
                if(n[i]===numeros[y]){
                s=s+"_"//decae
            
            }
        }
        }
    }
    return s;
}



Analisis.bass=bass;
Analisis.patron=patron
module.exports=Analisis;
