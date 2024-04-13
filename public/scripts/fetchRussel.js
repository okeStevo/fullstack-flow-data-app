const russ = document.querySelector(".container form");
console.dir(russ);
const csrfToken = russ.dataset.csrftoken
console.log(csrfToken)
russ.addEventListener("submit", async function (event) {
  event.preventDefault();
  const fd = new FormData(event.target);
  const data = Object.fromEntries(fd.entries());
  console.log(data);

  try {
    let e = await fetch(`/russelFetch?_csrf=${csrfToken}` , {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let d = await e.json();
    console.log(d);
    if (d.error) {
      console.log(d.error);
      alert(d.error);
      return;
    }
  } catch (o) {
    console.error("Error during download:", o);
  }
});
