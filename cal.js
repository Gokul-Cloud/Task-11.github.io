window.addEventListener('DOMContentLoaded',init);
const opts = ['*', '/','+','-','9','8','7','6','5','4','3','2','1','0','.'];
const spec = ['*', '/','+','-'];
var stringMath = require('string-math');

function init(){
    document.title = " DOM Calculator";
    console.log('ready');
    const container = document.createElement('div');
    container.classList.add('container');
    container.style.maxWidth ='600px';
    container.style.margin = 'auto';
    document.body.appendChild(container);
    
    const output = document.createElement('input');
    output.setAttribute('type','text');
    output.classList.add('output');
    output.style.width ='100%';
    output.style.lineHeight ='50px';
    output.style.fontSize = '1em';
    output.style.textAlign = 'right';
    container.appendChild(output);
    const main = document.createElement('div');
    main.classList.add('main');
    main.style.width = '100%';
    container.appendChild(main);
    opts.forEach(function(val)
    {
        console.log(val);
        btnmaker(val,addOutput);
    })
    btnmaker('=', evalOutput);
    btnmaker('c', clrOutput);
    btnmaker('m+', addmemory);
    btnmaker('m-', clearmemory);
    btnmaker('ms', memoryshow);

    function evalOutput()
    {
        output.style.border = 'black 1px solid';
       console.log('=');
       if(output.value==="")
       {
           output.style.border = 'red 1px solid';
       } 
       else{
           output.value = (new Function('return '+ output.value))();
       }

    }

    function clrOutput()
    {
        output.value = "";
    }

    function addmemory()
    {
        var array = [];
        array.push(output.value)
         sessionStorage.setItem('array', JSON.stringify(array));
    }

    function clearmemory()
    {
        sessionStorage.clear();
    }
     function memoryshow()
     {
        console.log(sessionStorage);
     }





    function btnmaker(txt,myFunction)
    {
        let btn = document.createElement('button');
        btn.setAttribute('type','button');
        btn.style.width='23%';
        btn.style.lineHeight = '50px';
        btn.style.margin = '2em';
        btn.val = txt;
        btn.textContent = txt;
        btn.addEventListener('click',myFunction);
        main.appendChild(btn);

    }
    function addOutput(e)
    {
    console.log(e.target.val);
    let char = e.target.val;
    output.value += char;
    }


}