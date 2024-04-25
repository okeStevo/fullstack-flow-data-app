const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const { google } = require("googleapis");
const { tls, TLSSocket } = require("tls");
TLSSocket.setMaxListeners(20);
const credentials = require("../cred/actual-flow-data-7a129f577d25.json");
const sheets = google.sheets("v4");
const sheetsAuth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});
async function fetchData(startCol1, startCol2, endCol1, endCol2) {
  try {
    const authClient = await sheetsAuth.getClient().then();

    const range = "RUSLEFactors";
    // Change 'Sheet1' to your sheet name and adjust columns as needed
    console.log("still");
    const response = await sheets.spreadsheets.values.get({
      auth: authClient,
      spreadsheetId: "1D1BcUfyHKdiXNVXs4rzWAIVF7dGV56SEBzyRGzegiPY",
      range,
    });

    const rows = response.data.values;
    const filteredRows = rows.filter((row) => {
      const [col1, col2, col3, col4] = row;

      return (
        col2 >= startCol1 &&
        col3 <= startCol2 &&
        col2 >= endCol1 &&
        col3 <= endCol2
      );
    });
    console.log(filteredRows);
    return filteredRows;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

function russelGetDataFromjs(req, res) {
  const { longStart, latStart, longend, latEnd } = req.body;
  req.session.coordinates = [longStart, latStart, longend, latEnd];
  fetchData(longStart, latStart, longend, latEnd)
    .then((filteredRows) => {
      console.log(filteredRows);
      res.json({ data: filteredRows });
      filteredRows = null;
    })
    .catch((error) => {
      res.status(500).json({ error: "Error fetching data" });
    });
}
function russelGetRoutes(req, res) {
  res.render("base/russel");
}
async function russelDownload(req, res) {
  console.log(req.body);
  const authClient = await sheetsAuth.getClient();
  const spreadsheetId = "1D1BcUfyHKdiXNVXs4rzWAIVF7dGV56SEBzyRGzegiPY";
  const range = "RUSLEFactors";
  const response = await sheets.spreadsheets.values.get({
    auth: authClient,
    spreadsheetId,
    range,
  });

  let coordinates = req.session.coordinates
  if (!coordinates) {
    coordinates = [req.body[0], req.body[1], req.body[2], req.body[3]];
  }
  const values = response.data.values;
  // Filter the data based on the date
  const filteredRows = values.filter((row) => {
    const [col1, col2, col3, col4] = row;
    return (
      col2 >= coordinates[0] &&
      col3 <= coordinates[1] &&
      col2 >= coordinates[2] &&
      col3 <= coordinates[3]
    );
  });
  const formattedData = [];
  formattedData.push([
    "FID",
    "Longitude",
    "Latitude",
    "LS_factor",
    "C_factor_m",
    "Rainfall_E",
    "P_factor_m",
    "K_factor_m",
    "Rusle2_1",
  ]);
  filteredRows.forEach((row) => {
    formattedData.push([
      row[0],
      row[1],
      row[2],
      row[4],
      row[5],
      row[6],
      row[7],
      row[8],
    ]);
  });

  const csvWriter = createCsvWriter({
    path: "output.csv",
    header: [
      { id: "Column1", title: "FID" },
      { id: "Column2", title: "Longitude" },
      { id: "Column3", title: "Latitude" },
      { id: "Column4", title: "LS_factor" },
      { id: "Column5", title: "C_factor_m" },
      { id: "Column6", title: "Rainfall_E" },
      { id: "Column7", title: "P_factor_m" },
      { id: "Column8", title: "K_factor_m" },
      { id: "Column9", title: "Rusel2_1" },
    ],
  });
  // Write the formatted data to the CSV file
  csvWriter.writeRecords(formattedData).then(() => {});

  res.setHeader("Content-disposition", "attachment; filename=rusle.csv");
  res.set("Content-Type", "text/csv");
  res.status(200).send(formattedData.join("\n"));
  return;
}

module.exports = {
  russelGetDataFromjs: russelGetDataFromjs,
  russelGetRoutes: russelGetRoutes,
  russelDownload: russelDownload,
};
