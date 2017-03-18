WebMidi = require("webmidi");

WebMidi.enable(function (err) {
    if (err) {
	console.log("error :(");
	console.log(err);
	return;
    }
});
