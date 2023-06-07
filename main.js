
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
var tienkw1 = 0;
var tienkw2 = 0;
var tienkw3 = 0;
var tienkw4 = 0;
var tienkw5 = 0;
function kwdau(sokw, giakw) {
    return sokw * giakw;
}
function kw50ke(sokw, giakw) {
    return (sokw - 50) * giakw;
}
function kw100ke(sokw, giakw) {
    return (sokw - 100) * giakw;
}
function kw150ke(sokw, giakw) {
    return (sokw - 200) * giakw;
}
function kwconlai(sokw, giakw) {
    return (sokw - 350) * giakw;
}
getEle("tinhTienDien").onclick = function () {
    var sokw = getEle("sokw").value * 1;
    var ten = getEle("ten").value;
    if (0 < sokw && sokw <= 50) {
        tienkw1 = kwdau(sokw, kwDau);
        var total = tienkw1;
        var result = "<p>Tên Khách hàng: " + ten + "</p>";
        result += "<p>Số tiền điện là: " + total + " đ</p>";
    } else if (50 < sokw && sokw <= 100) {
        tienkw1 = kwdau(sokw, kwDau);
        tienkw2 = kw50ke(sokw, kw50Ke);
        var total = tienkw1 + tienkw2;
        var result = "<p>Tên Khách hàng: " + ten + "</p>";
        result += "<p>Số tiền điện là: " + total + " đ</p>";
    } else if (100 < sokw && sokw <= 200) {
        tienkw1 = kwdau(sokw, kwDau);
        tienkw2 = kw50ke(sokw, kw50Ke);
        tienkw3 = kw100ke(sokw, kw100Ke);
        var total = tienkw1 + tienkw2 + tienkw3;
        var result = "<p>Tên Khách hàng: " + ten + "</p>";
        result += "<p>Số tiền điện là: " + total + " đ</p>";
    } else if (200 < sokw && sokw <= 350) {
        tienkw1 = kwdau(sokw, kwDau);
        tienkw2 = kw50ke(sokw, kw50Ke);
        tienkw3 = kw100ke(sokw, kw100Ke);
        tienkw4 = kw150ke(sokw, kw150Ke);
        var total = tienkw1 + tienkw2 + tienkw3 + tienkw4;
        var result = "<p>Tên Khách hàng: " + ten + "</p>";
        result += "<p>Số tiền điện là: " + total + " đ</p>";
    } else if (350 < sokw) {
        tienkw1 = kwdau(sokw, kwDau);
        tienkw2 = kw50ke(sokw, kw50Ke);
        tienkw3 = kw100ke(sokw, kw100Ke);
        tienkw4 = kw150ke(sokw, kw150Ke);
        tienkw5 = kwconlai(sokw, kwConLai);
        var total = tienkw1 + tienkw2 + tienkw3 + tienkw4 + tienkw5;
        var result = "<p>Tên Khách hàng: " + ten + "</p>";
        result += "<p>Số tiền điện là: " + total + " đ</p>";
    } else {
        alert("Quý khách vui lòng nhập đầy đủ thông tin!!!")
    }
    getEle("hienThiSoTienDien").innerHTML = result;
}


const den60 = 5 / 100;
const den120 = 10 / 100;
const den210 = 15 / 100;
const den384 = 20 / 100;
const den624 = 25 / 100;
const den960 = 30 / 100;
const denhet = 35 / 100;
var mucThue1=0;
var mucThue2=0;
var mucThue3=0;
var mucThue4=0;
var mucThue5=0;
var mucThue6=0;
var mucThue7=0;
var thueThuNhap=0;
function thueMuc1(thuNhapChiuThue,mucthue){
    return thuNhapChiuThue*mucthue;
}
function thueMuc2(thuNhapChiuThue,mucthue){
    return (thuNhapChiuThue-60000000)*mucthue;
}
function thueMuc3(thuNhapChiuThue,mucthue){
    return (thuNhapChiuThue-120000000)*mucthue;
}
function thueMuc4(thuNhapChiuThue,mucthue){
    return (thuNhapChiuThue-210000000)*mucthue;
}
function thueMuc5(thuNhapChiuThue,mucthue){
    return (thuNhapChiuThue-384000000)*mucthue;
}
function thueMuc6(thuNhapChiuThue,mucthue){
    return (thuNhapChiuThue-624000000)*mucthue;
}
function thueMuc7(thuNhapChiuThue,mucthue){
    return (thuNhapChiuThue-960000000)*mucthue;
}

