import jsonData from "../data.json" assert { type: "json" };

document.addEventListener("DOMContentLoaded", async () => {
  const resultsTableBody = document.querySelector("#results-table tbody");

  const response = await fetch("/data.json");
  const jsonData = await response.json();

  const uniqueData = Array.from(new Set(jsonData.map(JSON.stringify))).map(
    JSON.parse
  );

  const displayData = (data) => {
    resultsTableBody.innerHTML = "";
    data.forEach((item, index) => {
      const { companyName, jobProfile, salaryCtc } = item;

      const row = document.createElement("tr");

      const numberCell = document.createElement("td");
      numberCell.textContent = index + 1;

      const companyCell = document.createElement("td");
      companyCell.textContent = companyName;
      companyCell.classList.add("company-name");

      const jobProfileCell = document.createElement("td");
      jobProfileCell.textContent = jobProfile;
      jobProfileCell.classList.add("job-profile");

      const salaryCtcCell = document.createElement("td");
      salaryCtcCell.textContent = salaryCtc;
      salaryCtcCell.classList.add("salary-ctc");

      row.appendChild(numberCell);
      row.appendChild(companyCell);
      row.appendChild(jobProfileCell);
      row.appendChild(salaryCtcCell);

      resultsTableBody.appendChild(row);
    });
  };

  displayData(uniqueData);

  const sortButton = document.getElementById("sort-button");
  const sortOptions = document.getElementById("sort-options");
  const sortByCompanyButton = document.getElementById("sort-company");
  const sortBySalaryAscButton = document.getElementById("sort-salary-asc");
  const sortBySalaryDescButton = document.getElementById("sort-salary-desc");

  sortButton.addEventListener("click", () => {
    sortOptions.style.display =
      sortOptions.style.display === "block" ? "none" : "block";
  });

  sortByCompanyButton.addEventListener("click", () => {
    const sortedData = [...uniqueData].sort((a, b) =>
      a.companyName.localeCompare(b.companyName)
    );
    displayData(sortedData);
    sortOptions.style.display = "none";
  });

  sortBySalaryAscButton.addEventListener("click", () => {
    const sortedData = [...uniqueData].sort(
      (a, b) =>
        parseFloat(a.salaryCtc.replace(/,/g, "")) -
        parseFloat(b.salaryCtc.replace(/,/g, ""))
    );
    displayData(sortedData);
    sortOptions.style.display = "none";
  });

  sortBySalaryDescButton.addEventListener("click", () => {
    const sortedData = [...uniqueData]
      .sort(
        (a, b) =>
          parseFloat(a.salaryCtc.replace(/,/g, "")) -
          parseFloat(b.salaryCtc.replace(/,/g, ""))
      )
      .reverse();
    displayData(sortedData);
    sortOptions.style.display = "none";
  });

  document.getElementById("scroll-to-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.getElementById("scroll-to-bottom").addEventListener("click", () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });
});
