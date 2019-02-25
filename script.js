function function_1() {
  let footer = document.getElementsByTagName("footer")[0];

  footer.addEventListener("click", function(){
    console.log("Clique");
  });
}

function function_1_bis() {
  let footer = document.getElementsByTagName("footer")[0];
  let counter = 0;

  footer.addEventListener("click", function(){
    console.log("Clique numéro " + ++counter);
  });
}

function function_2() {
  let button = document.querySelectorAll(".navbar-toggler")[0];
  let header = document.getElementById("navbarHeader");

  button.addEventListener("click", function(){
    header.classList.contains('collapse') ? header.classList.remove("collapse") : header.classList.add("collapse");
  });
}

function function_3() {
  let card_1 = document.querySelectorAll('.row .col-md-4')[0]
  let button = document.getElementsByClassName("btn-group")[0].lastElementChild

  button.addEventListener("click", function(){
    card_1.style.color = "red"
  });
}

function function_4() {
  let card_2 = document.querySelectorAll('.row .col-md-4')[1]
  let button = document.getElementsByClassName("btn-group")[1].lastElementChild  

  button.addEventListener("click", function(){
    card_2.style.color == "green" ? card_2.style.color = "black" : card_2.style.color = "green";
  });
}

//function_1();
//function_1_bis();
//function_2();
//function_3();
//function_4();
function_5();