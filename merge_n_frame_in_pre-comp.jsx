//Made by CHATGPT, Merge every N Layers in Pre-Comps

app.beginUndoGroup("Pre-Comp every 3 frames");

var comp = app.project.activeItem;

if (!(comp instanceof CompItem)) {
    alert("Open Composition");
} else {
    var totalLayers = comp.numLayers;
    var groupSize = 3; // Number Frames
    var groupCount = 0;

    for (var i = totalLayers; i > 0; i -= groupSize) {
        var layersToPrecomp = [];
        for (var j = 0; j < groupSize; j++) {
            var index = i - j;
            if (index >= 1) {
                layersToPrecomp.push(index);
            }
        }

        if (layersToPrecomp.length > 0) {
            groupCount++;
            comp.layers.precompose(
                layersToPrecomp,
                "Precomp_" + groupCount,
                true // move all attributes
            );
        }
    }
}

app.endUndoGroup();
