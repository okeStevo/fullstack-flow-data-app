const { google } = require('googleapis');
const auth = require('../cred/actual-flow-data-7a129f577d25.json'); // Your Google API credentials

const app = express();
const port = 3000;

const sheets = google.sheets({ version: 'v4', auth });

async function fetchData(startCol1, startCol2, endCol1, endCol2) {
  try {
    const range = 'Sheet1!A2:D'; // Change 'Sheet1' to your sheet name and adjust columns as needed

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: 'YOUR_SPREADSHEET_ID',
      range,
    });

    const rows = response.data.values;

    const filteredRows = rows.filter(row => {
      const [col1, col2, col3, col4] = row;
      return (col1 === startCol1 && col2 === startCol2 && col3 === endCol1 && col4 === endCol2);
    });

    return filteredRows;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

app.get('/api/filter', (req, res) => {
  const { startCol1, startCol2, endCol1, endCol2 } = req.query;

  fetchData(startCol1, startCol2, endCol1, endCol2)
    .then(filteredRows => {
      res.json({ data: filteredRows });
    })
    .catch(error => {
      res.status(500).json({ error: 'Error fetching data' });
    });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
