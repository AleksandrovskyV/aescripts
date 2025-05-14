//Made by CHATGPT, Slice Layer every N Frames

app.beginUndoGroup("Slice Layer every 3 frames");

var comp = app.project.activeItem;
if (!(comp instanceof CompItem)) {
    alert("Open Composition");
} else {
    var layer = comp.selectedLayers[0];
    if (!layer) {
        alert("Select Layer");
    } else {
        var frameDuration = 1 / comp.frameRate;
        var cutDuration = frameDuration * 3; // Number N Frames
        var startTime = layer.inPoint;
        var endTime = layer.outPoint;
        var currentTime = startTime;

        while (currentTime < endTime) {
            var newLayer = layer.duplicate();
            newLayer.inPoint = currentTime;
            newLayer.outPoint = Math.min(currentTime + cutDuration, endTime);
            currentTime += cutDuration;
        }

        layer.enabled = false; // Disable Original Layer
    }
}

app.endUndoGroup();