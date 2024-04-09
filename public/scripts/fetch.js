const formPart = document.getElementById("formPart"),
  start = document.getElementById("start"),
  end = document.getElementById("end"),
  csrfToken = document.getElementById("csrf").dataset.csrftoken,
  tableHolder = document.getElementById("row"),
  dialogElem = document.getElementById("dialog"),
  showBtn = document.querySelector(".show"),
  closeBtn = document.querySelector(".close"),
  downloadButton = document.querySelector(".downloadButton");
downloadButton.style.display = "none";
let fetchState = !1;
const loading = document.getElementById("loading");
function callModal(e) {
  return (dialogElem.children[0].innerHTML = e), dialogElem.showModal();
}
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
async function handleDownloadClick() {
  try {
    let e = await fetch("/download", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
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
closeBtn.addEventListener("click", () => {
  dialogElem.close();
}),
  formPart.addEventListener("submit", async function (e) {
    e.preventDefault(), tableHolder.innerHTML && (tableHolder.innerHTML = null);
    let t = start.value,
      n = end.value;
    if (!n || !t) {
      callModal("the dates values are empty");
      return;
    }
    let l;
    try {
      (loading.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin-pulse fa-2xl" style="color: rgb(0,0,0);"></i>'),
        (l = fetch(`/sheet?limit=100&_csrf=${csrfToken}`, {
          method: "POST",
          body: JSON.stringify({ startDate: t, endDate: n }),
          headers: { "content-type": "application/json" },
        })
          .then((e) => e.json())
          .then(function (e) {
            if (
              ((loading.innerHTML =
                '<i class="fa-solid fa-thumbs-up fa-2xl fa-fade"></i>'),
              setTimeout(function () {
                loading.innerHTML = "";
              }, 5e3),
              console.log(e),
              "401" === e.code)
            ) {
              callModal(
                'you are not authenticated you must sign in to view this page <a href="/login">login</a>'
              );
              return;
            }
            if ("400" === e.code) {
              callModal("error in fetching - no internet connection");
              return;
            }
            if (e.data && e.data.length > 0) {
              let t = e.data;
              return buildTable(
                (function e(t, n) {
                  let l = [],
                    o = 0;
                  for (; o < t.length; ) l.push(t.slice(o, o + n)), (o += n);
                  return console.log(l.length), l[1];
                })(t, 40)
              );
            }
          }));
    } catch (o) {
      alert("error fetching data");
      return;
    }
    fetchState = !1;
  }),
  fetchState && (tableHolder.textContent = "couldnt fetch"),
  downloadButton.addEventListener("click", handleDownloadClick);
