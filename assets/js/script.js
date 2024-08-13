function createStory() {
    const noun = document.getElementById('noun').value.trim();
    const verb = document.getElementById('verb').value.trim();
    const adjective = document.getElementById('adjective').value.trim();
    const food = document.getElementById('food').value.trim();
    const place = document.getElementById('place').value.trim();
    const time = document.getElementById('time').value.trim();
    const secondNoun = document.getElementById('secondNoun').value.trim();
    const secondVerb = document.getElementById('secondVerb').value.trim();
    const thirdNoun = document.getElementById('thirdNoun').value.trim();
    const thirdVerb = document.getElementById('thirdVerb').value.trim();

    // Check if all fields are filled
    if (!noun || !verb || !adjective || !food || !place || !time || !secondNoun || !secondVerb || !thirdNoun || !thirdVerb) {
        alert("Please fill in all fields!");
        return;
    }

    // Create a longer and more detailed story
    const story = `Once upon a time in ${place}, there was a ${adjective} ${noun} who loved to ${verb} every ${time}. 
    One day, after enjoying some ${food}, the ${noun} met a ${secondNoun} who wanted to ${secondVerb}. 
    They decided to go on an adventure together. During their journey, they encountered a ${thirdNoun} that wanted to ${thirdVerb}. 
    The day ended with everyone enjoying a great feast and sharing their stories. It was a day to remember!`;

    // Display the story
    document.getElementById('story').textContent = story;
}

function saveStory() {
    const story = document.getElementById('story').textContent;
    console.log(story);
    if (!story) {
        alert("Please create a story first!");
        return;
    }
//save to local host storage
    localStorage.setItem("mad_libs_story", story);
}
function loadStory() {
    const fileInput = document.getElementById('file-input');
    fileInput.click();
}
