function toggleSubitems(itemId) {
    var subitems = document.getElementById(itemId);
    var item = document.getElementById(itemId).parentNode;
    item.classList.toggle('active');
}

function toggleBackgroundColor(checkbox) {
    var row = checkbox.closest('tr');
    if (checkbox.checked) {
        row.classList.add('checked');
    } else {
        row.classList.remove('checked');
    }
}
