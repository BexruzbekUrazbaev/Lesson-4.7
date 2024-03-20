const mevalar = ["olma", "banan", "gilos", "Shaftoli"]
let count = mevalar.length
alert("Boshlanishida arrayning uzunligi: " + count)

let result = confirm("Sizning arrayingizdan ma'lumotlarni olib tashlamoqchimiz")
if (result) {
    mevalar.pop()
    let count2 = mevalar.length
    alert("arrayning uzunligi: " + count2)
}else{
    let l = mevalar.length
    alert("Arrayning uzunligi: " + l)
}