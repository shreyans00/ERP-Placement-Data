import jsonData from "../data.json" assert { type: "json" };

document.addEventListener("DOMContentLoaded", async () => {
  const resultsTableBody = document.querySelector("#results-table tbody");

  // Fetch the result data
  const response = await fetch("/dataResult.json");
  const resultData = await response.json();

  // Create a map for quick lookup of results by company name
  const resultMap = resultData.reduce((acc, item) => {
    acc[item.companyName] = item.result;
    return acc;
  }, {});

  const uniqueData = Array.from(new Set(jsonData.map(JSON.stringify))).map(
    JSON.parse
  );

  const displayData = (data) => {
    resultsTableBody.innerHTML = "";
    data.forEach((item, index) => {
      const { companyName, jobProfile, salaryCtc, startDate } = item;

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

      const startDateCell = document.createElement("td");
      startDateCell.textContent = startDate;
      startDateCell.classList.add("start-date");

      const resultCell = document.createElement("td");

      if (resultMap[companyName]) {
        resultCell.innerHTML = '<span class="view-result">▶️</span>';
        resultCell.addEventListener("click", () => {
          const resultText = resultMap[companyName] || "No result available";
          document.getElementById("modal-result").textContent = resultText;
          document.getElementById("modal").style.display = "block";
        });
      } else {
        resultCell.innerHTML = '<span class="no-result"></span>';
      }

      row.appendChild(numberCell);
      row.appendChild(companyCell);
      row.appendChild(jobProfileCell);
      row.appendChild(salaryCtcCell);
      row.appendChild(startDateCell);
      row.appendChild(resultCell);

      resultsTableBody.appendChild(row);
    });
  };

  displayData(uniqueData);

  const sortButton = document.getElementById("sort-button");
  const sortOptions = document.getElementById("sort-options");
  const sortByCompanyButton = document.getElementById("sort-company");
  const sortBySalaryAscButton = document.getElementById("sort-salary-asc");
  const sortBySalaryDescButton = document.getElementById("sort-salary-desc");
  const sortByStartDateButton = document.getElementById("sort-start-date");

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

  sortByStartDateButton.addEventListener("click", () => {
    const sortedData = [...uniqueData].sort((a, b) => {
      const [dayA, monthA, yearA] = a.startDate.split("-").map(Number);
      const [dayB, monthB, yearB] = b.startDate.split("-").map(Number);
      return yearA - yearB || monthA - monthB || dayA - dayB;
    });
    displayData(sortedData);
    sortOptions.style.display = "none";
  });

  document.getElementById("scroll-to-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.getElementById("scroll-to-bottom").addEventListener("click", () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });

  // Close modal when the close button is clicked
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
  });

  // Close modal when clicking outside of the modal content
  window.addEventListener("click", (event) => {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
