/* Launchpad Internship Board — vanilla JavaScript, no framework. */
const internships = [
  {id:1,role:"Junior Full Stack Developer",company:"Northstar Labs",domain:"Full Stack Development",location:"Remote",duration:"3 months",stipend:"₹8,000 / month",tag:"Featured",initials:"N",tone:"green",description:"Support a small product team with frontend components and API integration."},
  {id:2,role:"Frontend Development Intern",company:"PixelCraft Studio",domain:"Web Development",location:"Hybrid · Kochi",duration:"2 months",stipend:"₹5,000 / month",tag:"Beginner friendly",initials:"P",tone:"purple",description:"Build responsive web interfaces with HTML, CSS, and JavaScript."},
  {id:3,role:"Data Analytics Intern",company:"MetricSpring",domain:"Data & Analytics",location:"Remote",duration:"3 months",stipend:"₹6,000 / month",tag:"New",initials:"M",tone:"blue",description:"Clean sample datasets and create clear reports for business questions."},
  {id:4,role:"UI/UX Design Intern",company:"Kindred Design Co.",domain:"UI/UX Design",location:"Hybrid · Bengaluru",duration:"3 months",stipend:"₹7,000 / month",tag:"Portfolio builder",initials:"K",tone:"pink",description:"Assist with wireframes, usability checks, and Figma prototypes."},
  {id:5,role:"Python & AI Intern",company:"BrightPath AI",domain:"AI & Machine Learning",location:"Remote",duration:"4 months",stipend:"₹9,000 / month",tag:"Learning track",initials:"B",tone:"orange",description:"Explore beginner machine-learning workflows and document experiments."},
  {id:6,role:"Security Analyst Intern",company:"Shieldwise",domain:"Cybersecurity",location:"On-site · Trivandrum",duration:"3 months",stipend:"₹6,500 / month",tag:"New",initials:"S",tone:"green",description:"Learn security hygiene, basic log review, and safe testing practices."},
  {id:7,role:"React Developer Intern",company:"Cloudberry Apps",domain:"Web Development",location:"Remote",duration:"2 months",stipend:"₹6,000 / month",tag:"Remote",initials:"C",tone:"blue",description:"Help improve reusable UI components in a learning-focused team."},
  {id:8,role:"Backend API Intern",company:"DevHarbor",domain:"Full Stack Development",location:"Hybrid · Kochi",duration:"3 months",stipend:"₹8,000 / month",tag:"Mentorship",initials:"D",tone:"purple",description:"Practice building REST endpoints, validation, and database queries."},
  {id:9,role:"Business Intelligence Intern",company:"ClearView Insights",domain:"Data & Analytics",location:"Remote",duration:"2 months",stipend:"₹5,500 / month",tag:"Remote",initials:"C",tone:"orange",description:"Turn small datasets into useful dashboards and concise summaries."},
  {id:10,role:"Product Design Intern",company:"Mango Tree Digital",domain:"UI/UX Design",location:"Remote",duration:"3 months",stipend:"₹6,000 / month",tag:"Portfolio builder",initials:"M",tone:"pink",description:"Map user journeys and refine a simple mobile-first product experience."},
  {id:11,role:"Machine Learning Trainee",company:"OrbitLearn",domain:"AI & Machine Learning",location:"Hybrid · Chennai",duration:"4 months",stipend:"₹8,500 / month",tag:"Learning track",initials:"O",tone:"purple",description:"Work through model evaluation examples and communicate findings."},
  {id:12,role:"Junior Security Intern",company:"SafeStack Works",domain:"Cybersecurity",location:"Remote",duration:"3 months",stipend:"₹7,000 / month",tag:"Remote",initials:"S",tone:"blue",description:"Help document security checks and learn defensive security basics."}
];

const form = document.querySelector("#filter-form");
const searchInput = document.querySelector("#search-input");
const domainFilter = document.querySelector("#domain-filter");
const clearSearch = document.querySelector("#clear-search");
const grid = document.querySelector("#internship-grid");
const template = document.querySelector("#internship-template");
const emptyState = document.querySelector("#empty-state");
const errorState = document.querySelector("#error-state");
const summary = document.querySelector("#results-summary");
const totalCount = document.querySelector("#total-count");

function renderListings() {
  try {
    const query = searchInput.value.trim().toLowerCase();
    const domain = domainFilter.value;
    const filtered = internships.filter(item => {
      const searchable = [item.role, item.company, item.domain, item.location, item.duration, item.description].join(" ").toLowerCase();
      return searchable.includes(query) && (domain === "all" || item.domain === domain);
    });

    grid.replaceChildren();
    filtered.forEach(item => {
      const fragment = template.content.cloneNode(true);
      const card = fragment.querySelector(".internship-card");
      const icon = fragment.querySelector(".company-icon");
      icon.textContent = item.initials;
      icon.classList.add(item.tone);
      fragment.querySelector(".tag").textContent = item.tag;
      fragment.querySelector(".role-title").textContent = item.role;
      fragment.querySelector(".company-name").textContent = item.company;
      fragment.querySelector(".location").textContent = item.location;
      fragment.querySelector(".duration").textContent = item.duration;
      fragment.querySelector(".stipend").textContent = item.stipend;
      const link = fragment.querySelector(".details-link");
      link.setAttribute("aria-label", `View demo details for ${item.role} at ${item.company}`);
      link.addEventListener("click", event => {
        event.preventDefault();
        window.alert(`${item.role} — ${item.company}\n\n${item.description}\n\nThis is fictional sample data for a student portfolio project. There is no live application link.`);
      });
      card.setAttribute("aria-label", `${item.role} at ${item.company}`);
      grid.appendChild(fragment);
    });

    const count = filtered.length;
    summary.textContent = `Showing ${count} ${count === 1 ? "opportunity" : "opportunities"}`;
    totalCount.textContent = internships.length;
    emptyState.hidden = count !== 0;
    errorState.hidden = true;
    grid.hidden = count === 0;
    clearSearch.hidden = searchInput.value.length === 0;
  } catch (error) {
    grid.hidden = true;
    emptyState.hidden = true;
    errorState.hidden = false;
    summary.textContent = "Listings unavailable";
  }
}

searchInput.addEventListener("input", renderListings);
domainFilter.addEventListener("change", renderListings);
form.addEventListener("reset", () => {
  window.setTimeout(() => {
    searchInput.value = "";
    domainFilter.value = "all";
    renderListings();
    searchInput.focus();
  }, 0);
});
clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  renderListings();
  searchInput.focus();
});
document.querySelector("#empty-reset").addEventListener("click", () => {
  searchInput.value = "";
  domainFilter.value = "all";
  renderListings();
  searchInput.focus();
});
document.querySelector("#retry-button").addEventListener("click", renderListings);
renderListings();
