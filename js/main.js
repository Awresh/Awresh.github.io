function bodyScrollingToggle() {
    document.body.classList.toggle("stop-scrolling");
}
function resume() {
    window.open("https://drive.google.com/file/d/1k9RfU5Di9OTVpg91eJd3t20Uxl2wSjMo/view?usp=sharing", "_blank");
}
/*********Navigation menu************ */

(() => {
    let hamburgerBtn = document.querySelector(".hamburger-btn"),
        navMenu = document.querySelector(".nav-menu"),
        closeNavBtn = navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showNavMenu)
    closeNavBtn.addEventListener("click", hideNavMenu)

    function showNavMenu() {
        navMenu.classList.add("open");
        bodyScrollingToggle();
    }

    function hideNavMenu() {
        navMenu.classList.remove("open");
        bodyScrollingToggle();
        fadeOut();
    }

    function fadeOut() {
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(() => {
            document.querySelector(".fade-out-effect").classList.remove("active");
        }, 300)
    }
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains('link-item')) {

            if (event.target.hash !== "") {
                event.preventDefault();
                let hash = event.target.hash;
                /*************Prevent existing active section************/
                //active new  section
                navMenu.querySelector(".active").classList.add("outer-shadow", "hover-in-shadow");
                navMenu.querySelector(".active").classList.remove("active", "inner-shadow");

                event.target.classList.add("active", "inner-shadow");
                event.target.classList.remove("outer-shadow", "hover-in-shadow");

                hideNavMenu();
            }

        }
    })


})();


function ScrollAbout() {
    setTimeout(scroll, 100);
    function scroll() {
        window.location.href = "#about"
    }
}

function ScrollProject() {
    setTimeout(scroll, 100);
    function scroll() {
        window.location.href = "#project";
    }

}

function ScrollHome() {
    setTimeout(scroll, 100);
    function scroll() {
        window.location.href = "#home";
    }

}

function ScrollContact() {
    setTimeout(scroll, 100);
    function scroll() {
        window.location.href = "#contact";
    }

}
function fadeOut() {
    document.querySelector(".fade-out-effect").classList.add("active");
    setTimeout(() => {
        document.querySelector(".fade-out-effect").classList.remove("active");
    }, 300)
}
function hideNavMenu() {
    navMenu = document.querySelector(".nav-menu"),
        navMenu.classList.remove("open");
    bodyScrollingToggle();
    fadeOut();
}

/*********************Hide all section Spect active***************** */











//--------------------------------about section tab-----------------
(() => {
    let aboutSection = document.querySelector(".about-section"),
        tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        //  let target=event.target.getAttribute("data-target");
        if (event.target.classList.contains("tab-item") && !event.target.classList.contains("active")) {
            let target = event.target.getAttribute("data-target");
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            event.target.classList.add("active", "outer-shadow");

            aboutSection.querySelector(".tab-content.active").classList.remove("active");

            aboutSection.querySelector(target).classList.add("active")

        }
    })
})();






(() => {
    let aboutSection = document.querySelector(".portfolio-section"),
        tabsContainer = document.querySelector(".portfolio-filter");


    tabsContainer.addEventListener("click", (event) => {
        let target = event.target.getAttribute("data-target");
        if (event.target.classList.contains("filter-item") && !event.target.classList.contains("active")) {
            let target = event.target.getAttribute("data-target");
            console.log("yes")
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            event.target.classList.add("active", "outer-shadow");

            aboutSection.querySelector(".row.portfolio-items.active").classList.remove("active");
            console.log(target)
            aboutSection.querySelector(target).classList.add("active")
        }
    })
})();




/***************************contact Send sms**************/
document.querySelector("#contactForm").addEventListener("submit", send);

function clearError(errorElement) {
    errorElement.textContent = "";
}

