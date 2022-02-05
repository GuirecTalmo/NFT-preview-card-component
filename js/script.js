 
  const addClass = document.querySelector("#card")
  addClass.addEventListener("click", function() {

    if (addClass.classList.contains("shadow_cardAnimation") === true) {
        
      document.getElementById("card").classList.remove("shadow_cardAnimation");
      document.getElementById("card").classList.add("shadow_cardAnimationStop");
    }

    else{
      document.getElementById("card").classList.add("shadow_cardAnimation");
    }
  });




