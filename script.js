function insert_Row() {
    //Write your code here
  const table = document.querySelector("#sampleTable");
	const nRow = document.createElement("tr");
	const nCol = document.createElement("td");
	const nCol2 = document.createElement("td");

	nCol.textContent = `New Cell1`;
	nCol2.textContent = `New Cell2`;

	nRow.appendChild(nCol);
	nRow.appendChild(nCol2);
	table.insertBefore(nRow, table.firstChild);
}
