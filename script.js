function seleccionar(link){
    var opciones = document.querySelector('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";

    var x = document.getElementById("nav");
    x.className = "";
}

/* Menu responsive */
function responsiveMenu() {
    var x = document.getElementById("nav");
    if(x.className==="") {
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

const images = document.querySelectorAll('#portfolio .pj img');
const selectedImg = document.getElementById('selected-img');
const projectDescription = document.getElementById('project-description');

const projectData = [
    {
        src: 'img/projects/68747470733a2f2f692e696d6775722e636f6d2f3767354f714d502e6a706567.jpg',
        description: "This report provides an overview of the company's financial structure, including assets, liabilities, and equity. It highlights the evolution of accounts over time and offers insights into the organization's overall financial health."
    },
    {
        src: 'img/projects/68747470733a2f2f692e696d6775722e636f6d2f396141796c654a2e6a706567.jpg',
        description: "This report analyzes the company's working capital, representing the difference between current assets and current liabilities. It provides insights into short-term liquidity and operational efficiency, helping to assess the company's ability to meet its short-term financial obligations."
    },
    {
        src: 'img/projects/68747470733a2f2f692e696d6775722e636f6d2f44696a4f534f452e6a706567.jpg',
        description: 'A comprehensive analysis of financial data to support strategic decision-making.'
    },
    {
        src: 'img/projects/68747470733a2f2f692e696d6775722e636f6d2f593358613371652e6a706567.jpg',
        description: "This report outlines organizational objectives, key performance indicators (KPIs), and progress towards achieving set goals. It provides stakeholders with a comprehensive overview of strategic priorities and performance metrics, facilitating data-driven decision-making and alignment across departments."
    },
    {
        src: 'img/projects/68747470733a2f2f692e696d6775722e636f6d2f6c664d555a414d2e6a706567.jpg',
        description: 'This dashboard provides insights into sales performance, trends, and key metrics.'
    }
];

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        selectedImg.src = projectData[index].src;
        projectDescription.textContent = projectData[index].description;
    });
});
