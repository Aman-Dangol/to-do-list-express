import { deleteBtn } from "./deletebtn.js";

let tbody = document.getElementById("tbody");

async function getdata() {
  let response = await fetch("/getTasks");
  let data = await response.json();
  data.forEach((row) => {
    let Trow = document.createElement("tr");
    let tdId = document.createElement("td");
    tdId.innerHTML = row.id;
    let tdTasks = document.createElement("td");
    tdTasks.innerText = row.task;
    Trow.appendChild(tdId);
    Trow.appendChild(tdTasks);
    Trow.appendChild(deleteBtn());
    tbody.appendChild(Trow);
  });
}

getdata();
