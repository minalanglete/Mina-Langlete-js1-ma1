//Question 1

const cat = {
    complain: "Meow!"
}

console.log(cat.complain)


//Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


//Question 3

heading.style.fontSize = "2em";


//Question 4

heading.innerHTML = "<h3 class=subheading>" + heading.innerHTML + "</h3>"; 


//Question 5

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}    


//Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML += "<p>New paragraph</p>";

resultsContainer.style.backgroundColor = "yellow";


//Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function list(cats) {

   for(let i = 0; i < cats.length; i++) { 
       console.log(cats[i].name);
   }       
}

list(cats)


//Question 8
 
function createCats(cats) {
    
    let html = "";

    for(let i = 0; i < cats.length; i++) {

        let ageMissing = "Age unknown";
    
        if(cats[i].age) {
            ageMissing = cats[i].age;
        }

        html += `<div> 
                    <h5>${cats[i].name}</h5>
                    <p>${ageMissing}</p>
                </div>`;
    }
    return html;
}

const catsHtml = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = catsHtml;

