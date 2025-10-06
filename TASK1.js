document.getElementById("submitBtn").addEventListener("click", function() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;


  let user = "Anu";
  let pw = "12345";

  let message = document.getElementById("message");

  if (username === user && password === pw) {
    message.style.color = "green";
    message.innerHTML = "Login successful! Welcome " + username;
  } else {
    message.style.color = "red";
    message.innerHTML = "Wrong username or password!";
  }
});
