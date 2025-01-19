const fs = require('fs');
const csv = require('csv-parser');

const inputFile = 'input_countries.csv';
const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';

// Function to delete files if they already exist
function deleteIfExists(file) {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`${file} deleted.`);
  }
}

// Delete canada.txt and usa.txt if they exist
deleteIfExists(canadaFile);
deleteIfExists(usaFile);

// Read and process the CSV file
fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (row) => {
    if (row.country.toLowerCase() === 'canada') {
      fs.appendFileSync(canadaFile, `${row.country},${row.year},${row.population}\n`);
    } else if (row.country.toLowerCase() === 'united states') {
      fs.appendFileSync(usaFile, `${row.country},${row.year},${row.population}\n`);
    }
  })
  .on('end', () => {
    console.log('CSV file processing completed.');
  })
  .on('error', (err) => {
    console.error(`Error reading CSV file: ${err.message}`);
  });
