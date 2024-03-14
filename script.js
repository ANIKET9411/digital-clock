// const { JSDOM } = require('jsdom');
// const dom = new JSDOM('<!DOCTYPE html><html><body><div class="item1"></div></body></html>');
// const document = dom.window.document;

let item1=document.querySelector(".item1");
let item2=document.querySelector(".item2");
let item3=document.querySelector(".item3");
let zone=document.querySelector(".zone");
let date=new Date();
let hour=date.getHours(),min=date.getMinutes(),sec=date.getSeconds();
let count=0;
if(hour>12)
        {
            hour=hour%12;
            count=1;
        }
        else{
            count=0;
        }
function check()
{
    setInterval(function(){
        sec++;
        
        console.log(hour, min, sec);
        
        item1.innerText=(hour>9)?hour:"0"+hour;
        item2.innerText=(min>9)?min:"0"+min;
        item3.innerText=(sec>9)?sec:"0"+sec;
        const period = count==1 ? 'PM' : 'AM';
        console.log(period);
        zone.innerText=period;

        if(sec==59)
        {
            sec=-1;
            min++;
        }
        if(min==59)
        {
            min=-1;
            hour++;
        }
},1000);
}
check();