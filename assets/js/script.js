
function createStory() {
    var noun = document.getElementById('noun').value.trim();
    var verb = document.getElementById('verb').value.trim();
    var adjective = document.getElementById('adjective').value.trim();
    var food = document.getElementById('food').value.trim();
    var place = document.getElementById('place').value.trim();
    var time = document.getElementById('time').value.trim();
    var secondNoun = document.getElementById('secondNoun').value.trim();
    var secondVerb = document.getElementById('secondVerb').value.trim();
    var thirdNoun = document.getElementById('thirdNoun').value.trim();
    var thirdVerb = document.getElementById('thirdVerb').value.trim();

    // Check if all fields are filled
    if (!noun || !verb || !adjective || !food || !place || !time || !secondNoun || !secondVerb || !thirdNoun || !thirdVerb) {
        alert("Please fill in all fields!");
        return;
    }

    // Create a longer and more detailed story
    var story = `Once upon a time in ${place}, there was a ${adjective} ${noun} who loved to ${verb} every ${time}. One day, after enjoying some ${food}, the ${noun} met a ${secondNoun} who wanted to ${secondVerb}. They decided to go on an adventure together. During their journey, they encountered a ${thirdNoun} that wanted to ${thirdVerb}. The day ended with everyone enjoying a great feast and sharing their stories. It was a day to remember!`;

    // Display the story
    document.getElementById('story').textContent = story;
    document.getElementById('story-container').style.display = 'block';
}

function saveStory() {
    var story = document.getElementById('story').textContent;
    if (!story) {
        alert("Please create a story first!");
        return;
    }

    var blob = new Blob([story], {type: "text/plain;charset=utf-8"});
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "mad_libs_story.txt";
    a.click();
}

function loadStory() {
    var fileInput = document.getElementById('file-input');
    fileInput.click();
}
