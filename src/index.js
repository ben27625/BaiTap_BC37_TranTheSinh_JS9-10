// 1, In ra table danh sách nhân viên

// 2, Thêm nhân viên mới

//  3, Tạo đối tượng  :
// + Tài khoản
// + Họ tên
// + Email
// + Mật khẩu
// + Ngày làm
// + Lương cơ bản
// + Chức vụ gồm: Giám đốc, Trưởng Phòng, Nhân Viên
// + Giờ làm trong tháng
// + Tổng lương
// + Loại nhân viên

// 4, Validation:
/**
 *  + Tài khoản tối đa 4 - 6 ký tự, không để trống
    + Tên nhân viên phải là chữ, không để trống
    + Email phải đúng định dạng, không để trống
    + mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không
    để trống
    + Ngày làm không để trống, định dạng mm/dd/yyyy
    + Lương cơ bản 1 000 000 - 20 000 000, không để trống
    + Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên)
    + Số giờ làm trong tháng 80 - 200 giờ, không để trống

 */

// 5, Xây dựng phương thức tính lương :
/**
 *  +nếu chức vụ là giám đốc: tổng lương = lương cơ bản * 3
    +nếu chức vụ là trưởng phòng: tổng lương = lương cơ bản * 2
    +nếu chức vụ là nhân viên: tổng lương = lương cơ bản *
 */

// 6, Xây dựng phương thức xếp loại cho đối tượng nhân viên

/**
 *  +nếu nhân viên có giờ làm trên 192h (>=192): nhân viên xuất sắc
    +nếu nhân viên có giờ làm trên 176h (>=176): nhân viên giỏi
    +nếu nhân viên có giờ làm trên 160h (>=160): nhân viên khá
    +nếu nhân viên có giờ làm dưới 160h: nhân viên trung bình

 */

// 7, Xóa nhân viên 

// 8, Cập nhật nhân viên ( có validation)

// 9, Tìm nhân viên theo loại và hiển thị .



/**
 * Start project
 * 
 * Write project product requirements document (PRD)
 * Design
 * Phân rã đối tượng 
 * UI => implement js
 * Testing
 * 
 */

var staffList = [];

function CreateStaff() {
   var isFormValid = validateForm();
   
   if (!isFormValid) return;
   // get input
   var staffId = document.getElementById("tknv").value;
   var fullName = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;
   var datepicker = document.getElementById("datepicker").value;
   var luongCB = document.getElementById("luongCB").value * 1;
   var chucvu = document.getElementById("chucvu").value;
   var gioLam = document.getElementById("gioLam").value * 1;
  
// new staff 
   var newStaff = new Staff(
      staffId,
      fullName,
      email,
      password,
      datepicker,
      luongCB,
      chucvu,
      gioLam,

   );
   console.log(newStaff);

   // push array 
   staffList.push(newStaff);

   // display staff 
   renderStaff();

   // save to local storage
      setStaff();


}


function validateForm() {
   // check form
   var staffId = document.getElementById("tknv").value;
   var fullName = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;
   var datepicker = document.getElementById("datepicker").value;
   var luongCB = document.getElementById("luongCB").value * 1;
   var chucvu = document.getElementById("chucvu").value;
   var gioLam = document.getElementById("gioLam").value * 1;

   var isValid = true;


   isValid &= 
   required(staffId, "tbTKNV") && length(staffId, "tbTKNV" , 4 , 6);

   isValid &= 
   required(fullName, "tbTen" ) &&  string(fullName, "tbTen");

   isValid &= 
   required(email,"tbEmail" ) && checkEmail(email, "tbEmail");

   isValid &= 
   required(password, "tbMatKhau") && checkPassword(password, "tbMatKhau");

   isValid &= 
   required(datepicker ,"tbNgay") && checkDate(datepicker,"tbNgay" );

   isValid &=
   required(luongCB, "tbLuongCB") && checkLuong(luongCB,"tbLuongCB" );

   isValid &= 
   required(chucvu, "tbChucVu") && checkPosition(chucvu,"tbChucVu");

   isValid &= 
   required(gioLam, "tbGiolam") && checkRegEx(gioLam, "tbGiolam", /^([89][0-9]|[1][0-9][0-9]|20[0-0])$/);

   document.getElementsByClassName("sp-thongbao").style.display = "block";
  


   return isValid;
}

