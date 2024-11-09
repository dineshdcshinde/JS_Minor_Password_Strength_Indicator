let input = document.querySelector("input");
let indicator = document.querySelector(".indicate");
let msg = document.querySelector(".output");

input.addEventListener("input", () => {
  let value = input.value;
  if (!input.value) {
    msg.style.color = "red";
    msg.innerText = "Please enter a password...";
    indicator.style.backgroundColor = "red";
    return;
  } else {
    if (value.length <= 8) {
      msg.style.color = "red";
      msg.innerText = `Password is too short...`;
      indicator.style.backgroundColor = "red";
    } else {
      msg.style.color = "green";
      indicator.style.backgroundColor = "red";

      if (value.search(/[0-9]/) == -1) {
        msg.style.color = "red";
        msg.innerText = `Password should contain at least one number...`;
        indicator.style.backgroundColor = "red";
      } else if (value.search(/[a-z]/) == -1) {
        msg.style.color = "red";
        msg.innerText = `Password should contain at least one alphabetic character...`;
        indicator.style.backgroundColor = "red";
      } else if (value.search(/[A-Z]/) == -1) {
        msg.style.color = "red";
        msg.innerText = `Password should contain at least one uppercase character...`;
        indicator.style.backgroundColor = "red";
      } else if (value.search(/[!@#\$^&*]/g) == -1) {
        msg.style.color = "red";
        msg.innerText = `Password should contain at least one special character...`;
        indicator.style.backgroundColor = "red";
      } else {
        msg.style.color = "green";
        msg.innerText = `Password is strong...`;
        indicator.style.backgroundColor = "green";
      }
    }
  }
});
