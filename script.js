function createHearts() {
    const container = document.getElementById("floating-hearts");

    for (let i = 0; i < 80; i++) { // Increased the number of hearts
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDelay = Math.random() * 8 + "s";
        heart.style.opacity = Math.random();
        heart.style.width = heart.style.height = Math.random() * 30 + 10 + "px"; // Adjust size range

        container.appendChild(heart);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    createHearts();
    setTimeout(() => {
        document.getElementById("initial-box").style.display = "none";
        document.getElementById("special-day-box").style.display = "block";

        setTimeout(() => {
            document.getElementById("special-day-box").style.display = "none";
            document.getElementById("question-box").style.display = "block";

        }, 2000);
    }, 2000);
    
});


function handleOption(yes) {
    
    if (yes) {
        setTimeout(() => {
            document.getElementById("floating-hearts").style.display = "none";

        }, 2000);
        document.getElementById("question-box").style.display = "none"; 
        document.getElementById("final-box").style.display = "block";

        setTimeout(() => {
            document.getElementById("final-box").style.display = "none";
            document.body.style.backgroundColor = "black";
            document.getElementById("light-box").style.display = "block";
        }, 2000);
    } else {
        document.getElementById("response-message").textContent = "Please click Yes!! 😢";
        setTimeout(() => {
            document.getElementById("response-message").textContent = "";
        }, 1000);
    }
}

function toggleLights() {
    document.body.style.backgroundColor = "lightpink";
    document.getElementById("light-box").style.display = "none";
    document.getElementById("music-box").style.display = "block";
}

function playMusic() {
    document.getElementById("romantic-music").play();
    document.getElementById("music-box").style.display = "none";
    document.getElementById("image-box").style.display = "block";
}

function showImage() {
    document.getElementById("image-popup").style.display="block";
    document.getElementById("click").style.display = "none";
    document.getElementById("balloons-box").style.display = "block";
}

function flyBalloons() {
    const balloonContainer = document.getElementById("balloons");
    for (let i = 0; i < 12; i++) {
        const balloon = document.createElement("div");
        balloon.style.left = `${Math.random() * 100}%`;  // Randomize X position
        balloon.style.animationDelay = `${Math.random() * 3}s`;  // Stagger balloon animations

        balloonContainer.appendChild(balloon);
    }
    document.getElementById("notes-box").style.display = "flex";
}

function startNotes() {
    document.getElementById("balloons-box").style.display = "none";
    document.getElementById("image-box").style.display = "none";
    document.getElementById("start-notes-button").style.display = "none";
    const notes = [
        "Keep on clicking until all the notes are revelead",
        "You came into my life randomly but became one of the important person,So first of all thanks for coming into my life...",
        "Every day and every moment spent with you feel special..its like butterflies in my stomach!!",
        "You have become my home,after all the stress and bad days its you who make my days so good and special!!",
        "Your smile and your beautiful eyes has the power to light up my entire day!!",
        "I am so grateful to have you in my life. You’re my treasure!!The most precious one.. ",
        "You are the sunshine on my rainy days and warmth on my cold nights...",
        "Thanks for not getting bored of listening this immature child and not judging me and helping me with all the problems!!!",
        "Thank you for being so amazing, kind, and beautiful soul you are...With you, everything feels perfect cause you are so perfect. You make my world complete... ",
        "You are the best Hermione,I could have been keep on writing about you but you have many people's waiting, so I will write them some other day..",
        "You have said not to send you hand written letters or any materliastic things so it's the only idea I had to make your bday special..so hope you like it",
        "Once again, Happy Birthday Priyanka....and thanks for being there",
    ];

    const notesArea = document.getElementById("notes-area");
    notesArea.innerHTML = ""; // Clear previous content

    let currentNoteIndex = 0;

    // Function to display the next note
    const showNextNote = () => {
        if (currentNoteIndex >= notes.length) {
            notesArea.innerHTML = "<p style='font-size:30px;color:#ff4b5c;'>All notes revealed! 💌</p>";
            return;
        }

        // Create the sticky note
        const note = document.createElement("div");
        note.className = "sticky-note slide-in";
        note.textContent = notes[currentNoteIndex];
        notesArea.appendChild(note);

        // Add click handler for the note
        note.onclick = () => {
            note.classList.remove("slide-in");
            note.classList.add("slide-out");

            // Wait for the animation to complete, then show the next note
            setTimeout(() => {
                notesArea.removeChild(note);
                currentNoteIndex++;
                showNextNote();
            }, 500); // Match animation duration
        };
    };

    // Start with the first note
    showNextNote();
}
