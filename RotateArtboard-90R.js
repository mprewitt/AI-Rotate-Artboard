// Rotate Artboard 90 degrees clockwise

// INSTALLATION:
// Install in /Applicatons/[Illustrator folder]/Presets/en_US/Scripts

// DESCRIPTION:
// Rotate the artboard in 90 degree increments.

// SOURCES:
// https://forums.adobe.com/message/9074536#9074536

// Make sure we have an open document, or else open one
if( app.documents.length == 0 ) {
	fileToProcess = File.openDialog();
	app.open(fileToProcess);
}

var doc = app.activeDocument;

var currentArtboard = doc.artboards.getActiveArtboardIndex();
var currentArtboardRect = doc.artboards[currentArtboard].artboardRect; // Rect, which is an array;
var currentLeft = currentArtboardRect[0];
var currentTop = currentArtboardRect[1];
var currentRight = currentArtboardRect[2];
var currentBottom = currentArtboardRect[3];
var currentWidth = Math.abs( currentRight - currentLeft );
var currentHeight = Math.abs( currentBottom - currentTop );

var centerX = currentLeft + (currentWidth/2);
var centerY = currentTop - (currentHeight/2); // Y axis is inverted

var newArtboardRect = [];
var newWidth = currentHeight;
var newHeight = currentWidth;

// Rotate the artboard 90 degrees

newArtboardRect[0] = centerX-(newWidth/2);
newArtboardRect[1] = centerY+(newHeight/2); // Y axis is inverted
newArtboardRect[2] = centerX+(newWidth/2);
newArtboardRect[3] = centerY-(newHeight/2); // Y axis is inverted

doc.artboards[currentArtboard].artboardRect = newArtboardRect;

// Set ruler origin to center, rotate everything around custom pivot, reset the ruler

var currentOrigin = [ newArtboardRect[0], newArtboardRect[1] ]; 

// currentArtboard.rulerOrigin = currentOrigin;
doc.rulerOrigin = currentOrigin;

// currentArtboard.rulerOrigin = [newWidth/2,newHeight/2];
doc.rulerOrigin = [newWidth/2,newHeight/2];

// alert("Rotation X Y coords are " + newWidth/2 + ", " + newHeight/2 + ".");



// CURRENT BUG:
// Setting the rulerOrigin does NOT work



var pItems = doc.pageItems;  
for(var i = 0;i < pItems.length;i++){
	pItems[i].rotate(270,true,true,true,true,Transformation.DOCUMENTORIGIN); 
}

doc.rulerOrigin = currentOrigin;
