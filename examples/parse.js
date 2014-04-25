var PSD = require('../');

psd = PSD.fromFile('./examples/images/example.psd');
psd.parse();

console.log(psd.header.export());
// psd.image.saveAsPng('./output.png').then(function () {
//   console.log("Finished!");
// });
console.log(psd.layers.map(function (l) { return l.export(); }));