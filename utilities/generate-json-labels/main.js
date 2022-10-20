const XLSX = require('xlsx');
const fs = require('fs');

const xlsxFileName = 'Etiquetas_EhyaTech.xlsx';

if (!fs.existsSync(xlsxFileName)) {
  console.error(`El archivo ${xlsxFileName} no existe`);
  process.exit(1);
}

const outputFile = '../../smartcontracts/institutionalJs/javascript/lib/Etiquetas_EhyaTech.json';

const workbook = XLSX.readFile(xlsxFileName);
const sheet_name_list = workbook.SheetNames;
const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]], { defval: "" });

fs.writeFile(outputFile, JSON.stringify(jsonData), function(err) {
  if (err) {
    console.log(err);
  }
});

console.info(`Archivo de etiquetas generado exitosamente en ${outputFile}`)
