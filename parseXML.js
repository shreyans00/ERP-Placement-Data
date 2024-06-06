import { DOMParser } from "@xmldom/xmldom";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// __dirname is not defined in ES6 modules, so need to use these lines
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the XML data from the file
const xmlFilePath = path.join(__dirname, "data.xml");
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

  // Extract company name
  const companyNameElement = cells[0];
  const test = companyNameElement.firstChild.data;
  const start = test.indexOf('title="') + 'title="'.length + 4;
  const end = test.indexOf("'", start);
  const company = test.slice(start, end);
  const companyName = companyNameElement ? company : "N/A";

  // Extract job profile
  const profile = cells[3].childNodes[0].data;
  const start2 = profile.indexOf('title="') + 'title="'.length + 4;
  const end2 = profile.indexOf("'", start2);
  let job = profile.slice(start2, end2);
  const jobProfileElement = cells[3];

  // Remove content after "Job Type" if present
  const jobTypeIndex = job.indexOf("Job Type");
  if (jobTypeIndex !== -1) {
    job = job.slice(0, jobTypeIndex).trim();
  }

  const jobProfile = jobProfileElement ? job : "N/A";

  // Extract salary/CTC
  const salaryCtc = cells[5].textContent.trim();

  // Extract start date
  const startDate = cells[9].textContent.trim().split(" ")[0];

  // Add to JSON array
  jsonData.push({ companyName, jobProfile, salaryCtc, startDate });
}

// Write the JSON data to a file
const jsonFilePath = path.join(__dirname, "public", "data.json");
fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2), "utf-8");

console.log("JSON data has been written to data.json");
