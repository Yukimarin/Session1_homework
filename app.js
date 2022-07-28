// Câu 1: Trong Javascript, trong trường hợp nào khi bạn đặt tên biến thì sẽ bị thông báo SyntaxError ? Cho 3 ví dụ về việc đặt tên biến sai trong Javascript?
// Đặt tên biến sẽ bị thông báo SyntaxError khi: 
// - Bắt đầu bằng số: 23Bach
// - Chứa ký tự đặc biệt (ngoại trừ _ và $): ^Bach
// - Chứa keyworld của javascript: nullBach

// Câu 2: Trong Javascript làm thế nào để kiểm tra kiểu dữ liệu?
// console.log(typeof 42);
// // expected output: "number"

// Câu 3: Có bao nhiêu kiểu dữ liệu cơ bản trong Javascript, kể tên?
// Có tất cả 7 kiểu dữ liệu: String (chuỗi), Number (Số), Boolean (True/False), Null, Undefined, Object (Đối tượng), Array (mảng)

// // Bài 2
// let msg = "Rikkei is awesome";
// let studentCount = 0;
// console.log(msg);
// console.log(studentCount);

// // Bài 3
// let msg = "Coding is hard but super cool and fun";
// let studentCount = 30;
// console.log(msg);
// console.log(studentCount);
// let upper = msg.toUpperCase();
// console.log(upper);
// let lower = msg.toLowerCase();
// console.log(lower);
// let username =prompt('Nhập vào số bất kỳ');
// let tong = Number(studentCount) + Number(username);
// console.log(tong);

// // Bài 4
// alert("You look beautiful today");

// // Bài 5
// let username =prompt('Hi there, your name please?');
// alert("Hi " + username);

// // Bài 6
// let firstName =prompt('Enter your first name');
// let lastname =prompt('Enter your last name');
// alert(`Hi ${lastname} ${firstName}`);

// // Bài 7
// let canh =prompt('Enter side length of the square');
// let dientich = Number(canh)*Number(canh);
// alert(`The square area is ${dientich}`);

// // Bài 8
// let bankinh =prompt('Enter the radius of the circle');
// let pi = Math.PI;
// let dientich = Number(bankinh)*Number(bankinh)*pi;
// alert(`The circle area is ${dientich}`);

// // Bài 9
// let cTemp =prompt('Enter the temperature in Celcius');
// let convert = Number((9*cTemp+(32*5))/5);
// alert(`${cTemp} (C) = ${convert} (F)`);

// // Bài 10
// alert (`The quick ___ fox jumps over the ___ dog`);
// let first =prompt('Điền từ đầu tiên bị thiếu');
// let second =prompt('Điền từ thứ hai bị thiếu');
// alert (`The quick ${first} fox jumps over the ${second} dog`);

// // Bài 11
//// Một hình chữ nhật có chiều dài và rộng bất kỳ
// function demo (){
//     for (var count = 0; count < 2; count++) {
//         forward(100);
//         right(90);
//         forward(50);
//         right(90);
//          }
//       }
// // Một hình vuông có chiều dài cạnh bất kỳ
// function demo (){
//     for (var count = 0; count < 4; count++) {
//       forward(100);
//       right(90);
//        }
//     }
// //  Một hình tròn
// function demo (){
//     for (var count = 0; count < 360; count++) {
//        forward(1);
//        right(1);
//       }
//     }
// //Một hình tam giác đều
// function demo (){
//     for (var count = 0; count < 3; count++) {
//         forward(100);
//         right(120);
//        }
//     }
////Một tam giác cân
// function demo (){
// forward(100);
// right(150);
// forward(100);
// right(105);
// forward(50);
 // }
// //Một hình thang
// function demo (){
//     forward(111.8);
//     right(45);
//     forward(100);
//     right(45);
//     forward(111.8);
//     right(135);
//     forward(250);
//         }
