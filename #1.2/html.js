function createField() {
	for(let y = 0; y < 4; ++y) {
		for(let x = 0; x < 4; ++x) {
			let cell = createCellNull();
			cell.y = y;
			cell.x = x;
			setCellOffset(cell);
			appendCell(cell);
		}
	}
}

