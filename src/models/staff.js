// Cấu trúc thư mục mỗi lớp đối tượng một file

function Staff(id, fullName, dob, email, password, workDay, salary, position, workHours, totalSalary, staffType) {
    this.staffId = id;
    this.fullName = fullName;
    this.dob = dob;
    this.email = email;
    this.password = password;
    this.workDay = workDay;
    this.salary = salary;
    this.position = position;
    this.workingHours = workHours;
    this.totalSalary = totalSalary;
   
    this.caclSalary = function() {
        return;
    }
    this.staffType = function() {
        return;
    }


}