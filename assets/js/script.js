
function createStory() {
    var noun = document.getElementById('noun').value.trim();
    var verb = document.getElementById('verb').value.trim();
    var adjective = document.getElementById('adjective').value.trim();
//added .trim to the end to ensure that whitespace-only inputs are treated as empty fields.
    if (!noun || !verb || !adjective) {
        alert("Please fill in all fields!");
        return;
    }
//added the ! operator to the if statement to check if any of the fields are empty.
//If any of the fields are empty, an alert is displayed, and the function returns early.
var story = `The ${adjective} ${noun} likes to ${verb}.`;
    document.getElementById('story').textContent = story;
    document.getElementById('story-container').style.display = 'block';
    if (noun && verb && adjective) {
        document.getElementById('createStory-button').display = 'block';
    }
//added the && operator to the if statement to check if all the fields are filled.
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
