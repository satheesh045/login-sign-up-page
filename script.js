
    function flip() {

        document.querySelector('.flip-card-inner').style.transform = "rotateY(180deg)";

    }

    function flipAgain() {

        document.querySelector('.flip-card-inner').style.transform = "rotateY(0deg)";

    }


    let eye = document.getElementById("eye-login");
    let password = document.getElementById("password-login");

    eye.onclick = function () {
        if (password.type == "password") {
            password.type = "text";
            eye.className = "fa fa-eye";
            eye.style.color = "cyan";
            // password.style.border =" 1px solid cyan";


        } else {
            password.type = "password"
            eye.className = "fa fa-eye-slash";
            eye.style.color = "white";
            // password.style.border =" 1px solid white";


        }
    }


    let eye2 = document.getElementById("eye-signup");
    let password2 = document.getElementById("password-signup");

    eye2.onclick = function () {
        if (password2.type == "password") {
            password2.type = "text";
            eye2.className = "fa fa-eye";
            eye2.style.color = "cyan";
            // password2.style.border =" 1px solid cyan";



        } else {
            password2.type = "password"
            eye2.className = "fa fa-eye-slash";
            eye2.style.color = "white";
            // password2.style.border =" 1px solid white";


        }
    }



