//1. Pilih tombol berdasarkan ID-nya
cons tombolSapa = documen.getElementById('sapaButton');
//2. Tambahkan 'event listener' untuk aksi 'click'
tombolSapa.addEventListener('click',function() {
  //3. Jalankan kode ini ketika tombol di click
  alert('Halo! Terima Kasih Sudah Berkunjung!');
});
