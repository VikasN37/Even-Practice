(async function () {
  const data = await fetch("data.json");
  let images = await data.json();

  let currImageIdx = 0,
    totalImages = images.length;

  const img = document.querySelector(".image");
  const nextBtn = document.querySelector("#nextBtn");
  const previousBtn = document.querySelector("#previousBtn");
  const addBtn = document.querySelector(".addBtn");
  const delBtn = document.querySelector(".delBtn");

  // const imgSection = document.querySelector(".image-section");
  const formContainer = document.querySelector(".formContainer");

  const currCnt = document.querySelector("#currentImageNumber");
  const totalCnt = document.querySelector("#totalImageNumber");

  // const newImageURL = document.querySelector("#newImageURL");
  const form = document.querySelector(".form");

  function renderImage() {
    totalImages = images.length;

    img.src = images[currImageIdx].imageURL;

    currCnt.innerHTML = currImageIdx + 1;
    totalCnt.innerHTML = totalImages;
  }

  // setInterval(() => {
  //   currImageIdx = currImageIdx + 1;
  //   renderImage();
  // }, 6000);

  nextBtn.addEventListener("click", () => {
    currImageIdx = (currImageIdx + 1) % totalImages;
    renderImage();
  });

  previousBtn.addEventListener("click", () => {
    currImageIdx = currImageIdx - 1 < 0 ? totalImages - 1 : currImageIdx - 1;
    renderImage();
  });

  addBtn.addEventListener("click", () => {
    formContainer.style.display = "flex";
  });

  formContainer.addEventListener("click", (e) => {
    if (e.target === formContainer) {
      formContainer.style.display = "none";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const values = [...formData.entries()];

    const newImage = {};

    values.forEach((val) => {
      newImage[val[0]] = val[1];
    });

    if (totalImages > 0) {
      newImage.id = images[totalImages - 1].id + 1;
    } else {
      newImage.id = 1;
    }

    images.push(newImage);
    renderImage();
    form.reset();

    formContainer.style.display = "none";
  });

  delBtn.addEventListener("click", () => {
    const id = images[currImageIdx].id;

    images = images.filter((img) => img.id !== id);
    console.log(images);
    renderImage();
  });

  renderImage();
})();
