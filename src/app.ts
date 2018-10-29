function App(config) {
  const api_service = api(config);
  const active_ss = SpreadsheetApp.getActiveSpreadsheet();

  const model = model(api_service, active_ss)
  return { model: model };
}
