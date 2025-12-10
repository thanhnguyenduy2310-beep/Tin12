const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {

    const state = Flip.getState(cards);
    const isCardActive = card.classList.contains("active");

    cards.forEach((otherCard, otherIdx) => {
      otherCard.classList.remove("active");
      otherCard.classList.remove("is-inactive");
      if (!isCardActive && index !== otherIdx) {
        otherCard.classList.add("is-inactive")
      }
    });
    if(!isCardActive) card.classList.add("active");

    Flip.from(state,{
        duration: 1,
        ease: "expo.out",
        absolute: true,    
    });
  });
});