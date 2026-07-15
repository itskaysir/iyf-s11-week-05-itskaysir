// getElementById - returns single element
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// getElementsByClassName - returns HTMLCollection (live)
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName - returns HTMLCollection (live)
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector - returns first match
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// querySelectorAll - returns NodeList (static)
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

const heading = document.getElementsByTagName("h1");
console.log("getElementsByTagName (h1):", heading);

const contentElements = document.getElementsByClassName("content");
console.log("getElementsByClassName (content):", contentElements);

const contactForm = document.getElementById("contact-form");
console.log("getElementById (contact-form):", contactForm);

const emailInput = document.querySelector("input[type='email']");
console.log("querySelector (email input):", emailInput);


// gets all navigation items using querySelectorAll
const navItems = document.querySelectorAll("nav li");
console.log("querySelectorAll (nav li):", navItems);

// gets the first navigation link using querySelector
const firstNavLink = document.querySelector(".nav-link");
console.log("querySelector (first .nav-link):", firstNavLink);

// gets the last paragraph element using querySelector
const lastParagraph = document.querySelector("p:last-of-type");
console.log("querySelector (last paragraph):", lastParagraph);


const nav = document.querySelector("nav");

// Parent
console.log(nav.parentElement);          

// Children
console.log(nav.children);               
console.log(nav.firstElementChild);      
console.log(nav.lastElementChild);      

// Siblings
const article = document.querySelector("article");
console.log(article.nextElementSibling);
console.log(article.previousElementSibling);

// Descendants
const navLinks = nav.querySelectorAll("a");

const header = document.querySelector("header");
const nav = header.querySelector("nav");

const firstNavLink = document.querySelector(".nav-link");
const parentOfFirstNavLink = firstNavLink.parentElement;
console.log("Parent of first .nav-link:", parentOfFirstNavLink);

const article = document.querySelector("article");
const nextSiblingOfArticle = article.nextElementSibling;
console.log("Next sibling of article:", nextSiblingOfArticle);

const liElements = ul.querySelectorAll("li");
console.log("All li elements within ul:", liElements);

const footer = document.querySelector("footer");
const body = footer.parentElement;
console.log("Parent of footer (body):", body);


function addNavItem(text, href) {
    // Create li with a.nav-link inside
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = href;
    a.textContent = text;
    a.classList.add("nav-link");
    li.appendChild(a);

    // Add to the nav list
    nav.appendChild(li);
}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");