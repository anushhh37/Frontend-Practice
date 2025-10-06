document.getElementById("submitBtn").addEventListener("click", function() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let correctUser = "Anu";
  let correctPass = "12345";

  let message = document.getElementById("message");

  if (username === correctUser && password === correctPass) {
    message.style.color = "green";
    message.innerHTML = "Login successful! Welcome " + username;
  } else {
    message.style.color = "red";
    message.innerHTML = "Wrong username or password!";
  }
});