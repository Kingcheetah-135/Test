
const l = require("./go.js");

l().then((i) =>
{

	//console.log(Object.keys(i));
	console.log(i.ccall('addition', 'number', ['number',' number'], [70, 30]));

});
