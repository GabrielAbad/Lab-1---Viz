/*console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

let navLinks = $$("nav a");

let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);

currentLink.classList.add("current");

if (currentLink) { // or if (currentLink !== undefined)
    currentLink.classList.add("current");
}*/

const ARE_WE_HOME = document.documentElement.classList.contains("home");

let pages = [
    {url: "", title: "Home"},
    {url: "projects/", title: "Projects"},
    {url: "contact/", title: "Contact"},
    {url: "https://github.com/GabrielAbad", title: "Github"},
    {url: "resume/", title: "Resume"}
];

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
    let url = p.url;
    let title = p.title;
    // Create link and add it to nav
    if (!ARE_WE_HOME && !url.startsWith("http")) {
        url = "../" + url;
    }
    nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>` );
}