let deleteId = null;
let deleteElement = null;
$("table").after(
  $(
    `<img class="loading" src="https://media2.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif?cid=ecf05e47o6bj4jluy5j6s4hkce3dyoosfq79yihy82bqblxk&rid=giphy.gif"/>`
  )
);
$.ajax({
  method: "GET",
  url: "http://vietnguyen.herokuapp.com/users",
}).done(function (data) {
  //tắt loading ................
  $(".loading").remove();
  let content =
    `<caption class='add_hv'>
                    <button class='add_hv-button'>
                        <a class='add_hv-link' href="Add-HV.html">
                            <i class='fa fa-plus-circle add_hv-button-icon' aria-hidden='true'></i>
                            Thêm học viên
                        </a>
                    </button>
                </caption>"` +
    "<tr class='title'> <th>Họ tên</th><th>Năm sinh</th><th>Email</th><th>Số điện thoại</th><th></th></tr>";

  for (let i = 0; i < data.length; i++) {
    content += `<tr class=detail>
                    <td> ${data[i].name}</td>
                    <td>${data[i].birthday}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].phone}</td>
                    <td class='edit_del'>  
                        <div>
                                <a class='edit' href="Edit-HV.html?id=${data[i].id}">
                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    Chỉnh sửa
                                </a>
                        </div>
                        <div class="space"></div>
                        <div>
                            <a class="delete" onclick="del(${data[i].id})">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                Xóa
                            </a>
                        </div>    
                    </td>
                </tr>
                <br/>`;
  }
  $("#table").html(content);
});
//delete users
function del(id, element) {
  // $.ajax({
  //   method: "DELETE",
  //   url: `http://vietnguyen.herokuapp.com/users/${ids}`,
  // }).done(function () {
  //   $(this).remove();
  //   // confirm("bạn có chắc muốn xóa không?");
  // });
  // location.href = "index.html";
  $(".modal").css("display", "flex");
  deleteId = id;
  deleteElement = $(element).parent().parent();
}

function realDelete() {
  $.ajax({
    method: "DELETE",
    url: `http://vietnguyen.herokuapp.com/users/${deleteId}`,
  }).done(() => {
    // Xóa thành công trên server thì xóa trên DOM
    deleteElement.remove();
    location.href = "index.html";
  });
  $(".modal").css("display", "none");
}

function cancelDelete() {
  $(".modal").css("display", "none");
}

function isValidData() {
  let isValid = true;

  const openDiv =
    '<div id="name-error" class="error text-danger font-weight-light font-italic mt-1">';
  const closeDiv = "</div>";

  $(".error").remove();

  const nameElement = $("#name");
  if (nameElement.val() === "") {
    isValid = false;
    nameElement.after(openDiv + "Họ tên không được để trống" + closeDiv);
  }

  const birthYearElement = $("#birthYear");
  const birthYear = birthYearElement.val();
  const birthYearRegex = /^\d{4}$/;

  if (birthYear !== "" && birthYearRegex.test(birthYear) === false) {
    isValid = false;
    birthYearElement.after(
      openDiv + "Năm sinh không đúng định dạng" + closeDiv
    );
  }

  const emailElement = $("#email");
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailRegex.test(emailElement.val()) === false) {
    isValid = false;
    emailElement.after(openDiv + "Email không đúng định dạng" + closeDiv);
  }

  const phoneElement = $("#phone");
  if (phoneElement.val() === "") {
    isValid = false;
    phoneElement.after(
      openDiv + "Số điện thoại không được để trống" + closeDiv
    );
  }

  return isValid;
}
