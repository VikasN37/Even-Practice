(async function () {
  const faqList = document.querySelector(".faq-list-section");

  const res = await fetch("data.json");
  const data = await res.json();

  function renderQnA() {
    data.map((qna) => {
      const ques = document.createElement("div");
      ques.classList.add("faq-questions");

      const ans = document.createElement("div");
      ans.classList.add("faq-answer");
      ans.style.display = "none";

      ques.innerHTML = `Q : ${qna.question}`;
      ans.innerHTML = `Ans : ${qna.answer}`;

      ques.addEventListener("click", () => {
        ans.style.display = ans.style.display === "none" ? "block" : "none";
      });

      faqList.append(ques);
      faqList.append(ans);
    });
  }

  renderQnA();
})();
