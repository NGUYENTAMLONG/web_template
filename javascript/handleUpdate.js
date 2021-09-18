const API_UPDATE = "http://localhost:3000/products/";

function call() {
  const modalBody2 = document.querySelector(".modal-body2");
  tbody.querySelectorAll(".btn-warning").forEach((item, index) => {
    item.onclick = function () {
      modalBody2.innerHTML = `<div class="form" >
                   <form style="padding: 20px;">
                     <div class="float-right">
                     ID: 
                     <a href="#" class="btn btn-primary  disabled  mb-2 idItem" tabindex="-1" role="button" aria-disabled="true">${
                       tbody
                         .querySelectorAll("tr")
                         [index].querySelector(".product__id").innerHTML
                     }</a>
                     </div>

                     <div class="mb-3">
                       <label class="form-label">Tên sản phẩm</label>
                       <input type="text" class="form-control nameItem" placeholder="Nhập tên sản phẩm" value="${
                         tbody
                           .querySelectorAll("tr")
                           [index].querySelector(".product__name").innerHTML
                       }">
                     </div>
                     <div class="mb-3">
                       <label  class="form-label">Giá</label>
                       <input type="text" class="form-control priceItem" placeholder="Nhập giá sản phẩm" value="${
                         tbody
                           .querySelectorAll("tr")
                           [index].querySelector(".product__price").innerHTML
                       }">
                     </div>
                     <div class="mb-3">
                       <label  class="form-label">Giá cũ</label>
                       <input type="text" class="form-control oldPriceItem" placeholder="Nhập giá cũ (Nếu có sale) (VD : 350.000 VND) " value="${
                         tbody
                           .querySelectorAll("tr")
                           [index].querySelector(".product__old_price")
                           .innerHTML
                       }">
                     </div>
                     <div class="mb-3">
                       <label  class="form-label">Sale</label>
                       <input type="text" class="form-control saleItem" placeholder="Nhập % sale (VD : 50%)" value="${
                         tbody
                           .querySelectorAll("tr")
                           [index].querySelector(".product__sale").innerHTML
                       }">
                     </div>
                     <div class="mb-3">
                       <label  class="form-label">Loại</label>
                       <input type="text" class="form-control typeItem" placeholder="Nhập loại sản phẩm (VD: shirt/jacket/pants/jeans)" value="${
                         tbody
                           .querySelectorAll("tr")
                           [index].querySelector(".product__type").innerHTML
                       }">
                     </div>
                     <div class="mb-3 ">
                       <label class="form-check-label mt-1">New </label>
                       <input type='checkbox' class='form-check-input ml-2' style='zoom:1.7' id='exampleCheck1' ${
                         tbody
                           .querySelectorAll("tr")
                           [index].querySelector(".product__new").innerHTML ==
                         "true"
                           ? "checked"
                           : ""
                       }/>
                     </div>
                     <div class="mb-3 ">
                     <label class="form-check-label mt-1">Số lượng </label>
                     <input type="text" class="form-control numbersItem" placeholder="Nhập số lượng sản phẩm (VD: 150)" value="${
                       tbody
                         .querySelectorAll("tr")
                         [index].querySelector(".product__numbers").innerHTML
                     }">
                   </div>
                   <div class="mb-3 ">
                   <label class="form-check-label mt-1">Sizes </label>
                   <input type="text" class="form-control sizesItem" placeholder="Nhập size (VD : S,M,L,XL,XXL)" value="${
                     tbody
                       .querySelectorAll("tr")
                       [index].querySelector(".product__size").innerHTML
                   }">
                 </div>
                     <div class="mb-3">
                       <label  class="form-label">Mô tả</label>
                       <textarea type="text" class="form-control descItem" placeholder="Nhập mô tả sản phẩm">${
                         tbody
                           .querySelectorAll("tr")
                           [index].querySelector(".product__desc").innerHTML
                       }</textarea>
                     </div>
                     <div class="mb-3 ">
                       <label  class="form-label">Ảnh</label>
                       <input type="file" id="myFile" name="filename" class="imgItem pl-3" value="C:\ fakepath\jacket5.jpg">
                       <div class="view p-2" style="padding: 5px; border: dashed 3px gray;">
                       <img src="${tbody
                         .querySelectorAll("tr")
                         [index].querySelector(".product__img img")
                         .getAttribute(
                           "src"
                         )}" style="object-fit:contain; width:100%;height:auto;" alt="">
                       </div>
                     </div>
                   
         
                     <button  class="btn btn-primary btn-submit" >Gửi <i class="fas fa-2x fa-dove"></i></button>
                    <button type="button" class="btn btn-danger float-right cancel"data-dismiss="modal">Hủy bỏ<i class="fas fa-sign-out-alt"></i></button>

                   </form>
                 `;
      //  onclick="handleUpdate(event)"
      // handle view image
      var Image_input = document.querySelector("#myFile");
      var view = document.querySelector(".view");
      let idItem = document.querySelector(".idItem").innerHTML;
      var btnSubmit = document.querySelector(".btn-submit");
      Image_input.onchange = function (e) {
        view.innerHTML = ` <img src="Images/${e.target.value.slice(
          12
        )}" style="object-fit:contain; width:100%;height:auto;" alt="">`;
      };
      btnSubmit.onclick = function (e) {
        e.preventDefault();
        var formDataUpdate = {
          id: idItem,
          name: document.querySelector(".nameItem").value,
          desc: document.querySelector(".descItem").value,
          price: document.querySelector(".priceItem").value,
          img: "Images/" + document.querySelector(".imgItem").value.slice(12),
          sale: document.querySelector(".saleItem").value,
          old_price: document.querySelector(".oldPriceItem").value,
          type: document.querySelector(".typeItem").value,
          new: document.querySelector(".form-check-input").checked,
          numbers: parseInt(`${document.querySelector(".numbersItem").value}`),
          size: document.querySelector(".sizesItem").value.split(","),
        };
        // console.log(document.querySelector(".nameItem").value);
        // console.log(document.querySelector(".idItem").innerHTML);
        // console.log(document.querySelector(".priceItem").value);
        // console.log(document.querySelector(".oldPriceItem").value);
        // console.log(document.querySelector(".saleItem").value);
        // console.log(document.querySelector(".typeItem").value);
        // console.log(document.querySelector(".form-check-input").checked);
        // console.log(document.querySelector(".descItem").value);
        // console.log(document.querySelector(".imgItem").value.slice(12));

        let options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(formDataUpdate),
        };
        fetch(API_UPDATE + "/" + idItem, options)
          .then((response) => {
            return response.json();
          })
          .then(function () {
            // console.log(document.querySelector(".cancel"));
          });
      };
    };
  });
}
