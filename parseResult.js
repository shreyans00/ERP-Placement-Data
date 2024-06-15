import { DOMParser } from "@xmldom/xmldom";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// __dirname is not defined in ES6 modules, so need to use these lines
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the XML data from the file
const xmlFilePath = path.join(__dirname, "resultData.xml");
const xmlString = fs.readFileSync(xmlFilePath, "utf-8");

// Parse the XML using DOMParser
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");

const jsonData = [];

// Extract information from each row
const rows = xmlDoc.getElementsByTagName("row");
for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  const cells = row.getElementsByTagName("cell");

  // Extract type and category
  const type = cells[1].textContent.trim();
  const category = cells[2].textContent.trim();

  // Filter only "PLACEMENT" and "Result"
  if (type === "PLACEMENT" && category === "Result") {
    // Extract company name
    const companyName = cells[3].textContent.trim();

    // Extract and clean the result (remove <a> tags and its content)
    const resultElement = cells[4];
    let resultText = resultElement ? resultElement.textContent.trim() : "";

    // Remove <a> tags and their attributes
    resultText = resultText
      .replace(/<a[^>]*>/g, "")
      .replace(/<\/a>/g, "")
      .trim();

    // Add to JSON array
    jsonData.push({ companyName, result: resultText });
  }
}

// Write the JSON data to a file
const jsonFilePath = path.join(__dirname, "public", "dataResult.json");
fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2), "utf-8");

console.log("JSON data has been written to dataResult.json");
