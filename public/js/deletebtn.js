export const deleteBtn = () => {
  let btn = document.createElement("button");
  btn.innerText = "delete";
  btn.onclick = () => {
    console.log("delete a task");
  };
  return btn;
};
