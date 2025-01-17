const russ = document.querySelector(".container form");
const tableHolder = document.querySelector(".tableholder");
const downloadButton = document.querySelector(".downloadButton");
const loading = document.querySelector(".loading");
const csrfToken = russ.dataset.csrftoken;
const inputValues = document.querySelectorAll(".sea-blue");
console.log(inputValues[1].value);
console.log(csrfToken);

function buildTable(e) {
  for (let t = 0; t < e.length; t++) {
    var n = `
    <tr>
    <td>
    ${e[t][0]}
    </td>
    <td class="dynamic">
                  ${e[t][1]}
              </td>
              <td>
                  ${e[t][2]}
              </td>
              <td>
              ${e[t][3]}
              </td>
              <td>
              ${e[t][4]}
              </td>
              <td>
              ${e[t][5]}
              </td>
              <td>
              ${e[t][6]}
              </td>
              <td>
              ${e[t][7]}
              </td>
              <td>
              ${e[t][8]}
              </td>
              </tr>
              `;
    return (tableHolder.innerHTML += n);
  }
  downloadButton.style.display = "block";
}

russ.addEventListener("submit", async function (event) {
  event.preventDefault();
  const fd = new FormData(event.target);
  const data = Object.fromEntries(fd.entries());
  console.log(data);

  try {
    loading.innerHTML =
      '<i class="fa-solid fa-spinner fa-spin-pulse fa-2xl" style="color: rgb(0,0,0);"></i>';

    let e = await fetch(`/russelFetch?_csrf=${csrfToken}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    loading.innerHTML  ="Success"
    let d = await e.json();
    if (d.error) {
      console.log(d.error);
      alert(d.error);
      return;
    }
    const dataFrom = d.data;
    function chunkArray(array, size) {
      const chunks = [];
      for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
      }
      return chunks;
    }
    const result = chunkArray(dataFrom, 50);
    buildTable(result);
  } catch (o) {
    console.error("Error during download:", o);
  }
});

downloadButton.addEventListener("click", handleDownloadClick);
async function handleDownloadClick() {
  const values = [
    inputValues[0].value,
    inputValues[1].value,
    inputValues[2].value,
    inputValues[3].value
  ];
  try {
    let e = await fetch(`/russelDownload/?_csrf=${csrfToken}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (e.ok) {
      let t = await e.blob(),
        n = window.URL.createObjectURL(t),
        l = document.createElement("a");
      (l.href = n),
        l.setAttribute("download", "filtered_data.csv"),
        l.click(),
        window.URL.revokeObjectURL(n);
    } else console.error("Download request failed:", e.statusText);
  } catch (o) {
    console.error("Error during download:", o);
  }
}