function send(event) {
    event.preventDefault();

    let form = event.target;


    let submitButton = form.querySelector("#submitButton"); // Get the submit button
    let buttonText = form.querySelector("#buttonText"); // Get the button text span
    let spinner = form.querySelector("#spinner"); // Get the spinner element

    let name = form.querySelector("#Name").value;
    let email = form.querySelector("#Email").value;
    let subject = form.querySelector("#Subject").value;
    let message = form.querySelector("#Message").value;

    let nameError = form.querySelector("#nameError");
    let emailError = form.querySelector("#emailError");
    let subjectError = form.querySelector("#subjectError");
    let messageError = form.querySelector("#messageError");

    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    if (name.trim() === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }
    if (email.trim() === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    }
    if (subject.trim() === "") {
        subjectError.textContent = "Subject is required";
        isValid = false;
    }
    if (message.trim() === "") {
        messageError.textContent = "Message is required";
        isValid = false;
    }

    if (isValid) {
        // Disable the button and show the spinner during sending
        submitButton.disabled = true;
        buttonText.innerText = "Sending..."; // Change the button text
        spinner.style.display = "inline-block";
        const telegram_bot_id = "6023147125:AAFNIQXu0pEbTEeXqLy3DF7f26ThBkMmG14"; // Replace with your Telegram bot ID
        const payload = {
            chat_id: -1001940338600, // Replace with the desired chat ID
            text: `Subject: ${subject}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        const telegramApiUrl = `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`;

        // Telegram API call
        fetch(telegramApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "cache-control": "no-cache"
            },
            body: JSON.stringify(payload)
        })
            .then((response) => response.json())
            .then((data) => {
                // Re-enable the button and hide the spinner after sending
                submitButton.disabled = false;
                spinner.style.display = "none";
                buttonText.innerText = "Send Message"; // Restore the original button text
                if (data.ok) {


                    // Sending email using Email.js
                    Email.send({
                        Host: "smtp.elasticemail.com",
                        Username: "moa16259@gmail.com",
                        Password: "DAB435188A632F22213CBE5BA5638CD1B299",
                        To: 'moa16259@gmail.com',
                        From: "moa16259@gmail.com",
                        Subject: "Mail From Contact Form",
                        Body: `Subject :- ${subject} <br/>
                    Name :- ${name} <br/>
                    Email :- ${email} <br/>
                    Message :- ${message}`
                    }).then(
                        (emailMessage) => {
                            if (emailMessage === "OK") {
                                swal("Success", "Thank you for contacting me 😊", "success");
                                form.reset();
                            } else {
                                swal("Not Sent", "An error occurred while sending the message!", "error");
                            }
                        }
                    );
                } else {
                    swal("Not Sent", "An error occurred while sending the message!", "error");
                }
            })
            .catch((error) => {
                swal("Not Sent", "An error occurred while sending the message!", "error");
            });
    }
}

// Add event listeners for "input" event to clear error messages
document.querySelector("#Name").addEventListener("input", () => clearError(nameError));
document.querySelector("#Email").addEventListener("input", () => clearError(emailError));
document.querySelector("#Subject").addEventListener("input", () => clearError(subjectError));
document.querySelector("#Message").addEventListener("input", () => clearError(messageError));


// document.querySelector("form").addEventListener("submit", send);
// function send() {
//     let form = document.querySelector("form");
//     event.preventDefault();
//     let name = form.Name.value;
//     let email = form.Email.value;
//     let Subject = form.Subject.value;
//     let message = form.Message.value;
//     if (name !== "" && email !== "" && Subject !== "" && message !== "") {

//     }
//     else {
//         //swal("please fill all required fields")
//         swal("Not Send", "Kindly fill in all mandatory fields 🙄", "error");
//     }
// }




// make call And mail
function makeCall(phoneNumber) {
    window.location.href = 'tel:' + phoneNumber;
}

function sendEmail(emailAddress) {
    window.location.href = 'mailto:' + emailAddress;
}
// Name text effect