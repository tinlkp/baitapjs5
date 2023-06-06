function getEle(id) {
    return document.getElementById(id);
}

document.getElementById("tinhTong3Mon").onclick = function () {
    var diemChuanHoiDong = getEle("diemChuanHoiDong").value * 1;
    var diemThi1 = getEle("diemThi1").value * 1;
    var diemThi2 = getEle("diemThi2").value * 1;
    var diemThi3 = getEle("diemThi3").value * 1;
    var khuVuc = getEle("khuVuc").value * 1;
    var doiTuong = getEle("doiTuong").value * 1;
    var tongDiem = diemThi1 + diemThi2 + diemThi3 + khuVuc + doiTuong;
    console.log(tongDiem);
    if (tongDiem < diemChuanHoiDong) {
        var result = "<p> Tổng điểm là: " + tongDiem + " </p>";
        result += "<p>Kết quả: Thí sinh trượt tuyển</p>";
        getEle("hienThiKetQuaThi").innerHTML = result;
    } else if (tongDiem >= diemChuanHoiDong) {
        var result = "<p> Tổng điểm là: " + tongDiem + " </p>";
        result += "<p>Kết quả: Thí sinh trúng tuyển</p>";
        getEle("hienThiKetQuaThi").innerHTML = result;
    } else {
        alert("Vui lòng cung cấp đầy đủ thông tin!!!");
    }
}
const kwDau = 500;
const kw50Ke = 650;
const kw100Ke = 850;
const kw150Ke = 1100;
const kwConLai = 1300;
getEle("tinhTienDien").onclick = function () {
    var sokw = getEle("sokw").value * 1;
    var ten = getEle("ten").value;
    if (0 < sokw && sokw <= 50) {
        var total = sokw * kwDau;
        var result = "<p>Tên Khách hàng: " + ten + "</p>";
        var result = "<p>Số tiền điện là: " + total + " đ</p>";
    } else if (50 < sokw && sokw <= 100) {
        var total = (sokw * kwDau) + (sokw - 50) * kw50Ke;
        var result = "<p>Tên Khách hàng: " + ten + "</p>";
        var result = "<p>Số tiền điện là: " + total + " đ</p>";
    } else if (100 < sokw && sokw <= 200) {
        var total = (50 * kwDau) + (50 * kw50Ke) + (sokw - 100) * kw100Ke;
        var result = "<p>Tên Khách hàng: " + ten + "</p>";
        var result = "<p>Số tiền điện là: " + total + " đ</p>";
    } else if (200 < sokw && sokw <= 350) {
        var total = (50 * kwDau) + (50 * kw50Ke) + (100 * kw100Ke) + (sokw - 200) * kw150Ke;
        var result = "<p>Tên Khách hàng: " + ten + "</p>";
        var result = "<p>Số tiền điện là: " + total + " đ</p>";
    } else if (350 < sokw) {
        var total = (50 * kwDau) + (50 * kw50Ke) + (100 * kw100Ke) + (150 * kw150Ke) + (sokw - 350) * kwConLai;
        var result = "<p>Tên Khách hàng: " + ten + "</p>";
        var result = "<p>Số tiền điện là: " + total + " đ</p>";
    } else {
        alert("Quý khách vui lòng nhập đầy đủ thông tin!!!")
    }
    getEle("hienThiSoTienDien").innerHTML = result;
}