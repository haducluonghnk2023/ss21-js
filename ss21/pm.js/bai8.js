function calculateBMI(){ 
    let weight = parseFloat(prompt("Nhập cân nặng"));
    let height = parseFloat(prompt("Nhập chiều cao"));
    let BMI = weight / (height ** 2);
    let classification;
    if (BMI < 18.5) {
        classification = "Gầy";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        classification = "Bình thường";
    } else if (BMI >= 25 ) {
        classification = "Thừa cân";
    
    }else if (BMI >= 30 && BMI <= 34.9) {
        classification = "Tiền béo phì";
    } 
    else if (BMI >= 30 && BMI <= 34.9) {
        classification = "Tiền béo phì";
    } 
    else if (BMI >= 35 && BMI <= 39.9) {
        classification = "Béo phì độ I";
    } else if (BMI >= 40) {
        classification = "Béo phì độ III";
    }
    console.log("Chỉ số BMI của bạn là:", BMI.toFixed(2));
    console.log("Phân loại BMI:", classification);
}
