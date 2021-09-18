const API_DELETE = "http://localhost:3000/products/";
let options = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
};
function handleDelete(modalBody) {
  const confirmDeleteBtn = document.querySelector(".confirmDelete");
  confirmDeleteBtn.onclick = function () {
    fetch(API_DELETE + modalBody.querySelector(".badge").innerHTML, options)
      .then((response) => {
        return response.json();
      })
      .then(function () {});
  };
}
