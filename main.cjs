const son1 = +prompt("Birinchi soni kriting:")
const son2 = +prompt("Ikinchi soni kriting:")
const javob1 = son1 + son2 
const javob2 = son1 - son2 
const javob3 = son1 * son2 
const javob4 = son1 / son2 
const amal = +prompt(`
Amalni tanlang 
1.qo'shish.
2.ayirish.
3.ko'paytirish.
4.bolish.
Amalni Tanlang: (1/2/3/4):
`)
if(amal == 1){
    console.log(`${son1} + ${son2} = ${javob1}`)
}else if(amal == 2){
    console.log(`${son1} - ${son2} = ${javob2}`)
}else if(amal == 3){
    console.log(`${son1} * ${son2} = ${javob3}`)
}else if(amal == 4){
    console.log(`${son1} / ${son2} = ${javob4}`)
}else{
    console.log(`Siz noto'g'ri raqam kritis. siz 1 yoki 2 yoki 3 yoki 4 soni yozish kerak edi. Siz ${amal} soni kiritingiz.`)
}