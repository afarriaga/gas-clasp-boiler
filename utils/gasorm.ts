function GasOrm(spreadsheet?) {
  const ss = spreadsheet || SpreadsheetApp.getActiveSpreadsheet();

  function create_sheet(name: string) {
    if (ss.getSheetByName(name)) return;
    ss.insertSheet(name);
  }

  function remove_sheet(name: string) {
    if (ss.getSheetByName(name)) {
      ss.deleteSheet(name);
    }
  }

  function create_table(data: Array<object>, sheet_name: string) {
    const headings = Object.keys(data[0]);
    const rows = data.map(item => headings.map(h => item[h]));
    const contents = [headings].concat(rows);
    ss.getSheetByName(sheet_name)
      .getRange(1, 1, contents.length, headings.length)
      .setValues(contents);
  }

  return {
    create_sheet,
    remove_sheet,
    create_table
  };
}
