const code = document.querySelector(".code");
const btn = document.getElementById("copy-btn");
const msg = document.getElementById("copy-success");

btn.addEventListener("click", () => {
  let text = code.innerText;
  navigator.clipboard.writeText(text).then(
    () => {
      msg.classList.add("showMessage");
      setTimeout(() => {
        msg.classList.remove("showMessage");
      }, 1500);
    },
    () => {
      console.log("Error while copying messsage");
    }
  );
});
