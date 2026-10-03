/* ================= EDIT YOUR ORGANISATION DETAILS HERE ================= */
const C = {
  name: "Udaan Foundation",
  regLine: "Registered Charitable Trust · Est. 2014",          // add your real registration line
  heroTitle: "Every child deserves a chance to rise",
  heroSub: "We provide education, healthcare and livelihood support to families in need. Join us and turn compassion into lasting change.",
  about: "Udaan Foundation is a community-driven trust working across rural and semi-urban areas. Since 2014, we have partnered with schools, local doctors and volunteers to reach the families who need support the most.",
  mission: "To empower underprivileged children, women and families through quality education, accessible healthcare and sustainable livelihoods.",
  vision: "A society where every person, regardless of background, has the opportunity to learn, stay healthy and live with dignity.",
  values: [["Transparency","Every rupee is accounted for and reported."],["Dignity","We serve with respect, never pity."],["Community","Local people lead our programs."],["Impact","We measure results, not just activity."]],
  impact: [[12500,"+","Lives touched"],[48,"","Villages reached"],[320,"+","Active volunteers"],[9,"","Years of service"]],
  whatsapp: "919999999999",           // country code + number, no + or spaces
  phone: "+91 99999 99999",
  email: "contact@yourngo.org",
  address: "Main Road, Your City, West Bengal 736101",
  hours: "Mon – Sat, 10:00 AM – 5:00 PM",
  mapQuery: "Your NGO address",
  socials: [{label:"Facebook",url:"https://facebook.com/yourpage"},{label:"Instagram",url:"https://instagram.com/yourpage"},{label:"YouTube",url:"https://youtube.com/@yourpage"}],
  donation: {
    intro: "Your contribution funds school kits, medical camps and skill training. Choose an amount or enter your own.",
    amounts: [500, 1000, 2500, 5000],
    upiId: "yourngo@upi",
    bank: [["Account name","Udaan Foundation"],["Bank","Your Bank Name"],["Account no.","XXXXXXXXXXXX"],["IFSC","XXXX0000000"],["UPI ID","yourngo@upi"]],
    taxNote: "[Add your 80G / 12A registration number and tax-benefit details here.]",
    usage: [["Education",45],["Healthcare",30],["Livelihood",15],["Admin",10]]     // label, percent
  },
  projects: [
    {title:"Shiksha: School Support", icon:"📚", img:"project-1.jpg", desc:"School kits, tuition support and scholarships for first-generation learners.", raised:240000, goal:400000},
    {title:"Swasthya: Health Camps", icon:"🩺", img:"project-2.jpg", desc:"Free medical checkups and medicines in remote villages.", raised:150000, goal:250000},
    {title:"Nari Shakti: Women Livelihood", icon:"🧵", img:"project-3.jpg", desc:"Tailoring and craft training with micro-business support.", raised:90000, goal:300000},
    {title:"Hariyali: Green Drive", icon:"🌳", img:"project-4.jpg", desc:"Tree plantation and awareness drives with local schools.", raised:60000, goal:100000}
  ],
  events: [
    {date:"2026-11-14", title:"Children's Day Carnival", place:"Community Hall, Your City", note:"Games, books and gifts for 300 children."},
    {date:"2026-11-29", title:"Free Health Camp", place:"Village Primary School", note:"Eye, dental and general checkups."},
    {date:"2026-12-20", title:"Winter Blanket Drive", place:"Starts from NGO office", note:"Volunteers needed to distribute blankets."},
    {date:"2027-01-26", title:"Annual Fundraiser Dinner", place:"Your City Club", note:"An evening of music and giving."}
  ],
  gallery: [   // files in assets/images/ ; missing ones show a coloured tile
    {img:"gallery-1.jpg", cap:"Classroom session", icon:"🏫", h:220},
    {img:"gallery-2.jpg", cap:"Health camp", icon:"🩺", h:160},
    {img:"gallery-3.jpg", cap:"Tree plantation", icon:"🌱", h:200},
    {img:"gallery-4.jpg", cap:"Volunteer day", icon:"🤝", h:170},
    {img:"gallery-5.jpg", cap:"Food distribution", icon:"🍲", h:210},
    {img:"gallery-6.jpg", cap:"Tailoring training", icon:"🧵", h:160},
    {img:"gallery-7.jpg", cap:"School kits handover", icon:"🎒", h:190},
    {img:"gallery-8.jpg", cap:"Annual meet", icon:"🎉", h:170}
  ],
  stories: [
    {name:"Riya, 14", icon:"🎓", img:"story-1.jpg", text:"I used to skip school to help at home. With the scholarship and books, I now top my class and want to be a teacher.", tag:"Shiksha program"},
    {name:"Sunita Devi", icon:"🧵", img:"story-2.jpg", text:"After the tailoring course I started my own small unit. Today I earn enough to send both my children to school.", tag:"Nari Shakti program"},
    {name:"Ramu Kaka", icon:"👁️", img:"story-3.jpg", text:"The free eye camp gave me cataract surgery. I can see my grandchildren's faces again.", tag:"Swasthya program"}
  ],
  volunteerAreas: ["Teaching & mentoring","Health camps","Fundraising & events","Photography & social media","Fieldwork & distribution","Skill training"]
};
/* ====================================================================== */

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const inr = n => "₹" + Math.round(n).toLocaleString("en-IN");
const wa = t => "https://wa.me/" + C.whatsapp + (t ? "?text=" + encodeURIComponent(t) : "");
const GR = ["#0f766e,#34d399","#0369a1,#38bdf8","#b45309,#fbbf24","#7c3aed,#c084fc","#be123c,#fb7185"];
const thumb = (img, icon, i) => `<div class="thumb" style="--g:linear-gradient(135deg,${GR[i % GR.length]})">${icon}<img src="assets/images/${esc(img)}" alt="" loading="lazy" onerror="this.remove()"></div>`;

