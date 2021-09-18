const API_CREATE = "http://localhost:3000/products/";
function handleCreate(event) {
  event.preventDefault();
  var formDataCreate = {
    name: document.querySelector(".create_name").value,
    desc: document.querySelector(".create_desc").value,
    price: document.querySelector(".create_price").value,
    img: "Images/" + document.querySelector(".create_img").value.slice(12),
    sale: document.querySelector(".create_sale").value,
    old_price: document.querySelector(".create_oldprice").value,
    type: document.querySelector(".create_type").value,
    new: document.querySelector(".create_new").checked,
    numbers: parseInt(`${document.querySelector(".create_numbers").value}`),
    size: document.querySelector(".create_sizes").value.split(","),
  };

  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(formDataCreate),
  };
  if (document.querySelector(".create_name").value !== "") {
    reqAPI(options);
  } else {
    alert("Bạn chưa nhập đủ thông tin 😈");
  }
}

function reqAPI(options) {
  fetch(API_CREATE, options)
    .then((response) => {
      return response.json();
    })
    .then(function () {
      console.log(options);
    });
}

function createAgainBtn() {
  document.querySelector(".create_name").value = "";
  document.querySelector(".create_desc").value = "";
  document.querySelector(".create_price").value = "";
  document.querySelector(".create_img").value = "";
  document.querySelector(".create_sale").value = "";
  document.querySelector(".create_oldprice").value = "";
  document.querySelector(".create_type").value = "";
  document.querySelector(".create_new").checked = "";
  document.querySelector(".create_numbers").value = "";
  document.querySelector(".create_sizes").value = "";
  view2.innerHTML = "";
}
