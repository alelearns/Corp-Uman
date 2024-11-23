document.querySelectorAll('area').forEach(area => {
    area.addEventListener('mouseover', function() {
        const organName = this.alt;
        alert('Alege: ' + organName);
    });
});
