const myCartTable = document.getElementById("myCartTable");

const addToCartBtn = document.getElementsByClassName("addToCartBtn");
const removeFromCartBtn = document.getElementsByClassName("removeFromCartBtn");

const tableRow = document.getElementsByClassName("tableRow");

const tableItemImg = document.getElementsByClassName("tableItemImg");
const tableItemTitle = document.getElementsByClassName("tableItemTitle");
const tableItemPrice = document.getElementsByClassName("tableItemPrice");
const quantityTd = document.getElementsByClassName("quantityTd");
const quantityNumber = document.getElementsByClassName("quantityNumber");


myCartTable.innerHTML =
    `<table>
        <tr>
            <th colspan="2">ITEM</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
        </tr>
        <tr class="tableRow">
            <td class="tableItemImg"><img src=${STORE_RECORDS[49].images[0]} alt=""></td>
            <td class="tableItemTitle">${STORE_RECORDS[49].recordName} - ${STORE_RECORDS[49].artistName}</td>
            <td class="tableItemPrice">${STORE_RECORDS[49].price}$</td>
            <td class="quantityTd">
                <button class="addToCartBtn">+</button>
                <span class="quantityNumber">2</span> 
                <button class="removeFromCartBtn">-</button>
            </td>
        </tr>
        <tr class="tableRow">
            <td class="tableItemImg"><img src=${STORE_RECORDS[17].images[0]} alt=""></td>
            <td class="tableItemTitle">${STORE_RECORDS[17].recordName} - ${STORE_RECORDS[17].artistName}</td>
            <td class="tableItemPrice">${STORE_RECORDS[17].price}$</td>
            <td class="quantityTd">
                <button class="addToCartBtn">+</button>
                <span class="quantityNumber">3</span> 
                <button class="removeFromCartBtn">-</button>
            </td>
        </tr>
        <tr class="tableRow">
            <td class="tableItemImg"><img src=${STORE_RECORDS[36].images[0]} alt=""></td>
            <td class="tableItemTitle">${STORE_RECORDS[36].recordName} - ${STORE_RECORDS[36].artistName}</td>
            <td class="tableItemPrice">${STORE_RECORDS[36].price}$</td>
            <td class="quantityTd">
                <button class="addToCartBtn">+</button>
                <span class="quantityNumber">1</span> 
                <button class="removeFromCartBtn">-</button>
            </td>
        </tr>
    </table>
    <article id="totalAmount">
        <h1>TOTAL PRICE:</h1>
        <h2 id="totalAmountNumber"></h2>
    </article>`

const totalAmountNumber = document.getElementById("totalAmountNumber");
let cartPriceCounter = 0;

function updateTotalPrice() {
    for (let i = 0; i < tableItemPrice.length; i++) {
        cartPriceCounter += parseInt(tableItemPrice[i].innerText) * quantityNumber[i].innerText;
    }
    totalAmountNumber.innerText = `${cartPriceCounter}$`;
}
updateTotalPrice();

for (let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].onclick = () => {
        cartPriceCounter = 0;
        quantityNumber[i].innerHTML++;
        updateTotalPrice();
    }
}

for (let i = 0; i < removeFromCartBtn.length; i++) {
    removeFromCartBtn[i].onclick = () => {
        cartPriceCounter = 0;
        quantityNumber[i].innerHTML--;
        updateTotalPrice();
        if (quantityNumber[i].innerHTML <= 0) tableRow[i].style.display = "none";
        if (cartPriceCounter <= 0) myCartTable.innerHTML = `<h1 id="emptyCartMsg">Your Cart Is Empty</h1>`;
    }
}