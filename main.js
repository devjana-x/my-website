 document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const bgImage = body.getAttribute("data-bg");

    if (!bgImage) return;

    const style = document.createElement("style");
    style.innerHTML = `
        .content::before {
            background: url('${bgImage}') center/cover no-repeat fixed !important;
            opacity: 0.15; /* keep consistent with existing style */
            z-index: -1;
        }
    `;
    document.head.appendChild(style);
});

document.getElementById('s').addEventListener('click', () => {
    Name = document.getElementById('name').value;
    if (Name === "") {
        document.getElementById('n').textContent = "Please enter your name!";
    }

    Email = document.getElementById('email').value;
    if (Email === "") {
        document.getElementById('em').textContent = "Please enter your email!";
    }
    else if (!Email.includes('@') || !Email.includes('.')) {
        document.getElementById('em').textContent = "Please enter a valid email!";
    }

    Message = document.getElementById('message').value;
    if (Message === "") {
        document.getElementById('msg').textContent = "Please enter your message!";
    } else if (Message.length > 500) {
        document.getElementById('msg').textContent = "Message is too long!";
    }
});
