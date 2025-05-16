let videoBtn = document.querySelectorAll('.vid-btn');
videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        let activeBtn = document.querySelector('.controls .active');
        if (activeBtn) {
            activeBtn.classList.remove('active');
        }

        btn.classList.add('active');
        
        let src = btn.getAttribute('data-src');
        let videoSlider = document.querySelector('#video-slider');
        videoSlider.src = src;
        
        videoSlider.load();
        videoSlider.play();
    });
});

document.getElementById("Mon-bouton").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Formulaire envoyé !");

    const formulaire = document.querySelector("form");
    if (formulaire) {
        formulaire.style.backgroundColor = "#575353"; 
    }
    const bouton = document.getElementById("Mon-bouton");
    bouton.style.display = "none";
    const message = document.createElement("p");
    message.textContent = "Merci pour votre envoi ! 😊";
    message.classList.add("message-confirmation");
    const parent = bouton.parentNode; 
    parent.insertBefore(message, bouton); 

    setTimeout(function() {
        bouton.style.display = "block"; 
    }, 3000); 
});