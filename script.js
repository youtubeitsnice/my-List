const inputl=document.getElementById("input-l");
const lista=document.getElementById("lista");
const btnAdd=document.getElementById("btnAdd");
const btnDel=document.getElementById("btnDel");
const ulLista=document.getElementById("ul-lista");
const inputcont=document.getElementById("input-cont");
const selOg=document.getElementById("selOg");

function addElement(){
    if(inputl.value!=""){
        var pPalavra=inputl.value.toUpperCase().split("");
        var rPalavra=inputl.value.toLowerCase().slice(1,20);
        var li=document.createElement("li");
        li.textContent=pPalavra[0]+rPalavra;

        lista.appendChild(li);
        inputl.value="";
        inputl.focus();
        inputl.disabled="";
        inputcont.innerHTML="20";
        inputcont.style.color="#23b6fa";
        selOg.disabled="";
        selOg.style.cursor="pointer";
        
        listaF();
    }else{
        alert(`
        Por favor digite alguma coisa
        antes de clicar em adicionar!
        `);
    }
}

function listaF(){
    var res=lista.childElementCount;
    var lCN=lista.childNodes;
    var lLC=lista.lastChild;

    for(var i=0;i<res;i++){
        if(lLC.innerHTML==lCN[i].innerHTML){
            alert("Esse elemento já existe!");
            lLC.remove();
            res=(res-1);
        }
    }

    ulLista.innerHTML="Lista: ("+res+")";
}

function continput(e){
    var capMax=20;
    var capAtual=inputl.value.length;
    var res=(capMax-capAtual);

    if(res==0){
        inputcont.style.color="#d63131";
        inputl.style.backgroundColor="#ededed";

        if(e.key!="Backspace"){
            e.preventDefault();
        }
    }else{
        inputcont.style.color="#23b6fa";
    }

    inputcont.innerHTML=res;
}

document.getElementById("listaTxt").addEventListener("click",function(){
    window.location.href="http://encurtador.com.br/bmpMX";
});

inputl.addEventListener("keypress",function(e){
    var caract="1234567890!@#$%¨&*()-_=+`´{}[]^~\'\":;></|\\?²¹£¢¬°., ";
    var res=caract.split("");
    var mochila=[];

    for(let i=0;i<caract.length;i++){
        mochila.push(res[i]);

        if(e.key==mochila[i]){
            e.preventDefault();
        }
    }
});

btnDel.addEventListener("click",function(){
    var res=lista.childElementCount;

    if(res==0){
        alert("Não há elementos na lista!");
    }else{
        lista.remove();

        for(let i=0;i<res;i++){
            res-=res;
            ulLista.innerHTML=`Lista: (${res})`;
        }

        inputl.value="";
        selOg.disabled="true";
        selOg.style.cursor="default";
    }
});

selOg.addEventListener("change",function(){
    if(selOg.value=="alphabetic-o"){
        let mochila=[];
        let res=lista.childElementCount;
        let novoLi=document.createElement("li");
        lista.remove();

        for(let i=0;i<res+1;i++){
            mochila.push(lista.childNodes[i].innerHTML);
            mochila.sort();
        }

        for(let i=0;i<res+1;i++){
            novoLi.textContent=mochila[i];  
            lista.appendChild(novoLi);
        }
        
        mochila.pop();
        console.log(mochila);
    }
});

inputl.addEventListener("keypress",continput);
btnAdd.addEventListener("click",addElement);

if(lista.childElementCount==0){
    selOg.disabled="true";
    selOg.style.cursor="default";
}