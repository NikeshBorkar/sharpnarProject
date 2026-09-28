const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
  axios.get("https://crudcrud.com/api/fa399e64ad8a4b62a65db4028dc58392/todo")
    .then((res) => console.log(res))
    .catch((err)=>console.log(err))
}

function postTodo() {
  // Write your code here
  axios.post("https://crudcrud.com/api/fa399e64ad8a4b62a65db4028dc58392/todo", {
    title: "data1",
    completed:false,
  })
    .then((res) => console.log(res))
    .catch((err)=>console.log(err))
}

function putTodo() {
  // Write your code here
  axios.put("https://crudcrud.com/api/fa399e64ad8a4b62a65db4028dc58392/todo/6ab8cfa5bbc20503e8549ecc", {
    title: "Learn Axios again",
    completed:true
  })
  .then((res) => console.log(res))
    .catch((err)=>console.log(err))
}

function deleteTodo() {
  // Write your code here
  axios.delete("https://crudcrud.com/api/fa399e64ad8a4b62a65db4028dc58392/todo/6ab8cfa5bbc20503e8549ecc")
  .then((res) => console.log(res))
    .catch((err)=>console.log(err))
}
