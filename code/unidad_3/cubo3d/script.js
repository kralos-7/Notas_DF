const cube = document.getElementById("cube");

let scale = 1; // 100%

let rotateX = 0;
let rotateY = 0;

document.addEventListener("keydown", (e) => {

	switch (e.key) {
    	case "ArrowUp":
      		rotateX -= 90;
      		break;
    	case "ArrowDown":
      		rotateX += 90;
      		break;
    	case "ArrowLeft":
      		rotateY -= 90;
      		break;
    	case "ArrowRight":
      		rotateY += 90;
      		break;
 	}

  	// cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  	// 🔍 ESCALA
  	if (e.key.toLowerCase() === "a") {
    	scale += 0.2;
    	if (scale > 2) scale = 2; // máximo 200%
  	}

  	if (e.key.toLowerCase() === "d") {
    	scale -= 0.2;
    	if (scale < 0.5) scale = 0.5; // mínimo 50%
  	}

	//cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;

	cube.style.transform = `
  rotateX(${rotateX}deg)
  rotateY(${rotateY}deg)
  scale3d(${scale}, ${scale}, ${scale})
`;

});
