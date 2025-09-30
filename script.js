function insert_Row() {
  const table = document.querySelector("#sampleTable");

  // Insert a new row at the top (index 0)
  const newRow = table.insertRow(0);

  // Insert two new cells
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  // Set their text content
  cell1.textContent = "New Cell1";
  cell2.textContent = "New Cell2";
}
