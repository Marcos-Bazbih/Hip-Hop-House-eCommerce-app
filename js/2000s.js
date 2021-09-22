let container2000sPage = document.getElementById("container");
let recordCard = document.getElementsByClassName("recordCard");
let recordImages = document.getElementsByClassName("recordImages");


for (let i = 0; i < STORE_RECORDS.length; i++) {
    if (STORE_RECORDS[i].category == "2000s") {
        container2000sPage.innerHTML +=
            `<article class="recordCard">
                <div class="recordInfo">
                <h2>${STORE_RECORDS[i].artistName}</h2>
                <h1>${STORE_RECORDS[i].recordName}</h1>
                    <p>${STORE_RECORDS[i].description}</p>
                    <h2>${STORE_RECORDS[i].price}$</h2>
                    <div class="cardBtns">
                    <button class="addToCartBtn"><i class="fas fa-cart-plus"></i></button>
                    <button class="removeFromCartBtn"><i class="fas fa-trash-alt"></i></button>
                    </div>
                </div>
                <div class="recordImages"></div>
            </article>`
        for (let j = 0; j < STORE_RECORDS[i].images.length; j++) {
            recordImages[recordImages.length - 1].innerHTML +=
                `<img src="${STORE_RECORDS[i].images[j]}" class="record2Pics">`
        }
    }
};


const addToCartBtn = document.getElementsByClassName("addToCartBtn");
const removeFromCartBtn = document.getElementsByClassName("removeFromCartBtn");
let popUpBox = document.getElementById("popUpBox");
let currentPageCart = [];
let cartPriceCounter = 0;


for (let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].onclick = () => {
        currentPageCart.push(STORE_RECORDS[i+30]);
        cartPriceCounter += STORE_RECORDS[i+30].price;
        popUpBox.innerHTML =
            `<article id="popUpAlert">
                <table>
                    <tr>
                        <td>Item Added:</td>
                        <td>${STORE_RECORDS[i+30].recordName}</td>
                    </tr>
                    <tr>
                        <td>Item Price:</td>
                        <td>${STORE_RECORDS[i+30].price}$</td>
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
            if (intervalCounter >= 9) {
                window.clearTimeout(intervalId);
                popUpBox.style.left = "-100%";
            }
        }, 250)
    }
}

for (let i = 0; i < addToCartBtn.length; i++) {
    removeFromCartBtn[i].onclick = () => {
        for (let j = 0; j < currentPageCart.length; j++) {
            if (currentPageCart[j] == STORE_RECORDS[i+30]) {
                currentPageCart.splice(j, 1);
                cartPriceCounter -= STORE_RECORDS[i+30].price;
                popUpBox.innerHTML =
                    `<article id="popUpAlert">
                        <table>
                            <tr>
                                <td>Item removed:</td>
                                <td>${STORE_RECORDS[i+30].recordName}</td>
                            </tr>
                            <tr>
                                <td>Item Price:</td>
                                <td>${STORE_RECORDS[i+30].price}$</td>
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
                    if (intervalCounter >= 9) {
                        window.clearTimeout(intervalId);
                        popUpBox.style.left = "-100%";
                    }
                }, 250)
                break;
            }
        }
    }
}