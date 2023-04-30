
function onClick() {
    navigator.clipboard.writeText("Phoenix56#1208");
}

document.addEventListener('DOMContentLoaded',function(event){
   
    var dataText = [ "Hi! I'm Phoenix56." ];

    function skrivUt(text, i, fnCallback) {
      if (i < (text.length)) {
       document.getElementById("coolText").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

        setTimeout(function() {
          skrivUt(text, i + 1, fnCallback)
        }, 100);
      }

      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
      }
    }
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
      if (i < dataText[i].length) {
       skrivUt(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }
    StartTextAnimation(0);
  });