console.log(test.pluck([{ name: "sam", age: "23" }, { name: "ola" }], "name"));

const btn = document.querySelector("#showmodal"); // closemodal
const closeBtn = document.querySelector("#closemodal");

btn.addEventListener("click", () => {
  test.showModal();
});

closeBtn.addEventListener("click", () => {
  test.hideModal();
});
