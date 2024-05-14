import { deleteBtn } from "./deletebtn.js";
import { editBtn } from "./editbtn.js";

let tbody = document.getElementById("tbody");

export async function getData() {
  tbody.innerHTML = "";
  let response = await fetch("/getTasks");
  let data = await response.json();
  data.forEach((row) => {
    let Trow = document.createElement("tr");
    let tdId = document.createElement("td");
    tdId.innerHTML = row.id;
    let tdTasks = document.createElement("td");
    tdTasks.innerText = row.task;
    let Tdel = document.createElement("td");
    let delbtn = deleteBtn();
    delbtn.id = row.id;
    // create a edit button element
    let tdE = document.createElement("td");
    let editB = editBtn();
    editB.href = `/edit/${row.id}`;
    tdE.append(editB);

    Tdel.appendChild(delbtn);
    Trow.appendChild(tdId);
    Trow.appendChild(tdTasks);
    Trow.appendChild(Tdel);
    Trow.appendChild(tdE);
    tbody.appendChild(Trow);
  });
}

getData();
