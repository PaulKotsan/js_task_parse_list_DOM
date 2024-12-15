var r=document.querySelectorAll("ul > li"),e=document.querySelector("ul"),t=Array.from(r).sort(function(r,e){var t=parseFloat(r.dataset.salary.replace(/[^0-9]/g,""));return parseFloat(e.dataset.salary.replace(/[^0-9]/g,""))-t});t.map(function(r){return r.textContent.trim()}),e.innerHTML="",t.forEach(function(r){return e.appendChild(r)});
//# sourceMappingURL=index.347706a5.js.map
