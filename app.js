import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 5000;

// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "public" directory
const static_path = path.join(__dirname, "public");
app.use(express.static(static_path));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/data.json", (req, res) => {
  res.sendFile(path.join(__dirname, "data.json"));
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
