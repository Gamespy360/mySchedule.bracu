document.addEventListener('DOMContentLoaded', function () {
    const table = document.querySelector('table');
    if (!table) return;
    const rows = table.rows;
    const d = new Date();
    let day = d.getDay();
    console.log(day);
    for (let rowIndex = 1; rowIndex < rows.length; rowIndex++) {
        
        
        for (let cellIndex = 1; cellIndex < rows[rowIndex].cells.length; cellIndex++) {
            let count=cellIndex-1;
            let cell = rows[rowIndex].cells[cellIndex];
            if (day === count) {
                console.log(count);
                for (let r = 1; r < rows.length; r++) {
                    if (rows[r].cells[cellIndex]) {
                        rows[r].cells[cellIndex].classList.add('col-shadow');
                    }
                }
            }

        }
    }
});
