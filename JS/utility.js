//  Get Input Field values
function getInputFieldValue(elementID) {
    const element = document.getElementById(elementID).value;
    const elementConverted = parseFloat(element);
    return elementConverted;
}

// Display Table Data

function displayTableData(valueOne, valueTwo) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
       
    <td class="text-left pl-5">${serial}. ${valueOne}</td>
    <td>${valueTwo}<span>cm<sup>2</sup></span></td>
     <td>
    <button class="btn btn-res btn-sm bg-[#1090D8]">Convert To m<sup>2</sup> </button>
    </td>
  `;

    container.appendChild(tr);
}

//  Background colour randomizer
const setBackgroundColor = (element, color) => {
    element.style.backgroundColor = color;
};

const cards = document.getElementsByClassName('card');
for (let i = 0; i < cards.length; i++) {
    const defaultColor = cards[i].style.backgroundColor;
    cards[i].addEventListener('mouseover', function () {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        setBackgroundColor(this, '#' + randomColor);
    });
    cards[i].addEventListener('mouseout', function () {
        setBackgroundColor(this, defaultColor);
    });
}
