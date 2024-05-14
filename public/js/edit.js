import * as ajax from "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
let input = document.getElementById("input");
let taskID = document.getElementById("id");
let id = document.URL.split("edit/")[1];
console.log(id);
$.ajax({
  type: "get",
  url: "/getdata",
  data: {
    id: id,
  },
  success: (data) => {
    console.log(data[0]);
    input.value = data[0].task;
    taskID.value = data[0].id;
  },
});
