let container1980sPage = document.getElementById("container");
let recordCard = document.getElementsByClassName("recordCard");
let recordImages = document.getElementsByClassName("recordImages");

const currentPageRecords = [];

for (var i = 0; i < STORE_RECORDS.length; i++) {
    if (STORE_RECORDS[i].category == "1980s") {
        currentPageRecords.push(STORE_RECORDS[i])
    }
}

function displayItems() {
    for (let i = 0; i < currentPageRecords.length; i++) {
        if (currentPageRecords[i].category == "1980s") {
            container1980sPage.innerHTML +=
                `<article class="recordCard">
                <div class="recordInfo">
                <h2>${currentPageRecords[i].artistName}</h2>
                <h1>${currentPageRecords[i].recordName}</h1>
                    <p>${currentPageRecords[i].description}</p>
                    <h2>${currentPageRecords[i].price}$</h2>
                    <div class="cardBtns">
                       <button class="addToCartBtn"><i class="fas fa-cart-plus"></i></button>
                       <button class="removeFromCartBtn"><i class="fas fa-trash-alt"></i></button>
                    </div>
                </div>
                <div class="recordImages"></div>
            </article>`
            for (let j = 0; j < currentPageRecords[i].images.length; j++) {
                recordImages[recordImages.length - 1].innerHTML +=
                    `<img src="${currentPageRecords[i].images[j]}" class="record2Pics">`
            }
        }
    };
}
displayItems();


const sortPopularity = document.getElementById("sortPopularity");
const sortHighAndDown = document.getElementById("sortHighAndDown");
const sortLowAndUp = document.getElementById("sortLowAndUp");


const sortBtnStyle ="background: var(--mainPageColor1); border-color: var(--mainPageColor3);color: var(--mainPageColor3);";
sortPopularity.style=sortBtnStyle;


function comperePopularity(a, b) {
    return a.id - b.id;
}
function compereHighAndDown(a, b) {
    return b.price - a.price;
}
function compereLowAndUp(a, b) {
    return a.price - b.price;
}


sortPopularity.onclick = () => {
    currentPageRecords.sort(comperePopularity);
    container1980sPage.innerHTML = "";
    displayItems();
    addItem();
    removeItem();
    sortPopularity.style=sortBtnStyle;
    sortLowAndUp.style= "none";
    sortHighAndDown.style= "none";
}

sortHighAndDown.onclick = () => {
    currentPageRecords.sort(compereHighAndDown);
    container1980sPage.innerHTML = "";
    displayItems();
    addItem();
    removeItem();
    sortHighAndDown.style=sortBtnStyle;
    sortPopularity.style= "none";
    sortLowAndUp.style= "none";
}

sortLowAndUp.onclick = () => {
    currentPageRecords.sort(compereLowAndUp);
    container1980sPage.innerHTML = "";
    displayItems();
    addItem();
    removeItem();
    sortLowAndUp.style=sortBtnStyle;
    sortPopularity.style= "none";
    sortHighAndDown.style= "none";
}


const addToCartBtn = document.getElementsByClassName("addToCartBtn");
const removeFromCartBtn = document.getElementsByClassName("removeFromCartBtn");
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

function removeItem() {
    for (let i = 0; i < addToCartBtn.length; i++) {
        removeFromCartBtn[i].onclick = () => {
            for (let j = 0; j < currentPageCart.length; j++) {
                if (currentPageCart[j] == currentPageRecords[i]) {
                    currentPageCart.splice(j, 1);
                    cartPriceCounter -= currentPageRecords[i].price;
                    popUpBox.innerHTML =
                        `<article id="popUpAlert">
                        <table>
                            <tr>
                                <td>Item removed:</td>
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
                    break;
                }
            }
        }
    }
}
removeItem();