let info1 = document.querySelector('.info1');
let info2 = document.querySelector('.info2');
let info3 = document.querySelector('.info3');

let p1 = document.querySelector('.para1');
let p2 = document.querySelector('.para2');
let p3 = document.querySelector('.para3');

let plus1 = document.querySelector('.iconPlus1');
let plus2 = document.querySelector('.iconPlus2');
let plus3 = document.querySelector('.iconPlus3');

let minus1= document.querySelector('.iconMinus1');
let minus2 = document.querySelector('.iconMinus2');
let minus3 = document.querySelector('.iconMinus3');

let h1 = document.querySelector('.h1');
let h2 = document.querySelector('.h2');
let h3 = document.querySelector('.h3');
h1.style.transition = 'font-size .5s ease-in-out';
h2.style.transition = 'font-size .5s ease-in-out';
h3.style.transition = 'font-size .5s ease-in-out';
info1.addEventListener('click',()=>{
    if(p1.classList.toggle('pb')){
        plus1.style.display ='none';
        minus1.style.display ='block';
        h1.style.fontSize = '12.5px';
    }else{
        plus1.style.display ='block';
        minus1.style.display ='none';
        h1.style.fontSize = '16px';
    }
    
})
info2.addEventListener('click',()=>{
    if(p2.classList.toggle('pb')){
        plus2.style.display ='none';
        minus2.style.display ='block';
        h2.style.fontSize = '12.5px';
    }else{
        plus2.style.display ='block';
        minus2.style.display ='none';
        h2.style.fontSize = '16px';
    }
})
info3.addEventListener('click',()=>{
    if(p3.classList.toggle('pb')){
        plus3.style.display ='none';
        minus3.style.display ='block';
        h3.style.fontSize = '12.5px';
    }else{
        plus3.style.display ='block';
        minus3.style.display ='none';
        h3.style.fontSize = '16px';
    }
})