// Cấu trúc thư mục mỗi lớp đối tượng một file

function Staff(id, fullName, email, password, datepicker, luongCB, chucvu, gioLam) {
    this.staffId = id;
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.datepicker = datepicker;
    this.luongCB = luongCB;
    this.chucvu = chucvu;
    this.gioLam = gioLam;
    this.caclSalary = function() {
        if(this.chucvu === "Sếp") {
            return this.luongCB * 3;
        } else if(this.chucvu === "Trưởng phòng") {
            return this.luongCB * 2;
        } else if (this.chucvu === "Nhân viên") {
            return this.luongCB;
        } else { return;}
    };
    this.staffType = function() {
        if(this.gioLam >= 192) {
            return "Xuất sắc";
        } else if(this.gioLam < 192 && this.gioLam >= 176) {
            return "Giỏi";
        } else if(this.gioLam < 176 && this.gioLam >= 160) {
            return "Khá";
        }
        else if(this.gioLam < 160 && this.gioLam >= 0) {
            return "Trung Bình"; 
        }
    }
}