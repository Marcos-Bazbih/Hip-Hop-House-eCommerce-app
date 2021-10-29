let container2010sPage = document.getElementById("container");
let recordCard = document.getElementsByClassName("recordCard");
let record2Pics = document.getElementsByClassName("record2Pics");

const currentPageRecords = [];

for (let record of STORE_RECORDS) if (record.category == "2010s") currentPageRecords.push(record)

const displayItems = () => {
    for (let record of currentPageRecords) {
        if (record.category == "2010s") {
            container2010sPage.innerHTML +=
                `<article class="recordCard">
                <div class="recordInfo">
                <h2>${record.artistName}</h2>
                <h1>${record.recordName}</h1>
                    <p>${record.description}</p>
                    <h2>${record.price}$</h2>
                    <div class="cardBtns">
                       <button class="addToCartBtn"><i class="fas fa-cart-plus"></i></button>
                    </div>
                </div>
                <div class="recordImages">
                    <img src="${record.images[0]}" class="record2Pics">
                </div>
            </article>`
        }
    }
}
displayItems();

const hoverPic = () => {
    for (let i = 0; i < record2Pics.length; i++) {
        record2Pics[i].onmouseenter = () => {
            record2Pics[i].src = currentPageRecords[i].images[1]
        }
        record2Pics[i].onmouseleave = () => {
            record2Pics[i].src = currentPageRecords[i].images[0]
        }
    }
}
hoverPic();


function comperePopularity(a, b) {
    return a.id - b.id;
}
function compereHighAndDown(a, b) {
    return b.price - a.price;
}
function compereLowAndUp(a, b) {
    return a.price - b.price;
}


const sortBtnActions = (sortFunc) => {
    currentPageRecords.sort(sortFunc);
    container2010sPage.innerHTML = "";
    displayItems();
    addItem();
    hoverPic();
}


sortSelect.onchange = () => {
    switch (sortSelect.value) {
        case "sortPopularity":
            sortBtnActions(comperePopularity);
            break;
        case "sortHighAndDown":
            sortBtnActions(compereHighAndDown);
            break;
        case "sortLowAndUp":
            sortBtnActions(compereLowAndUp);
            break;
        default:
            break;
    }
}


const addToCartBtn = document.getElementsByClassName("addToCartBtn");
const popUpBox = document.getElementById("popUpBox");
let currentPageCart = [];
let cartPriceCounter = 0;


function addItem() {
    for (let i = 0; i < addToCartBtn.length; i++) {
        addToCartBtn[i].onclick = () => {
            currentPageCart.push(currentPageRecords[i]);
            cartPriceCounter += currentPageRecords[i].price;
            popUpBox.innerHTML =
                `<article id="popUpAlert">
                <table>
                    <tr>
                        <td>Item Added:</td>
                        <td>${currentPageRecords[i].recordName}</td>
                    </tr>
                    <tr>
                        <td>Item Price:</td>
                        <td>${currentPageRecords[i].price}$</td>
                    </tr>
                    <tr>
                        <td>Total Price:</td>
                        <td>${cartPriceCounter}$</td>
                    </tr>
                </table>
            </article>`
            let intervalCounter = 0;
            let intervalId = window.setInterval(() => {
                intervalCounter++;
                popUpBox.style.left = "0%";
                if (intervalCounter >= 200) {
                    window.clearInterval(intervalId);
                    popUpBox.style.left = "-100%";
                }
            }, 10)
        }
    }
}
addItem();