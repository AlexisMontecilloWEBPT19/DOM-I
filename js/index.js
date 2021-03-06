const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Adding info into the header Nav
const headerNav = document.querySelectorAll('header nav a')

headerNav[0].textContent = siteContent.nav["nav-item-1"];
headerNav[1].textContent = siteContent.nav["nav-item-2"];
headerNav[2].textContent = siteContent.nav["nav-item-3"];
headerNav[3].textContent = siteContent.nav["nav-item-4"];
headerNav[4].textContent = siteContent.nav["nav-item-5"];
headerNav[5].textContent = siteContent.nav["nav-item-6"];

// Working on Section class 'cta'
const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = siteContent.cta['h1'];

const ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = siteContent.cta['button'];

const ctaImg = document.getElementById('cta-img')
ctaImg.src = siteContent.cta["img-src"];
ctaImg.href = "Circle of code";


//Working on main content class .main-content
// This allows us to access all the elements in the main content without repeating
//the command.
const mainContent = document.getElementsByClassName("main-content");
console.log(mainContent[0]);

const mainContentFeatureH4 = mainContent[0].querySelector(".text-content h4");
//The code below allows us to access the elements in the main content array
//This is because you cannot write main-content on JS because of the dash
let siteContentMainContent = siteContent["main-content"];
mainContentFeatureH4.textContent = siteContentMainContent["features-h4"];

const mainContentFeaturesContent = mainContent[0].querySelector('p');
mainContentFeaturesContent.textContent = siteContentMainContent["features-content"];

//about
const mainContentClassTextContent = mainContent[0].getElementsByClassName('text-content');
const aboutH4 = mainContentClassTextContent[1].querySelector('h4');
aboutH4.textContent = siteContentMainContent["about-h4"];

const aboutContent = mainContentClassTextContent[1].querySelector("p");
aboutContent.textContent = siteContentMainContent["about-content"];

//Middle image created by using Id
const middleImg = document.getElementById("middle-img");
middleImg.src = siteContentMainContent["middle-img-src"];

//service 
const serviceH4 = mainContentClassTextContent[2].querySelector("h4");
serviceH4.textContent = siteContentMainContent["services-h4"];

const serviceContent = mainContentClassTextContent[2].querySelector("p")
serviceContent.textContent = siteContentMainContent["services-content"];

//Product
const productH4 = mainContentClassTextContent[3].querySelector("h4");
productH4.textContent = siteContentMainContent["product-h4"];

const productContent = mainContentClassTextContent[3].querySelector("p");
productContent.textContent = siteContentMainContent["product-content"];

//vision
const visionH4 = mainContentClassTextContent[4].querySelector("h4");
visionH4.textContent = siteContentMainContent["vision-h4"];

const visionContent = mainContentClassTextContent[4].querySelector("p");
visionContent.textContent = siteContentMainContent["vision-content"];

// finished with Main contetn


//



