const createCsvWriter = require("csv-writer").createObjectCsvWriter;
// ... Your existing code ...
const { google } = require("googleapis");
const { tls, TLSSocket } = require("tls");
TLSSocket.setMaxListeners(20);
const credentials = require("../cred/actual-flow-data-7a129f577d25.json");
const sheets = google.sheets("v4");
const sheetsAuth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});
// Define a route for filtering and displaying data

async function getSheet(req, res) {
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  console.log(startDate, endDate);
  if (!req.session.isAuth) {
    req.session.unView = true;
    res.status(401).json({ message: "not auth", code: "401" });
    return;
  }
  if (!startDate || !endDate) {
    res.status(404).json({ message: "idiot" });
    return;
  }
  console;
  let dayes;
  let filteredData;
  let response;
  try {
    const authClient = await sheetsAuth.getClient().then();

    const spreadsheetId = "1hsL6wct24jLDx5iKs63mUsKZySB5Uj59jxMLcYs72RU";
    const range = "sheet1";
    response = await sheets.spreadsheets.values.get({
      auth: authClient,
      spreadsheetId,
      range,
    });
  } catch (error) {
    res.status(400).json({ message: "no internet connection", code: "400" });
    return;
  }

  dayes = req.session.dateData;
  const values = response.data.values;

  filteredData = values.filter((row) => {
    const rowDate = new Date(row[0]); // Assuming the date is in the first column
    const formattedRowDate = rowDate.toLocaleDateString("en-GB"); // Format the date to "day/month/year"

    const formattedStartDate = new Date(startDate).toLocaleDateString("en-GB");
    const formattedEndDate = new Date(endDate).toLocaleDateString("en-GB");

    return (
      formattedRowDate >= formattedStartDate &&
      formattedRowDate <= formattedEndDate
    );
  });

  if (!filteredData) {
    res.status(404).json({
      message: "the entered date dosent exist in the database",
      code: 404,
    });
  }
  req.session.dateData = {
    startDate,
    endDate,
  };
  res.status(200).json({ data: filteredData });
}
async function download(req, res) {
  const authClient = await sheetsAuth.getClient();

  const spreadsheetId = "1hsL6wct24jLDx5iKs63mUsKZySB5Uj59jxMLcYs72RU";
  const range = "sheet1";
  const response = await sheets.spreadsheets.values.get({
    auth: authClient,
    spreadsheetId,
    range,
  });
  const dayes = req.session.dateData;
  console.log(dayes);
  const values = response.data.values;

  // Filter the data based on the date
  const filteredData = values.filter((row) => {
    const rowDate = new Date(row[0]).toLocaleDateString("en-GB"); // Assuming the date is in the first column
    return (
      rowDate >= new Date(dayes.startDate).toLocaleDateString("en-GB") &&
      rowDate <= new Date(dayes.endDate).toLocaleDateString("en-GB")
    );
  });
  const formattedData = [];
  formattedData.push(["Date", "Real Time", "FlowRate"]); // Add column headers
  // Iterate through your filtered data and push each row as an array
  filteredData.forEach((row) => {
    formattedData.push([row[0], row[1], row[2]]); // Replace with your actual column values
  });

  const csvWriter = createCsvWriter({
    path: "output.csv",
    header: [
      { id: "Column1", title: "Date" },
      { id: "Column2", title: "Real Time" },
      { id: "Column3", title: "FlowRate" },
    ],
  });
  // Write the formatted data to the CSV file
  csvWriter.writeRecords(formattedData).then(() => {
    console.log("CSV file written successfully.");
  });

  res.setHeader("Content-disposition", "attachment; filename=filterd_Data.csv");
  res.set("Content-Type", "text/csv");
  console.log(res.send);
  res.status(200).send(formattedData.join("\n"));
  return;
}
function russel(req, res) {
  res.render("base/russel");
}
// ... Your existing code ...

module.exports = {
  getSheet: getSheet,
  download: download,
  russel: russel,
};
