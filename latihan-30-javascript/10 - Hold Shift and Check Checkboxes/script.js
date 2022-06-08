const checkboxes = document.querySelectorAll(`input[type="checkbox"]`);
console.log(checkboxes);

let lastCheck;

checkboxes.forEach(checkbox => {
  checkbox.addEventListener(`click`, function (e) {
    
    let inBetween = false;

    if (e.shiftKey && this.checked) {
      checkboxes.forEach(checkbox => {
        if (checkbox === this || checkbox === lastCheck) {
          inBetween = !inBetween;
        }
        if (inBetween) {
          checkbox.checked = true;
          console.log(inBetween);
          console.log(checkbox);
          console.log(lastCheck);
          console.log(this);
        } 
      })
      
    }

    lastCheck = this;
  })
})