const russ = document.querySelector(".container form");
console.dir(russ);
const csrfToken = russ.dataset.csrftoken;
console.log(csrfToken);

function buildTable(e) {
  loading.style.display = "block";
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
              </tr>
              `;
    tableHolder.innerHTML += n;
  }
  downloadButton.style.display = "block";
}

russ.addEventListener("submit", async function (event) {
  event.preventDefault();
  const fd = new FormData(event.target);
  const data = Object.fromEntries(fd.entries());
  console.log(data);

  try {
    let e = await fetch(`/russelFetch?_csrf=${csrfToken}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
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
    const result = chunkArray(dataFrom, 100);
    console.log(result[0]);
    buildTable(result);
  } catch (o) {
    console.error("Error during download:", o);
  }
});
