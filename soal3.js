let validNilai = (nilaiAwal, nilaiAkhir,dataArray) => {
  if (typeof nilaiAwal !== "number" || typeof nilaiAkhir !== "number")
    throw "Nilai harus berupa angka";

  if (nilaiAwal >= nilaiAkhir)
    throw "Nilai akhir harus lebih besar dari nilai awal";

  if (dataArray.length <= 5)
    throw "Jumlah angka dalam dataArray harus lebih dari 5";
};
let seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray, callback) => {
  
  try {
    validNilai(nilaiAwal, nilaiAkhir,dataArray);
    if (typeof nilaiAwal !== "number" || typeof nilaiAkhir !== "number")
      throw "Nilai harus berupa angka";

    if (nilaiAwal >= nilaiAkhir)
      throw "Nilai akhir harus lebih besar dari nilai awal";

    if (dataArray.length <= 5)
      throw "Jumlah angka dalam dataArray harus lebih dari 5";

    let hasilSeleksi = dataArray.filter(
      (nilai) => nilai > nilaiAwal && nilai < nilaiAkhir
    );
    if (hasilSeleksi.length == 0) throw "Nilai tidak ditemukan";

    hasilSeleksi.sort((a, b) => a - b);

    callback(hasilSeleksi);
  } catch (err) {
    console.log(err);
  }
};

function callback(result) {
  console.log(result);
}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8], callback);
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8], callback);
seleksiNilai(5, 17, [2, 25, 4], callback);
seleksiNilai(5, 17, [2, 25, 4, 1, 31, 18], callback);
seleksiNilai("5", 20, [2, 25, 4, 14, 17, 30, 8], callback);
seleksiNilai(5, "20", [2, 25, 4, 14, 17, 30, 8], callback);
