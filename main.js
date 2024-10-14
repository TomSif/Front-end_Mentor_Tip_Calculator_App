const inputBill = document.getElementById("inputBill");
const customTip = document.getElementById("customTip");
const peopleCount = document.getElementById("peopleCount");
const hiddenElement = document.querySelector(".hidden");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");
const buttonReset = document.getElementById("buttonReset");
const boutonsPourcentage = document.querySelectorAll(
  ".calculator__button--tip"
);

hiddenElement.style.display = "none";
peopleCount.classList.remove("calculator__error");
let boutonActif = null;
let pourcentage = 0;

// Loop to know which btn is clicked
boutonsPourcentage.forEach((bouton) => {
  bouton.addEventListener("click", function () {
    // clean ative style of button
    if (boutonActif) {
      boutonActif.classList.remove("buttonActive");
    }

    // add active style to clicked button for user to know which is clicked
    bouton.classList.add("buttonActive");
    boutonActif = bouton;

    // Erase custom input
    customTip.value = "";

    // use dataset data-poucentage in the html to know how many percent is each button
    const pourcentage = parseFloat(bouton.dataset.pourcentage);
    customTip.value = pourcentage;
    calculerTotal();
    tipsTotal();
  });
});

// Clean style of the ative button when you click in custom input
customTip.addEventListener("click", function () {
  if (boutonActif) {
    boutonActif.classList.remove("buttonActive");
    boutonActif = null;
    customTip.value = "";
  }
});

// function to hide and show can't be zero
peopleCount.addEventListener("input", function () {
  if (peopleCount.value === "0" || peopleCount.value === "") {
    peopleCount.classList.add("calculator__error");
    hiddenElement.style.display = "inherit"; // Affiche l'élément
  } else {
    peopleCount.classList.remove("calculator__error");
    hiddenElement.style.display = "none"; // Masque l'élément
  }
});

// Fonction de calcul des résultats
const calculerTotal = () => {
  const bill = parseFloat(inputBill.value); // Montant de la facture
  const count = parseInt(peopleCount.value); // Nombre de personnes

  // Vérifie que les valeurs sont valides
  if (!isNaN(bill) && !isNaN(count) && count > 0) {
    const pourcentage = boutonActif
      ? parseFloat(boutonActif.dataset.pourcentage)
      : parseFloat(customTip.value) || 0; // Utiliser le pourcentage des boutons ou customTip
    total = (bill * (1 + pourcentage / 100)) / count; // Calcul du total par personne
  } else {
    total = 0; // Si les valeurs ne sont pas valides, on met total à 0
  }

  // Écriture dans le DOM
  totalAmount.innerHTML = total.toFixed(2); // Formate le total avec 2 décimales
};

// Écouteurs d'événements pour mettre à jour le total
inputBill.addEventListener("input", calculerTotal);
customTip.addEventListener("input", calculerTotal);
peopleCount.addEventListener("input", calculerTotal);

//Fonction de calcul du total de tips/person
const tipsTotal = () => {
  const bill = parseFloat(inputBill.value); // Montant de la facture
  const count = parseInt(peopleCount.value); // Nombre de personnes

  // Vérifie que les valeurs sont valides
  if (!isNaN(bill) && !isNaN(count) && count > 0) {
    const pourcentage = boutonActif
      ? parseFloat(boutonActif.dataset.pourcentage)
      : parseFloat(customTip.value) || 0; // Utiliser le pourcentage des boutons ou customTip
    total = (bill * (pourcentage / 100)) / count; // Calcul du total par personne
  } else {
    total = 0; // Si les valeurs ne sont pas valides, on met total à 0
  }

  // Écriture dans le DOM
  tipAmount.innerHTML = total.toFixed(2); // Formate le total avec 2 décimales
};

// Écouteurs d'événements pour mettre à jour le total
inputBill.addEventListener("input", tipsTotal);
customTip.addEventListener("input", tipsTotal);
peopleCount.addEventListener("input", tipsTotal);

//reset function

buttonReset.addEventListener("click", () => {
  inputBill.value = 0;
  customTip.value = 0;
  peopleCount.value = 0;
  tipAmount.value = 0;
  totalAmount.value = 0;
  calculerTotal();
  tipsTotal();
  // Réinitialiser le style des boutons
  if (boutonActif) {
    boutonActif.classList.remove("buttonActive");
    boutonActif = null;
  }
});
