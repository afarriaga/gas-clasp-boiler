interface ExternalConfig {
  bar: string;
}

function init(externals: ExternalConfig) {
  const app = App(config(externals));
  const gasorm = GasOrm();

  Object.keys(app).forEach(key => {
    const table_name = `fetched_${key}`;
    gasorm.create_sheet(table_name);
    gasorm.create_table(app[key], table_name);
  });
}

init({ bar: "bar" });
