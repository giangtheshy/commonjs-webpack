const btn = document.querySelector(".btn");
const show = document.querySelector(".show-count");

export const run = () => {
  let count = 0;
  btn.addEventListener("click", () => {
    count++;
    show.innerHTML = count;
  });
};
