console.log("-------------------------------------------");
console.log("No. 2 Looping menggunakan for"); 
var ganjil = "Remote";
var genap = "Worker";
var faktor3 = "I Love RWID";
var delimiter = " - ";
for(var angka = 1; angka <= 20; angka++) {
  //validasi faktor kelipatan 3
    if((angka % 3 == 0) && (angka % 2 == 1))
    {
    console.log(angka, delimiter, faktor3);
    } else if(angka % 2 == 0) //validasi genap
        {
            console.log(angka, delimiter, genap);
        } else //validasi ganjil, gunakan else karena pasti tersisa hanya logic ganjil saja
        {
            console.log(angka, delimiter, ganjil);
        }
} 
