let a = 0;
let res = 0;
let sousRes = 0;


const AC = document.getElementById("AC");

AC.addEventListener("click", function() {
    console.log("AC");
  });


const del = document.getElementById("DEL");

del.addEventListener("click", function() {
    a = 0;
    console.log("DEL");
});


const zero = document.getElementById("nbr0");

zero.addEventListener("click", function() {
    a = 0;
    document.getElementById("res").innerHTML = a;
    a = res;
});

const un = document.getElementById("nbr1");

un.addEventListener("click", function() {
    a = 1;
    document.getElementById("res").innerHTML = a;
  });

const deux = document.getElementById("nbr2");

deux.addEventListener("click", function() {
    a = 2;
    document.getElementById("res").innerHTML = a;
    a = res;
});

const trois = document.getElementById("nbr3");

trois.addEventListener("click", function() {
    a = 3;
    document.getElementById("res").innerHTML = a;
    a = res;
    });

const quatre = document.getElementById("nbr4");

quatre.addEventListener("click", function() {
    a = 4;
    document.getElementById("res").innerHTML = a;
    a = res;
});

const cinq = document.getElementById("nbr5");

cinq.addEventListener("click", function() {
    a = 5;
    document.getElementById("res").innerHTML = a;
    a = res;
    });

const six = document.getElementById("nbr6");

six.addEventListener("click", function() {
    a = 6;
    document.getElementById("res").innerHTML = a;
    a = res;
    });

const sept = document.getElementById("nbr7");

sept.addEventListener("click", function() {
    a = 7;
    document.getElementById("res").innerHTML = a;
    a = res;
    });

const huit = document.getElementById("nbr8");

huit.addEventListener("click", function() {
    a = 8;
    document.getElementById("res").innerHTML = a;
    a = res;
    });

const neuf = document.getElementById("nbr9");

neuf.addEventListener("click", function() {
    a = 9;
    document.getElementById("res").innerHTML = a;
    a = res;
    });


const divise = document.getElementById("nbrDivise");

divise.addEventListener("click", function() {
    if (a != 0) {
        console.log(res); 
        res = res / a;
        document.getElementById("res").innerHTML = res;
    }
    });

const fois = document.getElementById("nbrFois");

fois.addEventListener("click", function() {
    console.log("*");
    });


const moins = document.getElementById("nbrMoins");

moins.addEventListener("click", function() {
    console.log("-");
    });

const plus = document.getElementById("nbrPlus");

plus.addEventListener("click", function() {
    console.log("+");
    });
    
const egal = document.getElementById("nbrEgal");

egal.addEventListener("click", function() {
    console.log("=");
    });

const point = document.getElementById("nbrPoint");

point.addEventListener("click", function() {
    console.log(".");
    });
    

var sousResultat = document.getElementById("sousRes").innerHTML = sousRes;

var resultat = document.getElementById("res").innerHTML = res;

document.addEventListener('click',() => {
    switch (res) {


    }

})



    
    