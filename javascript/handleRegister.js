const API_CREATE = "http://localhost:3000/users/";
document.querySelector(".registerBtn").onclick = function (e) {
  e.preventDefault();
  let formUserCreate = {
    nameUser: document.querySelector(".nameUser").value,
    accountUser: document.querySelector(".accountUser").value,
    passwordUser: document.querySelector(".passUser").value,
    emailUser: document.querySelector(".emailUser").value,
    check: document.querySelector(".checkEmail").checked,
    cart: "",
  };

  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(formUserCreate),
  };
  fetch(API_CREATE, options)
    .then((response) => {
      return response.json();
    })
    .then(function () {
      swal({
        title: "Bạn đã đăng ký thành công !!!",
        text: "Hãy vào lại trang web sau nha <3",
        icon: "success",
        button: "UwU Ok <3 !!!",
      });
    })
    .catch((error) => {
      console.log(error);
      swal("Oh Không!!!", "Có gì đó không ổn!", "error");
    });
};
