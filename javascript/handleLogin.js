const API_GETUSERS = "http://localhost:3000/users/";
const API_ADMIN = "http://localhost:3000/admins/";

document.querySelector(".loginBtn").onclick = function (e) {
  e.preventDefault();
  let formUserLogin = {
    accountUserLogin: document.querySelector(".accountUserLogin").value,
    passUserLogin: document.querySelector(".passUserLogin").value,
  };

  Promise.all([fetch(API_GETUSERS), fetch(API_ADMIN)])
    .then(function (responses) {
      // Get a JSON object from each of the responses
      return Promise.all(
        responses.map(function (response) {
          return response.json();
        })
      );
    })
    .then(function (data) {
      // Log the data to the console
      // You would do something with both sets of data here
      var accountFind = data[1].find(
        (account) =>
          account.account === formUserLogin.accountUserLogin &&
          account.password === formUserLogin.passUserLogin
      );
      var accountFind2 = data[0].find(
        (account) =>
          account.accountUser === formUserLogin.accountUserLogin &&
          account.passwordUser === formUserLogin.passUserLogin
      );
      console.log(accountFind);
      console.log(accountFind2);

      if (typeof accountFind !== "undefined") {
        swal({
          title: "Bạn đã đăng nhập thành công !!!",
          text: "Trải nghiệm mua hàng nào <3",
          icon: "success",
          button: "UwU Ok <3 !!!",
        });
        console.log(document.querySelector(".header__account__user"));
        document.querySelector(".header__account__user").innerHTML =
          accountFind.account;
        document.querySelector(".header__account__user").style.backgroundColor =
          "crimson";
        document.querySelector(".exit").classList.add("none");
        document.querySelector(".register").classList.add("none");
        document.querySelector(".header__account__identity").innerHTML = `
               <li
                  class="manage "
                >
               <a href ="admin.html">Quản lí</a>
                </li>
                <li
                class="logout"
              >
                Đăng xuất
              </li>`;
        document.querySelector(".closeX").click();
        document.querySelector(".logout").onclick = function () {
          window.location.reload();
        };
      }
      if (typeof accountFind2 !== "undefined") {
        swal({
          title: "Bạn đã đăng nhập thành công !!!",
          text: "Trải nghiệm mua hàng nào <3",
          icon: "success",
          button: "UwU Ok <3 !!!",
        });
        document.querySelector(".header__account__user").innerHTML =
          accountFind2.accountUser;
        document.querySelector(".exit").classList.add("none");
        document.querySelector(".register").classList.add("none");
        document.querySelector(".header__account__identity").innerHTML = `
           <li
              class="myCart"
            >
            Giỏ hàng của tôi
            </li>
            <li
            class="logout"
          >
            Đăng xuất
          </li>`;
        document.querySelector(".closeX").click();
        document.querySelector(".logout").onclick = function () {
          window.location.reload();
        };
      }
    })
    .catch(function (error) {
      // if there's an error, log it
      console.log(error);
    });
};