/* ---- header / hero / contact ---- */
document.title = C.name + " — Donate, Volunteer, Make an Impact";
$("logo").textContent = C.name;
$("regLine").textContent = C.regLine;
$("hTitle").textContent = C.heroTitle;
$("hSub").textContent = C.heroSub;
$("addr").textContent = C.address;
$("hours").textContent = C.hours;
$("mapBtn").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(C.mapQuery);
$("waBtn").href = wa("Hello " + C.name + ", I'd like to know more.");
$("fab").href = wa("Hello " + C.name + "!");
$("mailBtn").href = "mailto:" + C.email; $("mailBtn").textContent = C.email;
$("callBtn").href = "tel:" + C.phone.replace(/\s/g, ""); $("callBtn").textContent = "Call " + C.phone;
$("socials").innerHTML = C.socials.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("");
$("foot").textContent = "© " + new Date().getFullYear() + " " + C.name + ". All rights reserved.";

/* ---- mobile menu ---- */
$("burger").onclick = () => { const o = $("nav").classList.toggle("open"); $("burger").setAttribute("aria-expanded", o); };
$("nav").addEventListener("click", e => { if (e.target.tagName === "A") { $("nav").classList.remove("open"); $("burger").setAttribute("aria-expanded", false); } });

/* ---- animated impact counters ---- */
$("counters").innerHTML = C.impact.map(i => `<div class="counter"><b data-to="${i[0]}" data-suf="${esc(i[1])}">0${esc(i[1])}</b><span>${esc(i[2])}</span></div>`).join("");
function runCounters() {
  document.querySelectorAll(".counter b").forEach(el => {
    const to = +el.dataset.to, suf = el.dataset.suf, t0 = performance.now();
    (function step(t) {
      const p = Math.min((t - t0) / 1400, 1);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))).toLocaleString("en-IN") + suf;
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  });
}
if ("IntersectionObserver" in window) {
  new IntersectionObserver((en, ob) => { if (en[0].isIntersecting) { runCounters(); ob.disconnect(); } }, {threshold: .3}).observe($("counters"));
} else runCounters();

/* ---- about / mission / vision ---- */
$("aboutTxt").textContent = C.about;
const MV = {"Our mission": C.mission, "Our vision": C.vision};
let mvTab = "Our mission";
function renderMV() {
  $("mvTabs").innerHTML = Object.keys(MV).map(k => `<button class="${k === mvTab ? "on" : ""}" data-k="${k}">${k}</button>`).join("");
  $("mvBox").textContent = MV[mvTab];
}
$("mvTabs").addEventListener("click", e => { const b = e.target.closest("button"); if (b) { mvTab = b.dataset.k; renderMV(); } });
renderMV();
$("values").innerHTML = C.values.map(v => `<div class="val"><b>${esc(v[0])}</b><span>${esc(v[1])}</span></div>`).join("");

/* ---- projects ---- */
let donProject = "";
$("projList").innerHTML = C.projects.map((p, i) => {
  const pct = Math.min(100, Math.round(p.raised / p.goal * 100));
  return `<article class="card">${thumb(p.img, p.icon, i)}<div class="card-b">
    <h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>
    <div class="prog"><i style="width:${pct}%"></i></div>
    <div class="meta"><span>${inr(p.raised)} raised</span><span>Goal ${inr(p.goal)}</span></div>
    <a class="btn" href="#donate" data-proj="${esc(p.title)}">Support this project</a></div></article>`;
}).join("");
$("projList").addEventListener("click", e => {
  const a = e.target.closest("[data-proj]"); if (!a) return;
  donProject = a.dataset.proj; updateDonate();
});

/* ---- donation ---- */
const D = C.donation;
let amount = D.amounts[1] || D.amounts[0];
$("donIntro").textContent = D.intro;
$("taxNote").textContent = D.taxNote;
$("bankTbl").innerHTML = D.bank.map(r => `<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td></tr>`).join("");
$("copyUpi").textContent = "Copy UPI ID: " + D.upiId;
$("copyUpi").onclick = () => { navigator.clipboard && navigator.clipboard.writeText(D.upiId); $("copyUpi").textContent = "Copied!"; setTimeout(() => $("copyUpi").textContent = "Copy UPI ID: " + D.upiId, 1400); };
$("usage").innerHTML = "<b style='font-size:14px'>How your donation is used</b><br><br>" + D.usage.map(u =>
  `<div class="use"><div><span>${esc(u[0])}</span><b>${u[1]}%</b></div><div class="prog"><i style="width:${u[1]}%"></i></div></div>`).join("");
