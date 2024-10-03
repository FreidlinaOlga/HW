const btn = document.getElementById("magic-btn");

const clonedBtn = btn.cloneNode(true);

clonedBtn.id = "magic-btn-2";
clonedBtn.innerText = "Я изменю тебя";
clonedBtn.className = "second-btn";
clonedBtn.style.backgroundColor = "#a78b71";
clonedBtn.style.color = "white";

const clonedBtn2 = clonedBtn.cloneNode(true);
clonedBtn2.id = "magic-btn-3";
clonedBtn2.innerText = "Яблоко от яблони...";
clonedBtn2.className = "second-btn";
clonedBtn2.style.backgroundColor = "#f7c815";
clonedBtn2.style.color = "white"

btn.addEventListener("click", () => {
  document.body.append(clonedBtn);
});

clonedBtn.addEventListener("click", () => {
  document.body.append(clonedBtn2);
  btn.style.backgroundColor = "#9c4a1a";
  btn.style.color = "#000";
});
