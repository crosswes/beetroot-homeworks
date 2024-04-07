function tableSort() {
  const DOMTable = document.getElementById('js-table');
  if (DOMTable) {
    DOMTable.addEventListener('click', (event) => {
      if (event.target.tagName !== 'TH') return;
      let columnIndex = Array.from(event.target.parentNode.children).indexOf(
        event.target
      );
      let rows = Array.from(DOMTable.rows).slice(1);
      rows.sort((rowA, rowB) => {
        let cellA = rowA.cells[columnIndex].innerText;
        let cellB = rowB.cells[columnIndex].innerText;
        if (!isNaN(cellA) && !isNaN(cellB)) {
          return Number(cellA) - Number(cellB);
        } else {
          return cellA.localeCompare(cellB);
        }
      });
      rows.forEach((row) => DOMTable.appendChild(row));
    });
  }
}

tableSort();

// thanks gpt for the help