// VALIDATION FORM



// Tài khoản tối đa 4 - 6 ký tự, không để trống
// required
function required(val, spanId) {
   if (val.length === 0) {
      document.getElementById(spanId).innerHTML = "*Trường hợp này bắt buộc";

      
      return false;

   }

   document.getElementById(spanId).innerHTML = "";
   return true;
}

// min , max length 

function length(val , spanId , min , max) {
   if (val.length < min || val.length > max) {
      document.getElementById(
         spanId
         ).innerHTML = `Độ dài phải từ ${min} tới ${max} kí tự`;
         return false;
   } 

   document.getElementById(spanId).innerHTML = "";
   return true;
}

// pattern check name 
// Tên nhân viên phải là chữ, không để trống
function string(val, spanId) {
   var pattern = /^[A-z]+$/;

   if (pattern.test(val)) {
      document.getElementById(spanId).innerHTML = "" ;
      return true;
   }

   document.getElementById(spanId).innerHTML = `Chỉ chấp nhận kí tự A tới z`;
   return false;
}



// mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không
// để trống

function checkPassword(val , spanId) {
    var pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,10}$/;

   if (pattern.test(val)) {
      document.getElementById(spanId).innerHTML = "" ;
      return true;
   }

   document.getElementById(spanId).innerHTML = `Chỉ chấp nhận kí tự A tới z`;
   return false;
}

// Email phải đúng định dạng, không để trống
function checkEmail(val, spanId) {
   var pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

   if (pattern.test(val)) {
      document.getElementById(spanId).innerHTML = "" ;
      return true;
   }

   document.getElementById(spanId).innerHTML = `Không đúng định dạng email`;
   return false;
}

// check datepicker
function checkDate(val, spanId) {
   var pattern = /^\d{2}\/\d{2}\/\d{4}$/;

   if (pattern.test(val)) {
      document.getElementById(spanId).innerHTML = "" ;
      return true;
   }

   document.getElementById(spanId).innerHTML = `Định dạng MM/DD/YY không hợp lệ`;
   return false;
}

// Lương cơ bản 1 000 000 - 20 000 000, không để trống

function checkLuong(val, spanId) {
   // var pattern = /^\d{2}\/\d{2}\/\d{4}$/; Regex number range 

   if (val >= 1000000 && val <= 20000000) {
      document.getElementById(spanId).innerHTML = "" ;
      return true;
   }

   document.getElementById(spanId).innerHTML = `Không hợp lệ`;
   return false;
}


//  Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên)
function checkPosition(val, spanId) {
   if (val === "Giám đốc" || val === "Nhân viên" || val === "Trưởng phòng") {
      document.getElementById(spanId).innerHTML = "" ;
      return true;
   }

   document.getElementById(spanId).innerHTML = `Chọn chức vụ không hợp lệ`;
   return false;
}

// Số giờ làm trong tháng 80 - 200 giờ, không để trống

function checkRegEx(val, spanId,regEx) {
  

   if (regEx.test(val)) {
      document.getElementById(spanId).innerHTML = "" ;
      return true;
   }

   document.getElementById(spanId).innerHTML = `Số giờ phải từ 80 đến 200 giờ`;
   return false;
}

