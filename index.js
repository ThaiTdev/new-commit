const ecran = document.querySelector(".ecran");
const buttons = [...document.querySelectorAll(".button")];
console.log(buttons);
const listeKeyCode = buttons.map((button) => button.dataset.key);
console.log(listeKeyCode);

document.addEventListener("keydown", (e) => {
  const valeur = e.keyCode.toString();
  console.log(valeur, typeof valeur);
  calcul(valeur);
});

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  console.log(e.target.dataset.key);
  calcul(valeur);
});

const calcul = (valeur) => {
  if (listeKeyCode.includes(valeur)) {
    switch (valeur) {
      case "8":
        ecran.textContent = " ";
        break;
      case "187":
        const calcul = eval(ecran.textContent);
        ecran.textContent = calcul;
        break;
      default:
        const indexKeyCode = listeKeyCode.indexOf(valeur);
        console.log(indexKeyCode);
        const touche = buttons[indexKeyCode];
        ecran.textContent += touche.innerHTML;
    }
  }
};

console.log(listeKeyCode.indexOf());
console.log(buttons);
