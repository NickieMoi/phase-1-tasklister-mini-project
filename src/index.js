document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    handleEvent(e.target.new - task - description.value);
  });
  let recentList = docuent.querySelector("#task");
  let list = document.createElement("li");
  let btn = document.createElement("button");
  function handleEvent(work) {
    list.textContent = `${work}`;
    btn.textContent = "Done";
    recentList.appendChild(list);
    list.appendChild(btn);
  }
});
