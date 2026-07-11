console.log("JavaScript Loaded!");

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop;

if(window.scrollY>=sectionTop-150){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

const hidden=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hidden.forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,20);

}else{

counter.innerText=target+"";

}

};

update();

});

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close");

document.getElementById("crisil-btn").onclick = function(){

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";

    modalTitle.innerText = "Powering the AI Era";

    modalBody.innerHTML = `

<h3>Client</h3>

<p>CRISIL Ratings</p>

<hr>

<h3>Duration</h3>

<p>May 2026 – July 2026</p>

<hr>

<h3>Industry</h3>

<p>Data Centres & Digital Infrastructure</p>

<hr>

<h3>Objective</h3>

<p>

Develop an AI-adjusted demand forecasting model to estimate India's future data centre capacity requirements and evaluate investment opportunities in the sector.

</p>

<hr>

<h3>Key Contributions</h3>

<ul>

<li>Benchmarked India's ₹9.3 lakh crore data centre market against five major global markets.</li>

<li>Forecasted India's AI-driven demand to exceed 5 GW by 2030.</li>

<li>Developed integrated financial models covering Revenue, CAPEX, OPEX, Cash Flow, DSCR and IRR.</li>

<li>Analysed sustainability challenges including renewable energy, water consumption and land availability.</li>

<li>Estimated demand-supply gap and identified investment opportunities.</li>

</ul>

<hr>

<h3>Technologies Used</h3>

<p>

Excel • Power BI • Financial Modelling • Research • AI Market Analysis

</p>

<hr>

<h3>Outcome</h3>

<p>

Built an AI-adjusted forecasting framework and financial model that projected significant future infrastructure demand and highlighted investment opportunities in India's rapidly growing data centre industry.

</p>

`;
};
document.getElementById("esg-btn").onclick = function(){

    modal.style.display="flex";

    modalTitle.innerText="ESG & Earnings Management";

    modalBody.innerHTML=`

<h3>Institution</h3>

<p>IIM Lucknow</p>

<hr>

<h3>Research Topic</h3>

<p>

Impact of ESG Ratings on Earnings Management among UK Listed Firms

</p>

<hr>

<h3>Methodology</h3>

<ul>

<li>Modified Jones Model</li>

<li>Regression Analysis</li>

<li>Firm Size Moderation</li>

<li>STATA</li>

</ul>

<hr>

<h3>Outcome</h3>

<p>

Found significant relationships between ESG performance, firm characteristics and discretionary accruals, providing insights into financial reporting quality.

</p>

`;
};
document.getElementById("dcf-btn").onclick = function(){

    modal.style.display="flex";

    modalTitle.innerText="DCF Valuation";

    modalBody.innerHTML=`
<h3>Case</h3>

<p>Calaveras Vineyards</p>

<hr>

<h3>Objective</h3>

<p>

Determine the intrinsic value of the company using Discounted Cash Flow techniques.

</p>

<hr>

<h3>Analysis Performed</h3>

<ul>

<li>Calculated WACC</li>

<li>Forecasted FCFF</li>

<li>Estimated Terminal Value</li>

<li>Performed Sensitivity Analysis</li>

<li>Calculated Enterprise Value</li>

</ul>

<hr>

<h3>Tools</h3>

<p>

Excel • Corporate Finance • Valuation

</p>

`;
};


closeBtn.onclick=function(){

modal.style.display="none";

document.body.style.overflow = "auto";

};

window.onclick=function(e){

if(e.target===modal){

modal.style.display="none";

document.body.style.overflow="auto";


}

};

// Close modal when ESC key is pressed

document.addEventListener("keydown", function(event){

    if(event.key === "Escape" && modal.style.display === "flex"){

        modal.style.display = "none";

        document.body.style.overflow="auto";

    }

});