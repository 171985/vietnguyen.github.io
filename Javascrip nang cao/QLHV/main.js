$.ajax({
  method: "GET",
  url: "http://vietnguyen.herokuapp.com/users",
})
.done(function (data) {
    let content = `<caption class='add_hv'>
                    <button class='add_hv-button'>
                        <a class='add_hv-link' href="info.html">
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
                            <button class="edit">
                                <a class='edit'>
                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    Chỉnh sửa
                                </a>
                            </button>
                        </div>
                        <div class="space"></div>
                        <div>
                            <button class="delete" onclick='del'>
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                Xóa
                            </button>
                        </div>    
                    </td>
                </tr>
                <br/>`;
    }
    $("#table").html(content);

    //delete users
    $('.delete').on('click',function(){
        $.ajax({
            method: "DELETE",
            url: "http://vietnguyen.herokuapp.com/users",
            data: {
                
            }
          })
        $('table tr').on("click", function(){
            $(this).remove();
        });
    })
});




