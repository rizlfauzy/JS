const close = document.querySelectorAll('.close');
close.forEach((element) => {
  element.addEventListener('click',(e) => {
    // element.parentElement.parentElement.removeChild(element.parentElement);
    e.target.parentElement.style.display = 'none';
    // parameter e di function berfungsi sebagi objek
    // yang mengembalikan apa yang sedang dikerjakan
    // dan e.target mengembalikan element close
    
    // DOM Traversal ada beberapa yaitu
    // parentElement = mengembalikan element
    // parentNode = Mengembalikan node bisa berupa apa saja
    // nextSibling = mengembalikan node saudaranya dibawah
    // nextElementSibling = mengembalikan element saudarannya dibawah
    // previousSibling = mengembalikan node saudaranya diatas
    // previousElementSibling = mengembalikan element saudaranya diatas
  })
})