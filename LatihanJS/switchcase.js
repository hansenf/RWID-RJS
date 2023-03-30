//Jawaban No 1
//Input:
var hari = 21; 
var bulan = 1; 
var tahun = 1945;

//Validasi Skeleton Code
var hariNew = (0 > hari <= 31) ? hari : false;  
var bulanNew = (0 > bulan <= 12) ? bulan : false;  
var tahunNew = (1900 >= tahun <= 2200) ? tahun : false;  

//Konversi bulan ke bulanString
function bulanString (x) {
  switch(bulanNew) {
    case 1:   { bulan = "Januari"; break; }
    case 2:   { bulan = "Ferbuari"; break; }
    case 3:   { bulan = "Maret"; break; }
    case 4:   { bulan = "April"; break; }
    case 5:   { bulan = "Mei"; break; }
    case 6:   { bulan = "Juni"; break; }
    case 7:   { bulan = "Juli"; break; }
    case 8:   { bulan = "Agustus"; break; }
    case 9:   { bulan = "September"; break; }
    case 10:  { bulan = "Oktober"; break; }
    case 11:  { bulan = "November"; break; }
    case 12:  { bulan = "Desember"; break; }
    default:  { console.log('Invalid move'); }}
}
//Konversi ke string
var bulanSabit = bulanString(bulanNew);

//  Maka hasil yang akan tampil di console adalah: '21 Januari 1945'; 
console.log(hariNew, bulan, tahunNew)
