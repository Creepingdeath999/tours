var nav=document.getElementsByClassName('navigation');
document.getElementsByClassName('.fa-bars').addEventListener('click', show());



function show(){
    if(nav.style.top=="-600px")
      {
        nav.style.top=="0px";
      }else{
        nav.style.top=="-600px";
      }
}
