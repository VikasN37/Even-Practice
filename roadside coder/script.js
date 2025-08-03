(async function getAllEmployee() {
  const data = await fetch("./data.json");
  let res = await data.json();

  const employeeList = document.querySelector(".employee--list");

  let selectedEmployeeId = res[0].id;

  function renderEmployee() {
    employeeList.innerHTML = "";
    res.forEach((emp) => {
      const employee = document.createElement("div");

      if (emp.id == selectedEmployeeId) {
        employee.classList.add("selected");
      }
      employee.classList.add("employee--names");
      employee.setAttribute("id", emp.id);
      employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class="delete">❌ </i>`;

      employeeList.append(employee);
    });
  }

  employeeList.addEventListener("click", (e) => {
    console.log(e.target.id);

    if (e.target.tagName == "DIV" && e.target.id != selectedEmployeeId) {
      selectedEmployeeId = e.target.id;
      renderEmployee();
      renderSingleEmployee();
    }

    if (e.target.tagName == "I") {
      res = res.filter((emp) => emp.id !== Number(e.target.parentNode.id));

      if (selectedEmployeeId === Number(e.target.parentNode.id)) {
        selectedEmployeeId = res[0]?.id || -1;
        renderSingleEmployee();
      }

      renderEmployee();
    }
  });

  function renderSingleEmployee() {
    const employeeDetail = document.querySelector(".employee--details");

    employeeDetail.innerHTML = "";

    const currEmp = res.find((emp) => emp.id === Number(selectedEmployeeId));

    employeeDetail.innerHTML = `
    <img src="${currEmp.imageUrl}" class="profilePhoto"/>
     <span> ${currEmp.firstName} ${currEmp.lastName} </span>
     <span> ${currEmp.email} </span>
     <span> ${currEmp.contactNumber} </span>
     
     `;
  }

  // add employee logic
  const addBtn = document.querySelector(".btn");
  const empForm = document.querySelector(".empForm");
  const formDiv = document.querySelector(".addEmployee");

  addBtn.addEventListener("click", () => {
    formDiv.style.cssText = "display:flex";
  });

  empForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(empForm);

    const values = [...formData.entries()];

    const newEmp = {};

    values.forEach((val) => {
      newEmp[val[0]] = val[1];
    });

    newEmp.id = res[res.length - 1].id + 1;

    res.push(newEmp);
    renderEmployee();
    empForm.reset();

    formDiv.style.cssText = "display:none";
  });

  renderEmployee();
  renderSingleEmployee();
})();
