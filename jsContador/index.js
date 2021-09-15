let num = 0;
const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");
const imgs = document.querySelector(".img");


btns.forEach((btn) =>{

    btn.addEventListener("click", (event)=>{
        const styles = event.currentTarget.classList;
        var image = document.getElementById("imagenMeme");
        if (styles.contains("btn-danger")) {
            num--;
          } else if (styles.contains("btn-success")) {
            num++;
          } else {
            num = 0;
          }

          value.textContent = num;


          if (num > 0) {
            value.style.color = "green";
            image.src="img/feliz.png";
          }
          if (num < 0) {
            value.style.color = "red";
            image.src="img/enojado.png";
          }
          if (num === 0) {
            value.style.color = "#222";
            image.src="img/gatoTimido.png";
            
          }


    })

});