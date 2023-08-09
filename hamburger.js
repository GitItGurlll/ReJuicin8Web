const showItemsCheckbox = document.getElementById('showItemsCheckbox');
const hiddenItems = document.querySelectorAll('.hidden');

showItemsCheckbox.addEventListener('change', function() {
    console.log("Hi")
  if (this.checked) {
    hiddenItems.forEach(item => item.style.display = 'block');
  } else {
    hiddenItems.forEach(item => item.style.display = 'none');
  }
});