import fetch from "node-fetch";
import { load } from "cheerio";

for (let i = 1; i < 2; i++) {
  //   const url = `https://erp.iitkgp.ac.in/TrainingPlacementSSO/TPComView.jsp?yop=2023-2024&com_id=${i}&user_type=SU`;
  const url = `https://erp.iitkgp.ac.in/TrainingPlacementSSO/TPComView.jsp?yop=2023-2024&com_id=1624&user_type=SU`;

  async function fetchCityName() {
    try {
      const response = await fetch(url);
      const body = await response.text();
      //   console.log(body);
      const $ = load(body);
      let cityName = "";

      $("html body").each((index, element) => {
        const cells = $(element);
        console.log(cells);
        if (cells.length > 1 && $(cells[0]).text().trim() === "City") {
          cityName = $(cells[1]).text().trim();
        }
      });

      console.log("City Name:", cityName);
    } catch (error) {
      console.error("Error fetching the page:", error);
    }
  }

  fetchCityName();
}
