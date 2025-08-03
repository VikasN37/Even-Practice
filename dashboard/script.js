(async function () {
  const res = await fetch("./data.json");
  const usersData = await res.json();

  const availableSlots = 300;
  const cntCustomers = document.querySelector("#cntCustomers");
  const cntLeftSlots = document.querySelector("#cntLeftSlots");
  const cntAvailableSlots = document.querySelector("#cntAvailableSlots");

  cntCustomers.innerHTML = usersData.length;
  cntLeftSlots.innerHTML = availableSlots - usersData.length;
  cntAvailableSlots.innerHTML = availableSlots;

  function renderCustomerList() {
    const listContainer = document.querySelector(".listContainer");
    listContainer.innerHTML = "";

    for (user of usersData) {
      const list = document.createElement("div");
      list.classList.add("list");

      const img = document.createElement("img");
      img.classList.add("imageSection");

      img.src = user.imageURL;

      const customerDetails = document.createElement("div");
      customerDetails.classList.add("customerDetails");

      customerDetails.innerHTML = `  <div><b>Name</b> : ${user.name}</div>
            <div><b>Age</b> :  ${user.age}</div>
            <div><b>Phone no</b> :  ${user.contact_no}</div>
            <button class="btn" id="editBtn">Edit Details</button>
            <button class="btn" id="delBtn">Delete</button>`;

      list.appendChild(img);
      list.appendChild(customerDetails);
      listContainer.append(list);

      const delBtn = customerDetails.querySelector("#delBtn");
      delBtn.addEventListener("click", () => {
        console.log(user.id);
      });
    }
  }
  renderCustomerList();
})();
