// Auto-year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Projects data (static)
const projects = window.__PROJECTS__ || [];

function projectCard(p){
  const tags = (p.tech || []).map(t=>`<span class="chip">${t}</span>`).join("");
  const links = [
    p.links?.demo ? `<a href="${p.links.demo}" target="_blank">Live</a>` : "",
    p.links?.github ? `<a href="${p.links.github}" target="_blank">Code</a>` : ""
  ].filter(Boolean).join(" • ");
  return `<div class="card project-card reveal">
    <h3>${p.name}</h3>
    <p>${p.description}</p>
    <div class="chips" style="margin:.5rem 0 1rem">${tags}</div>
    ${links ? `<p>${links}</p>` : ""}
  </div>`;
}

const grid = document.getElementById("projectGrid");
if (grid) grid.innerHTML = projects.map(projectCard).join("");

// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target);} });
},{threshold:.15});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
