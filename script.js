//меню навигации
var point1 = document.querySelector('.point1');
var point2 = document.querySelector('.point2');
var point3 = document.querySelector('.point3');
var point4 = document.querySelector('.point4');
var point5 = document.querySelector('.point5');

function myFunction1() {
    var point1_aim = document.getElementById("point1_aim");
    point1_aim.scrollIntoView();
  }

  function myFunction2() {
    var point2_aim = document.getElementById("point2_aim");
    point2_aim.scrollIntoView();
  }

  function myFunction3() {
    var point3_aim = document.getElementById("point3_aim");
    point3_aim.scrollIntoView();
  }

  function myFunction4() {
    var point4_aim = document.getElementById("point4_aim");
    point4_aim.scrollIntoView();
  }

  function myFunction5() {
    var point5_aim = document.getElementById("point5_aim");
    point5_aim.scrollIntoView();
  }


// бутерброд
var ham = document.querySelector('.ham');
var nav = document.querySelector('.navigation_menu');
ham.onclick = function() {
    
    nav.classList.toggle('hidden');
    ham.classList.toggle('open');
};



// Смена языка
var lang_switcher = document.querySelector('.lang_switcher');
var eng_lang = document.querySelector('.en');
var rus_lang = document.querySelector('.ru');
var eng_text = document.querySelectorAll('.eng_text');
var rus_text = document.querySelectorAll('.rus_text');

lang_switcher.onclick = function() {
  
  $( "div" ).fadeOut(450); 
  
  setTimeout(func, 500);
    function func() {
          
        for (let eng of eng_text) {
          eng.classList.toggle('display_none')
        }

        for (let rus of rus_text) {
          rus.classList.toggle('display_none')
        }

      eng_lang.classList.toggle('active');
        rus_lang.classList.toggle('active');
    }

  $( "div" ).fadeIn(300); 

};

