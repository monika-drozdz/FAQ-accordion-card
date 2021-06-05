var x = document.getElementsByClassName("question");
var i;
      
      for (i=0; i<x.length; i++) {
        x[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var answ = this.nextElementSibling;
          if (answ.style.maxHeight) {
            answ.style.maxHeight = null;
            } else {
            answ.style.maxHeight = answ.scrollHeight + "px";
            }
        }
        );
      }