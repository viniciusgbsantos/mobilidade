function onInit(){
  startScript();
}
onInit();

function startScript(){
  window.onscroll = function(){
    const navbar = document.querySelector('.navbar-custom');
    const returnTop = document.querySelector('.button-backtop');

    let topNavbar = window.scrollY;
    console.log(topNavbar);
    
    changeBackground(topNavbar, navbar);
    showButtonPageUp(topNavbar, returnTop);
    starCounter(topNavbar);
  }
}

function changeBackground(scrollValueBg, selector){
  if (scrollValueBg >= 60){
    selector.classList.add("active");
  }else{
    selector.classList.remove("active");
  }
}

function showButtonPageUp(scrollValue, backTop){
  if (scrollValue >= 290){
    backTop.classList.add("visible");
  }else{
    backTop.classList.remove("visible");
  }
}

function starCounter(scrollValue){
  let painelNumberProject = document.getElementById("project");
  let painelNumberYears = document.getElementById("years");
  let painelNumberConsult = document.getElementById("consult");
  let painelNumberSuccess = document.getElementById("succes");
  let validExecution = true;

  if (validExecution == true && scrollValue > 4100 && scrollValue < 4108){
    let project = 0;
    let intervalProject = setInterval (() => {
      console.log(project + "project");
      painelNumberProject.innerText = "";
      painelNumberProject.innerText = project;
      project++;
      if (project>=655){
        clearInterval(intervalProject);
      }
    }, 5);

    let years = 0;
    let intervalYears = setInterval (() => {
      console.log(years + "years");
      painelNumberYears.innerText = "";
      painelNumberYears.innerText = years;
      years++;
      if (years>23){
        clearInterval(intervalYears);
      }
    }, 130);

    let consult = 0;
    let intervalConsult = setInterval (() => {
      console.log(consult + "consult");
      painelNumberConsult.innerText = "";
      painelNumberConsult.innerText = consult;
      consult++;
      if (consult>35){
        clearInterval(intervalConsult);
      }
    }, 90);

    let success = 0;
    let intervalSuccess = setInterval (() => {
      console.log(success + "success");
      painelNumberSuccess.innerText = "";
      painelNumberSuccess.innerText = success;
      success++;
      if (success>836){
        clearInterval(intervalSuccess);
      }
    }, .1);

    validExecution = false;

  }else{
    painelNumberProject.innerText = "654";
    painelNumberYears.innerText = "23";
    painelNumberConsult.innerText = "35";
    painelNumberSuccess.innerText = "836";
  }
}





// for (let project=0; project<=99; project++){
//   let intervalProject = setInterval (() => {
//     console.log("");
//     console.log(project + "projetc");
//     painelNumberProject.innerText = "";
//     painelNumberProject.innerText = project;
//     if (project>98){
//       clearInterval(intervalProject);
//     }
//   }, 1000);
// }
//
// for (let years=1; years<=23; years++){
//   let intervalYears = setInterval (() => {
//     console.log("");
//     console.log(years + "years");
//     painelNumberYears.innerText = "";
//     painelNumberYears.innerText = years;
//   }, 1000);
//   if (years>22){
//     clearInterval(intervalYears);
//     return;
//   }
// }
//
// for (let consult=1; consult<=35; consult++){
//   let intervalConsult = setInterval (() => {
//     console.log("");
//     console.log(consult + "consult");
//     painelNumberConsult.innerText = "";
//     painelNumberConsult.innerText = consult;
//   }, 1000);
//   if (consult>34){
//     clearInterval(intervalConsult);
//     return;
//   }
// }
//
// for (let success=1; success<=836; success++){
//   let intervalSuccess = setInterval (() => {
//     console.log("");
//     console.log(success + "success");
//     painelNumberSuccess.innerText = "";
//     painelNumberSuccess.innerText = success;
//   }, 1000);
//   if (success>835){
//     clearInterval(intervalSuccess);
//     return;
//   }
// }







// var painelNumberProject = document.getElementById("project");
// var painelNumberYears = document.getElementById("years");
// var painelNumberConsult = document.getElementById("consult");
// var painelNumberSucces = document.getElementById("succes");
// var project = 654;
// var years = 23;
// var consult = 35;
// var succes = 836;
// var increment = 0;

// window.onscroll = function(){
//   let active = window.scrollY;
//   if (active >= 1000){

//     function projects(delay) {
//       if (![1,2,3].includes(delay)) delay = 1 
//         Final = 0.2 / delay

//         const tempoAtrasoEmMs = Final * 1000
//         if (increment < project) {
//           increment++;
//           console.clear();
//           console.log(increment);
//           painelNumberProject.innerText = clear;
//           painelNumberProject.innerText = increment;
//           return setTimeout(() => Progressivo(delay), tempoAtrasoEmMs)
//         }
//     }projects(3)
    
//     function yearsExp(delay) {
//       if (![1,2,3].includes(delay)) delay = 1 
//         Final = 0.2 / delay

//         const tempoAtrasoEmMs = Final * 1000
//         if (increment < years) {
//           increment++;
//           console.clear();
//           console.log(increment);
//           painelNumberYears.innerText = clear;
//           painelNumberYears.innerText = increment;
//           return setTimeout(() => Progressivo(delay), tempoAtrasoEmMs)
//         }
//     }yearsExp(3)
    
//     function consultants(delay) {
//       if (![1,2,3].includes(delay)) delay = 1 
//       Final = 0.2 / delay
    
//       const tempoAtrasoEmMs = Final * 1000
//         if (increment < consult) {
//           increment++;
//           console.clear();
//           console.log(increment);
//           painelNumberConsult.innerText = clear;
//           painelNumberConsult.innerText = increment;
//           return setTimeout(() => Progressivo(delay), tempoAtrasoEmMs)
//         }
//     }consultants(3)
    
//     function sucessfulClients(delay) {
//       if (![1,2,3].includes(delay)) delay = 1 
//       Final = 0.2 / delay
    
//       const tempoAtrasoEmMs = Final * 1000
//         if (increment < succes) {
//           increment++;
//           console.clear();
//           console.log(increment);
//           painelNumberSucces.innerText = clear;
//           painelNumberSucces.innerText = increment;
//           return setTimeout(() => Progressivo(delay), tempoAtrasoEmMs)
//         }
//     }sucessfulClients(3)
//   }
// }