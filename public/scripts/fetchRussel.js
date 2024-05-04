const russ=document.querySelector(".container form"),tableHolder=document.querySelector(".tableholder"),downloadButton=document.querySelector(".downloadButton"),loading=document.querySelector(".loading"),csrfToken=russ.dataset.csrftoken,inputValues=document.querySelectorAll(".sea-blue");function buildTable(e){for(let t=0;t<e.length;t++){var r=`
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
              `;return tableHolder.innerHTML+=r}downloadButton.style.display="block"}async function handleDownloadClick(){let e=[inputValues[0].value,inputValues[1].value,inputValues[2].value,inputValues[3].value];try{let t=await fetch(`/russelDownload/?_csrf=${csrfToken}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(t.ok){let r=await t.blob(),l=window.URL.createObjectURL(r),o=document.createElement("a");o.href=l,o.setAttribute("download","filtered_data.csv"),o.click(),window.URL.revokeObjectURL(l)}else console.error("Download request failed:",t.statusText)}catch(n){console.error("Error during download:",n)}}console.log(inputValues[1].value),console.log(csrfToken),russ.addEventListener("submit",async function(e){e.preventDefault();let t=new FormData(e.target),r=Object.fromEntries(t.entries());console.log(r);try{loading.innerHTML='<i class="fa-solid fa-spinner fa-spin-pulse fa-2xl" style="color: rgb(0,0,0);"></i>';let l=await fetch(`/russelFetch?_csrf=${csrfToken}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});loading.innerHTML="Success";let o=await l.json();if(o.error){console.log(o.error),alert(o.error);return}let n=o.data,a=function e(t,r){let l=[];for(let o=0;o<t.length;o+=r)l.push(t.slice(o,o+r));return l}(n,50);buildTable(a)}catch(d){console.error("Error during download:",d)}}),downloadButton.addEventListener("click",handleDownloadClick);