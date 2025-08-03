const searchList = [
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "HTML",
  "CSS",
  "Python",
  "Machine Learning",
  "Data Structures",
  "Algorithms",
  "System Design",
  "Web Development",
  "DevOps",
  "Database Management",
  "TypeScript",
  "Redux",
  "Next.js",
  "Tailwind CSS",
  "REST API",
  "GraphQL",
  "Docker",
  "Kubernetes",
  "AWS",
  "Firebase",
  "CI/CD",
  "Agile",
  "Git",
  "GitHub",
  "PostgreSQL",
  "MySQL",
  "Linux",
  "VS Code",
  "Jest",
  "Mocha",
  "Cypress",
  "SEO",
  "Webpack",
  "Babel",
  "SASS",
  "Django",
  "Flask",
  "Java",
  "C++",
  "C#",
  "Spring Boot",
  "Artificial Intelligence",
  "Data Science",
  "Cybersecurity",
  "Computer Networks",
];

const inputField = document.querySelector("#inputField");
const searchBtn = document.querySelector("#searchBtn");

const searchResultsContainer = document.querySelector(
  ".searchResultsContainer"
);

function displayResults(results) {
  searchResultsContainer.innerHTML = "";
  for (let res of results) {
    let resultItem = document.createElement("div");
    resultItem.classList.add("resultItem");

    console.log(res);

    resultItem.innerHTML = res;

    searchResultsContainer.appendChild(resultItem);
  }
}

inputField.addEventListener("input", () => {
  let input = inputField.value;

  if (!input) {
    searchResultsContainer.innerHTML = "";
    return;
  }

  let results = searchList.filter((word) => {
    return word.toLowerCase().startsWith(input.toLowerCase());
  });
  //   console.log(results);
  displayResults(results);
});
