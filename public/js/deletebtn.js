import { getData } from "./getData.js";

export const deleteBtn = () => {
  let btn = document.createElement("button");
  btn.innerText = "delete";
  btn.onclick = removeTask;
  return btn;
};

async function removeTask() {
  await fetch("/delete", {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: this.id }),
  });
  getData();
}
