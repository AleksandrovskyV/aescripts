Tested in After Effects 2020 // Made with ChatGPT

Slice layer in After Effects every N frames // On Timeline  
[slice_layer_every_n_frame.jsx](https://aleksandrovskyv.github.io/aescripts/slice_layer_every_n_frame.jsx)  // 3 Frames in example 


Merge every N frames in Pre-Comp in After Effects // On Timeline  
[merge_n_frame_in_pre-comp.jsx](https://aleksandrovskyv.github.io/aescripts/merge_n_frame_in_pre-comp.jsx)   // 3 Frames in example


### Expressions

// LoopOut("offset") for ShapePath value between two linear keyframes, tested in AE 2020:

```javascript
var pProp = thisProperty;

if (pProp.numKeys > 1 && time > pProp.key(pProp.numKeys).time) {
    var t1 = pProp.key(1).time;
    var t2 = pProp.key(pProp.numKeys).time;
    var span = t2 - t1;
    var n = Math.floor((time - t1) / span);
    var t = (time - t1) % span;

    var pStart = pProp.points(t1);
    var pEnd = pProp.points(t2);
    var pNow = pProp.points(t1 + t);
    
    var newPoints = [];

    for (var i = 0; i < pNow.length; i++) {
        var dx = (pEnd[i][0] - pStart[i][0]) * n;
        var dy = (pEnd[i][1] - pStart[i][1]) * n;
        
        newPoints.push([pNow[i][0] + dx, pNow[i][1] + dy]);
    }

    createPath(newPoints, pProp.inTangents(t1 + t), pProp.outTangents(t1 + t), pProp.isClosed());
} else {
    value;
}
