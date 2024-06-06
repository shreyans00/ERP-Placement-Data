import jsonData from "../data.json" assert { type: "json" };

document.addEventListener("DOMContentLoaded", () => {
  const resultsTableBody = document.querySelector("#results-table tbody");

  if (resultsTableBody) {
    const uniqueData = Array.from(new Set(jsonData.map(JSON.stringify))).map(
      JSON.parse
    );

    uniqueData.forEach((data, index) => {
      const { companyName, jobProfile, salaryCtc } = data;

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
  }

  const sortButton = document.getElementById("sort-button");
  const sortOptions = document.getElementById("sort-options");
  const sortByCompanyButton = document.getElementById("sort-company");
  const sortBySalaryButton = document.getElementById("sort-salary");

  sortButton.addEventListener("click", () => {
    sortOptions.style.display =
      sortOptions.style.display === "block" ? "none" : "block";
  });

  sortByCompanyButton.addEventListener("click", () => {
    sortResults("companyName");
    sortOptions.style.display = "none";
  });

  sortBySalaryButton.addEventListener("click", () => {
    sortResults("salaryCtc");
    sortOptions.style.display = "none";
  });

  function sortResults(criteria) {
    const rowsArray = Array.from(resultsTableBody.querySelectorAll("tr"));
    const sortedRows = rowsArray.sort((a, b) => {
      const aText = a.querySelector(
        `.${criteria === "companyName" ? "company-name" : "salary-ctc"}`
      ).textContent;
      const bText = b.querySelector(
        `.${criteria === "companyName" ? "company-name" : "salary-ctc"}`
      ).textContent;
      return criteria === "companyName"
        ? aText.localeCompare(bText)
        : parseFloat(aText) - parseFloat(bText);
    });
    sortedRows.forEach((row) => resultsTableBody.appendChild(row));
  }

  document.getElementById("scroll-to-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.getElementById("scroll-to-bottom").addEventListener("click", () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });
});
