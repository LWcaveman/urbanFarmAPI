const fs = require('fs');
const pdfParse = require('pdf-parse');

const readPdf = async (rows) => {
  const buffer = fs.readFileSync(rows);
  const data = await pdfParse(buffer);
  console.log(data);
  console.log('Total pages: ', data.numpages)
}

readPdf('/Users/mstrsplinter/Documents/urbanFarm/Microgreens grow guide.pdf')