function renderStaff(data) {
   if(!data) data = staffList;
   // log staffList
   var dataTable = "";

   for(var i = 0 ; i < data.length; i++) {
      var currentStaff = data[i];
      dataTable += `<tr>
      <th > ${currentStaff.staffId}</th>
      <th> ${currentStaff.fullName}</th>
      <th> ${currentStaff.email}</th>
      <th> ${currentStaff.datepicker}</th>
      <th> ${currentStaff.chucvu}</th>
      <th> ${currentStaff.caclSalary()}</th>
      <th> ${currentStaff.staffType()}</th>
    <th>
   
      
      <button onclick="deleteStaff('${
         currentStaff.staffId
       }')" class="btn btn-danger">Xoá</button>

       
      
       <button onclick="getUpdateStaff('${
         currentStaff.staffId
       }')" class="btn btn-info">Sửa</button>
      
     
       </th>
      
    </tr>`;
   }

   document.getElementById("tableDanhSach").innerHTML = dataTable;
}

// delete staff
function deleteStaff(staffId) {
   var index =  findById(staffId);
   if (index === -1) {
      return alert("Nhân viên không tồn tại");
   }

   staffList.splice(index, 1);
   
   // save local after delete
   setStaff();
   // reder display after delete
   renderStaff();
}


// finde staff

function findById(staffId) {
   for (var i = 0; i < staffList.length; i++) {
     
      if (staffList[i].staffId === staffId) {
        return i;
      }
    }
  
    return -1;
}

// save local storage
function setStaff() {
      // convert to JSON string
      var staffListJSON = JSON.stringify(staffList);
      
      localStorage.setItem("SL" , staffListJSON);
}

// get data from local storage  

function getStaffList() {
   var staffListJSON =  localStorage.getItem("SL");
   if(!staffListJSON) return;
   

   staffList = mapData(JSON.parse(staffListJSON));

   renderStaff();
}


// input: list local => new list

function mapData(dataLocal) {
   var result = [];
   for(var i = 0 ; i < dataLocal.length; i++) {
      var oldStaff =  dataLocal[i];
      var newStaff = new Staff(
         oldStaff.staffId,
         oldStaff.fullName,
         oldStaff.email,
         oldStaff.password,
         oldStaff.datepicker,
         oldStaff.luongCB,
         oldStaff.chucvu,
         oldStaff.gioLam

      );

      result.push(newStaff);


   }

   return result;
}

// staff search function
function searchStaff() {
   var keyword = document.querySelector("#searchName").value.toLowerCase().trim();
   console.log(keyword);
  var result = [];

  for (var i = 0; i < staffList.length; i++) {
    var type = staffList[i].staffType().toLowerCase();
   

    if (type === keyword  ) {
      result.push(staffList[i]);
    }
  }

  

  renderStaff(result);
}


window.onload =  function() {
   // run code when window is loaded
   getStaffList();
}


// update data on screen

function getUpdateStaff(staffId) {
   var index = findById(staffId);
 
   if (index === -1) return alert("Id ko tồn tại!");
 
   var staff = staffList[index];
 
   // đổ thông tin của staff lên input
   document.getElementById("tknv").value = staff.staffId;
   document.getElementById("name").value = staff.fullName;
   document.getElementById("email").value = staff.email;
   document.getElementById("password").value = staff.password;
   document.getElementById("datepicker").value = staff.datepicker;
   document.getElementById("luongCB").value = staff.luongCB;
   document.getElementById("chucvu").value = staff.chucvu;
   document.getElementById("gioLam").value = staff.gioLam;

   document.getElementById("btnThem").click();
  
   document.getElementById("tknv").disabled = true;
 
 }

 function updateStaff() {
   var staffId = document.getElementById("tknv").value;
   var fullName = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;
   var datepicker = document.getElementById("datepicker").value;
   var luongCB = document.getElementById("luongCB").value * 1;
   var chucvu = document.getElementById("chucvu").value;
   var gioLam = document.getElementById("gioLam").value * 1;

   var index = findById(staffId);

   var staff = staffList[index];

   staff.fullName = fullName;
   staff.email = email;
   staff.password = password;
   staff.datepicker = datepicker;
   staff.luongCB = luongCB;
   staff.chucvu = chucvu;
   staff.gioLam = gioLam;

   renderStaff();
  
   document.getElementById("tknv").disabled = false;

   document.getElementById("btnThem").click();
 }




