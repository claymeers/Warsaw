const filterList = document.querySelectorAll('.filter li');

filterList.forEach(item => {
  item.addEventListener('click', () => {
    filterList.forEach(elem => elem.classList.remove('active'));
    item.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
    var listItems = document.querySelectorAll('.list');
    var boxes = document.querySelectorAll('.box');

    listItems.forEach(function(item) {
        item.addEventListener('click', function() {
        var value = this.getAttribute('data-filter');

        if (value === 'all') {
            boxes.forEach(function(box) {
            box.style.display = 'block';
            });
        } else {
            boxes.forEach(function(box) {
            if (!box.classList.contains(value)) {
                box.style.display = 'none';
            } else {
                box.style.display = 'block';
            }
            });
        }
        });
    });
});

// Scroll bar
let scrollPercentage = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    scrollProgress.style.background = `conic-gradient(#e2d30c ${scrollValue}%, #2b2f38 ${scrollValue}%)`;
    progressValue.textContent = `${scrollValue}%`;
};

window.addEventListener('scroll', scrollPercentage);
window.addEventListener('load', scrollPercentage);
   