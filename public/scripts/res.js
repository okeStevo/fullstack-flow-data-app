

function buildTable(data) {
    for (let i = 0; i < data.length; i++) {
      var row = `
      <tr>
      <td>
      ${data[i][0]}
      </td>
      <td class="dynamic">
                    ${data[i][1]}
                </td>
                <td>
                    ${data[i][2]}
                </td>
                </tr>
                `;
      tableHolder.innerHTML += row;
    }
  }