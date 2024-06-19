window.onload = function() {
    let selectedColor = '#FF0000';

    // Обробник вибору кольору
    document.querySelectorAll('.color').forEach(colorDiv => {
        colorDiv.addEventListener('click', function() {
            selectedColor = this.dataset.color;
        });
    });

    // Обробник замальовування області
    document.querySelectorAll('#drawingSVG [data-color]').forEach(area => {
        area.addEventListener('click', function() {
            this.style.fill = selectedColor;
        });
    });
}