function renderAmts() {
  $("amts").innerHTML = D.amounts.map(a => `<button class="${a === amount ? "on" : ""}" data-a="${a}">${inr(a)}</button>`).join("") +
    `<input id="custom" type="number" min="1" placeholder="Other ₹" value="${D.amounts.includes(amount) ? "" : amount}">`;
}
function updateDonate() {
  const note = donProject ? ` for ${donProject}` : "";
  $("upiBtn").href = `upi://pay?pa=${encodeURIComponent(D.upiId)}&pn=${encodeURIComponent(C.name)}&am=${amount}&cu=INR&tn=${encodeURIComponent("Donation" + note)}`;
  $("upiBtn").textContent = `Donate ${inr(amount)} via UPI`;
  const nm = $("dName").value.trim();
  $("dWa").href = wa(`Hello ${C.name}, I${nm ? " (" + nm + ")" : ""} would like to donate ${inr(amount)}${note}. Please share the receipt details.`);
}
$("amts").addEventListener("click", e => { const b = e.target.closest("button"); if (b) { amount = +b.dataset.a; renderAmts(); updateDonate(); } });
$("amts").addEventListener("input", e => { if (e.target.id === "custom") { amount = Math.max(1, +e.target.value || 1); document.querySelectorAll("#amts button").forEach(b => b.classList.remove("on")); updateDonate(); } });
$("dName").addEventListener("input", updateDonate);
renderAmts(); updateDonate();

/* ---- events ---- */
const todayStr = new Date().toISOString().slice(0, 10);
const evs = C.events.filter(e => e.date >= todayStr).sort((a, b) => a.date.localeCompare(b.date));
$("evList").innerHTML = evs.length ? evs.map(e => {
  const d = new Date(e.date + "T00:00");
  return `<div class="ev"><div class="date"><b>${d.getDate()}</b><span>${d.toLocaleString("en-IN", {month: "short"})}</span></div>
    <div><h3>${esc(e.title)}</h3><p>${esc(e.place)} · ${esc(e.note)}</p></div>
    <a class="btn ghost" target="_blank" rel="noopener" href="${wa("Hello, I'd like to join: " + e.title + " (" + d.toDateString() + ")")}">Join / enquire</a></div>`;
}).join("") : "<p class='sub'>New events will be announced soon.</p>";

/* ---- gallery + lightbox ---- */
$("gal").innerHTML = C.gallery.map((g, i) =>
  `<figure data-i="${i}" style="--g:linear-gradient(135deg,${GR[i % GR.length]});--h:${g.h}px">
     <img src="assets/images/${esc(g.img)}" alt="${esc(g.cap)}" loading="lazy" onerror="this.outerHTML='<div class=&quot;ph&quot;>${g.icon}</div>'">
     <figcaption>${esc(g.cap)}</figcaption></figure>`).join("");
$("gal").addEventListener("click", e => {
  const f = e.target.closest("figure"), im = f && f.querySelector("img"); if (!im) return;
  $("lbImg").src = im.src; $("lbCap").textContent = im.alt; $("lb").showModal();
});
$("lbClose").onclick = () => $("lb").close();
$("lb").addEventListener("click", e => { if (e.target === $("lb")) $("lb").close(); });

/* ---- stories ---- */
$("storyList").innerHTML = C.stories.map((s, i) =>
  `<article class="card">${thumb(s.img, s.icon, i + 2)}<div class="card-b"><h3>${esc(s.name)}</h3>
   <p class="quote">“${esc(s.text)}”</p><div class="meta"><span>${esc(s.tag)}</span></div></div></article>`).join("");

/* ---- volunteer form ---- */
$("vArea").innerHTML = C.volunteerAreas.map(a => `<option>${esc(a)}</option>`).join("");
$("vf").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target, v = n => f.elements[n].value.trim(), err = $("vErr");
  err.textContent = "";
  if (!v("name")) return err.textContent = "Please enter your name.";
  if (!/^[0-9+ \-]{8,15}$/.test(v("phone"))) return err.textContent = "Please enter a valid phone number.";
  if (v("email") && !/^\S+@\S+\.\S+$/.test(v("email"))) return err.textContent = "Please enter a valid email address.";
  const body = `Volunteer registration\n\nName: ${v("name")}\nPhone: ${v("phone")}\nEmail: ${v("email") || "-"}\nCity: ${v("city") || "-"}\nInterest: ${v("area")}\nAvailability: ${v("avail")}\nWhy: ${v("why") || "-"}`;
  if (e.submitter && e.submitter.value === "wa") window.open(wa(body), "_blank");
  else location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent("Volunteer registration — " + v("name")) + "&body=" + encodeURIComponent(body);
});
