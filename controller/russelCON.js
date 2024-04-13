// const { google } = require("googleapis");
// const credentials = require("../cred/actual-flow-data-7a129f577d25.json"); // Your Google API credentials

// const sheets = google.sheets({ version: "v4", auth: credentials });

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
    console.log("still")
    const response = await sheets.spreadsheets.values.get({
      auth: authClient,
      spreadsheetId: "1D1BcUfyHKdiXNVXs4rzWAIVF7dGV56SEBzyRGzegiPY",
      range,
    });

    const rows = response.data.values;
    const filteredRows = rows.filter((row) => {
      const [col1, col2, col3, col4] = row;

      return (
        col2 >= startCol1 && col3 <= startCol2 && col2 >= endCol1 && col3 <= endCol2
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
  fetchData(longStart, latStart, longend, latEnd)
  .then((filteredRows) => {
    console.log(filteredRows);
      res.json({ data: filteredRows });
    })
    .catch((error) => {
      res.status(500).json({ error: "Error fetching data" });
    });
}
function russelGetRoutes(req, res) {
  res.render("base/russel");
}
module.exports = {
  russelGetDataFromjs: russelGetDataFromjs,
  russelGetRoutes: russelGetRoutes,
};
