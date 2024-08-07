
function createStory() {
    var noun = document.getElementById('noun').value;
    var verb = document.getElementById('verb').value;
    var adjective = document.getElementById('adjective').value;
    
    var story = `The ${adjective} ${noun} likes to ${verb}.`;
    
    document.getElementById('story').textContent = story;
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
