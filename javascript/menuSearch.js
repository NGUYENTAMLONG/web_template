const API = "http://localhost:3000/products?type=";

function menuChoose(type) {
  fetch(API + type)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // var htmls = data.map((product) => {
      //   return `
      //                           <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
      //           <div class="item container-ellipsis">
      //             <img class="item_new" src="Images/banners/179452.png" alt="" />
      //             <i class="fas fa-tag tag"></i>
      //             <p class="sale">${product.sale}</p>
      //             <div class="item__image">
      //               <img src="${product.img}" alt="" />
      //             </div>
      //             <a href="#" class="item__name"><h2>${product.name}</h2></a>
      //             <b>${product.price} VND <del>${product.old_price}</del></b>
      //             <div class="item__buy">
      //               <p>Thêm vào giỏ hàng <i class="fas fa-cart-arrow-down"></i></p>
      //             </div>
      //           </div>
      //         </div>
      //                           `;
      // });
      // listProducts.innerHTML = htmls.join("");

      $("#list").pagination({
        // you call the plugin
        dataSource: data, // pass all the data
        pageSize: 10, // put how many items per page you want
        callback: function (data, pagination) {
          // data will be chunk of your data (json.Product) per page
          // that you need to display
          var wrapper = $("#list .wrapper").empty();
          $.each(data, function (i, f) {
            $(
              "#list .wrapper"
            ).append(`<div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <div class="item container-ellipsis">
             
            
            ${
              f.new !== false
                ? "<img class='item_new' src='Images/banners/179452.png' alt='' /> "
                : ""
            }
              
              ${f.sale !== "" ? " <i class='fas fa-tag tag'></i>" : ""}

              ${f.sale !== "" ? " <p class='sale'>" + f.sale + "</p> " : ""}
              <div class="item__image">
                <img src="${f.img}" alt="" />
              </div>
              <a href="#" class="item__name"><h2>${f.name}</h2></a>
              <b>${
                f.price
              } VND <del>${f.old_price !== "" ? f.old_price : ""}</del></b>
              <div class="item__buy">
                <p>Thêm vào giỏ hàng <i class="fas fa-cart-arrow-down"></i></p>
              </div>
            </div>
          </div>`);
          });
        },
      });
      document.querySelectorAll(".sale").forEach((obj, index) => {
        if (obj.innerHTML === "") {
          obj.previousElementSibling.remove();
        }
      });
      data.forEach((product, index) => {
        if (product.new === false) {
          document
            .querySelectorAll(".item")
            [index].querySelector(".item_new")
            .remove();
        }
      });
    });
}
