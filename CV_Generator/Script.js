//alert("Loading")
function AddNewweField(){
    //console.log("Adding new text")
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("weField");
    newnode.classList.add("mt-2")
    newnode.setAttribute('placeholder','Enter here');
    let weobj=document.getElementById("we");
    let newaddbuttonobj=document.getElementById("weAddbutton");
    weobj.insertBefore(newnode,newaddbuttonobj);
};
function AddNeweqfield(){
    let newnode1=document.createElement("textarea");
    newnode1.classList.add("form-control");
    newnode1.classList.add("eqField");
    newnode1.classList.add("mt-2")
    newnode1.setAttribute('placeholder','Enter here');
    let eqobj=document.getElementById("eq");
    let newaddbuttonobj1=document.getElementById("eqAddbutton");
    eqobj.insertBefore(newnode1,newaddbuttonobj1);
};
function AddNewskilField(){
    let newnode2=document.createElement("textarea");
    newnode2.classList.add("form-control");
    newnode2.classList.add("skilField");
    newnode2.classList.add("mt-2")
    newnode2.setAttribute('placeholder','Enter here');
    let eqobj=document.getElementById("skil");
    let newaddbuttonobj2=document.getElementById("skilAddbutton");
    eqobj.insertBefore(newnode2,newaddbuttonobj2);
};
function generatecv(){
//console.log("sdgnhhdjhkjhg")
//   name..................
let nf=document.getElementById("nameFiald").value;
let namet=document.getElementById("namet");
namet.innerHTML=nf;

document.getElementById("namet1").innerHTML=nf;

   //contact...........
document.getElementById("phonet").innerHTML=document.getElementById("phonenoFiald").value;
// let pf=document.getElementById("phonenoFiald").value;
// let phonet=document.getElementById("phonet");
// phonet.innerHTML=pf;
  //Address...........
  document.getElementById("addresst").innerHTML=document.getElementById("addressFiald").value;
   //Facebooks...........
   document.getElementById("fbt").innerHTML=document.getElementById("fbFiald").value;
   //Instagram...........
   document.getElementById("inst").innerHTML=document.getElementById("insFiald").value;
   //LinkedIn...........
   document.getElementById("ldt").innerHTML=document.getElementById("ldFiald").value;
   //Objective...........
   document.getElementById("objt").innerHTML=document.getElementById("obFiald").value;
  //Work Experience..............
  let wes=document.getElementsByClassName("weField");
  let str="";
  for(let e of wes){
      str=str + `<li> ${e.value} </li>`;
  }
  document.getElementById("wet").innerHTML=str;
   //Skil..............
   let w=document.getElementsByClassName("skilField");
   let str1="";
   for(let e of w){
       str1+= `<li> ${e.value} </li>`;
   }
   document.getElementById("skilt").innerHTML=str1;
   //Academin quilification..............
   let eq=document.getElementsByClassName("eqField");
   let str2="";
   for(let e of eq){
       str2+= `<li> ${e.value} </li>`;
   }
   document.getElementById("eqt").innerHTML=str2;
   //code for setting photo...........
   let file=document.getElementById("imgField").files[0];
   console.log(file)
    let reader=new FileReader(); 
    reader.readAsDataURL(file);
    console.log(reader.result)
    //set the img to tamplate
    reader.onloadend=function(){
        document.getElementById("imgt").src=reader.result;
    }

   document.getElementById("cv-form").style.display="none";
   document.getElementById("cv-template").style.display="block";
};
function printcv(){
    window.print();

}

 