let container1980sPage = document.getElementById("container");
let recordCard = document.getElementsByClassName("recordCard");
let recordImages = document.getElementsByClassName("recordImages");


for (let i = 0; i < STORE_RECORDS.length; i++) {
    if (STORE_RECORDS[i].category == "1980s") {
        container1980sPage.innerHTML +=
            `<article class="recordCard">
                <div class="recordInfo">
                <h2>${STORE_RECORDS[i].artistName}</h2>
                <h1>${STORE_RECORDS[i].recordName}</h1>
                    <p>${STORE_RECORDS[i].description}</p>
                    <h2>${STORE_RECORDS[i].price}$</h2>
                    <div class="cardBtns">
                       <button class="addToCartBtn">Add To Cart</button>
                       <button class="removeFromCartBtn">Remove From Cart</button>
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