getEle("tinhThueThuNhap").onclick = function () {
    var hoten = getEle("hoten").value;
    var tongThuNhapNam = getEle("tongThuNhapNam").value * 1;
    var nguoiPhuThuoc = getEle("nguoiPhuThuoc").value * 1;
    var thuNhapChiuThue = tongThuNhapNam - 4000000 - nguoiPhuThuoc * 1600000;
    // chuyển thành VNĐ
    var numberFormat=new Intl.NumberFormat("Vn-vn");
    if (0 < thuNhapChiuThue && thuNhapChiuThue <= 60000000) {
        mucThue1=thueMuc1(thuNhapChiuThue,den60);
        thueThuNhap = mucThue1;
        var xuatthue = "<p>Họ tên: " + hoten + " </p>";
        xuatthue += "<p>Thuế phải trả: " + numberFormat.format(thueThuNhap) + " Vnđ</p>";
    } else if (60000000 < thuNhapChiuThue && thuNhapChiuThue <= 120000000) {
        mucThue1=thueMuc1(thuNhapChiuThue,den60);
        mucThue2=thueMuc2(thuNhapChiuThue,den120);
         thueThuNhap = mucThue1+mucThue2;
        var xuatthue = "<p>Họ tên: " + hoten + " </p>";
        xuatthue += "<p>Thuế phải trả: " + numberFormat.format(thueThuNhap) + " Vnđ</p>";
    } else if (120000000 < thuNhapChiuThue && thuNhapChiuThue <= 2100000000) {
        mucThue1=thueMuc1(thuNhapChiuThue,den60);
        mucThue2=thueMuc2(thuNhapChiuThue,den120);
        mucThue3=thueMuc3(thuNhapChiuThue,den210);
         thueThuNhap = mucThue1+mucThue2+mucThue3;
        var xuatthue = "<p>Họ tên: " + hoten + " </p>";
        xuatthue += "<p>Thuế phải trả: " + numberFormat.format(thueThuNhap) + " Vnđ</p>";
    } else if (2100000000 < thuNhapChiuThue && thuNhapChiuThue <= 384000000) {
        mucThue1=thueMuc1(thuNhapChiuThue,den60);
        mucThue2=thueMuc2(thuNhapChiuThue,den120);
        mucThue3=thueMuc3(thuNhapChiuThue,den210);
        mucThue4=thueMuc4(thuNhapChiuThue,den384);
         thueThuNhap = mucThue1+mucThue2+mucThue3+mucThue4;
        var xuatthue = "<p>Họ tên: " + hoten + " </p>";
        xuatthue += "<p>Thuế phải trả: " + numberFormat.format(thueThuNhap) + " Vnđ</p>";
    } else if (384000000 < thuNhapChiuThue && thuNhapChiuThue <= 624000000) {
        mucThue1=thueMuc1(thuNhapChiuThue,den60);
        mucThue2=thueMuc2(thuNhapChiuThue,den120);
        mucThue3=thueMuc3(thuNhapChiuThue,den210);
        mucThue4=thueMuc4(thuNhapChiuThue,den384);
        mucThue5=thueMuc5(thuNhapChiuThue,den624);
         thueThuNhap = mucThue1+mucThue2+mucThue3+mucThue4+mucThue5;
        var xuatthue = "<p>Họ tên: " + hoten + " </p>";
        xuatthue += "<p>Thuế phải trả: " + numberFormat.format(thueThuNhap) + " Vnđ</p>";
    }else if(624000000<thuNhapChiuThue&&thuNhapChiuThue<=960000000){
        mucThue1=thueMuc1(thuNhapChiuThue,den60);
        mucThue2=thueMuc2(thuNhapChiuThue,den120);
        mucThue3=thueMuc3(thuNhapChiuThue,den210);
        mucThue4=thueMuc4(thuNhapChiuThue,den384);
        mucThue5=thueMuc5(thuNhapChiuThue,den624);
        mucThue6=thueMuc6(thuNhapChiuThue,den960);
        thueThuNhap = mucThue1+mucThue2+mucThue3+mucThue4+mucThue5+mucThue6;
        var xuatthue = "<p>Họ tên: " + hoten + " </p>";
        xuatthue += "<p>Thuế phải trả: " + numberFormat.format(thueThuNhap) + " Vnđ</p>";
    }else if(960000000<thuNhapChiuThue){
        mucThue1=thueMuc1(thuNhapChiuThue,den60);
        mucThue2=thueMuc2(thuNhapChiuThue,den120);
        mucThue3=thueMuc3(thuNhapChiuThue,den210);
        mucThue4=thueMuc4(thuNhapChiuThue,den384);
        mucThue5=thueMuc5(thuNhapChiuThue,den624);
        mucThue6=thueMuc6(thuNhapChiuThue,den960);
        mucThue7=thueMuc7(thuNhapChiuThue,denhet);
        thueThuNhap = mucThue1+mucThue2+mucThue3+mucThue4+mucThue5+mucThue6+mucThue7;
        var xuatthue = "<p>Họ tên: " + hoten + " </p>";
        xuatthue += "<p>Thuế phải trả: " + numberFormat.format(thueThuNhap)  + " Vnđ</p>";
    }else{
        alert("Vui lòng nhập đầy đủ thông tin!!!")
    }
    getEle("hienthithuethunhap").innerHTML=xuatthue;
}