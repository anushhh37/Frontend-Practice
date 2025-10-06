function login(event) {
        event.preventDefault();  

            let logindetails = [{ username: "Neymar",password: "ney123" },
                { username: "Messi",   password: "messi123" },
                { username: "ronaldo", password: "ronaldo123"}];

            let user = document.getElementById("username").value;
             let pass = document.getElementById("password").value;
            let iscorrect = false;

            for (let i = 0; i < logindetails.length; i++) {
                if (
                    user === logindetails[i].username && pass === logindetails[i].password 
                ) {
                    iscorrect = true;
                    break;
                }
            }

            if (iscorrect) {
                window.location.href = "loginpage.html"; 
                alert("You are successfully loggen in")
            } else {
                alert("Details incorrect. Please try again");
            }
        }