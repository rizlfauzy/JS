// memakai ajax akan dipersingkat
// 
$.ajax({
  url: `data/siswa.json`,
  success: (results) => {
    console.table(results);
  },
  error: function (e) {
    console.log(e.responseText);
  }
})