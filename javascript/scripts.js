spam1El = document.getElementById('spam1');
spam2El = document.getElementById('spam2');
spam3El = document.getElementById('spam3');
spam4El = document.getElementById('spam4');
spam5El = document.getElementById('spam5');
spam6El = document.getElementById('spam6');
noItemsEl = document.getElementById('no-items');
qty1El = document.getElementById('qty1');
qty2El = document.getElementById('qty2');
qty3El = document.getElementById('qty3');
cheackoutEl = document.getElementById('cheackout');
productCart1El = document.getElementById('product-cart1');
productCart2El = document.getElementById('product-cart2');
productCart3El = document.getElementById('product-cart3');
product1El = document.getElementById('product1');
product2El = document.getElementById('product2');
product3El = document.getElementById('product3');
rupees1El = document.getElementById('rupees1');
rupees2El = document.getElementById('rupees2');
rupees3El = document.getElementById('rupees3');
amountEl = document.getElementById('amount');
modelclickbtn1El = document.getElementById('modelclickbtn1');
modelclickbtn2El = document.getElementById('modelclickbtn2');
model2clickbtn1El = document.getElementById('model2clickbtn1');
model2clickbtn2El = document.getElementById('model2clickbtn2');
model3clickbtn1El = document.getElementById('model3clickbtn1');
model3clickbtn2El = document.getElementById('model3clickbtn2');

if (qty1El.textContent == "0") {
    noItemsEl.textContent = "No items";
    productCart1El.classList.add("d-none");
} if (qty2El.textContent == "0") {
    noItemsEl.textContent = "No items";
    productCart2El.classList.add("d-none");
} if (qty3El.textContent == "0") {
    noItemsEl.textContent = "No items";
    productCart3El.classList.add("d-none");
}

function onIncrease() {
    let previousValue = spam1El.textContent;
    let previousValue4 = spam4El.textContent;
    let previousValueqt1 = qty1El.textContent;
    let updatedValue = parseInt(previousValue) + 1;
    let updatedValue4 = parseInt(previousValue4) + 1;
    let updatedValueqt1 = parseInt(previousValueqt1) + 1;
    spam1El.textContent = updatedValue;
    spam4El.textContent = updatedValue4;
    qty1El.textContent = updatedValueqt1;
    modelclickbtn1El.onclick = function () {
        if (qty1El.textContent == "0") {
            rupees1El.textContent = "0";
            product1El.textContent = "0";
            amountEl.textContent = parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        } else {
            rupees1El.textContent = 15 * updatedValueqt1;
            product1El.textContent = "10ml 1 item: Rs 15";
            amountEl.textContent = parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        }
    }

    modelclickbtn2El.onclick = function () {
        if (qty1El.textContent == "0") {
            rupees1El.textContent = "0";
            product1El.textContent = "0";
            amountEl.textContent = parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        } else {
            rupees1El.textContent = 20 * updatedValueqt1;
            product1El.textContent = "15ml 1 item: Rs 20";
            amountEl.textContent = parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        }
    }

    if (qty1El.textContent > "0") {
        noItemsEl.textContent = "";
        productCart1El.classList.add("d-block");
    }
}

function onDecrease() {
    let previousValue = spam1El.textContent;
    let previousValue4 = spam4El.textContent;
    let previousValueqt1 = qty1El.textContent;
    let updatedValue = parseInt(previousValue) - 1;
    let updatedValue4 = parseInt(previousValue4) - 1;
    let updatedValueqt1 = parseInt(previousValueqt1) - 1;
    if (spam1El.textContent > "0" && spam4El.textContent > "0" && qty1El.textContent > "0") {
        spam1El.textContent = updatedValue;
        spam4El.textContent = updatedValue4;
        qty1El.textContent = updatedValueqt1;
        rupees1El.textContent = buttonInmodel1 * updatedValueqt1;
        amountEl.textContent = parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
    }
}

function onIncrease2() {
    let previousValue = spam2El.textContent;
    let previousValue5 = spam5El.textContent;
    let previousValueqt2 = qty2El.textContent;
    let updatedValue = parseInt(previousValue) + 1;
    let updatedValue5 = parseInt(previousValue5) + 1;
    let updatedValueqt2 = parseInt(previousValueqt2) + 1;
    spam2El.textContent = updatedValue;
    spam5El.textContent = updatedValue5;
    qty2El.textContent = updatedValueqt2;
    model2clickbtn1El.onclick = function () {
        if (qty2El.textContent == "0") {
            rupees2El.textContent = "0";
            product2El.textContent = "0";
            amountEl.textContent = parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        } else {
            rupees2El.textContent = 30 * updatedValueqt2;
            product2El.textContent = "20ml 1 item: Rs 30";
            amountEl.textContent = parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        }
    }

    model2clickbtn2El.onclick = function () {
        if (qty2El.textContent == "0") {
            rupees2El.textContent = "0";
            product2El.textContent = "0";
            amountEl.textContent = parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        } else {
            rupees2El.textContent = 50 * updatedValueqt2;
            product2El.textContent = "30ml 1 item: Rs 50";
            amountEl.textContent = parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        }
    }

    if (qty2El.textContent > "0") {
        noItemsEl.textContent = "";
        productCart2El.classList.add("d-block");
    }
}

function onDecrease2() {
    let previousValue = spam2El.textContent;
    let previousValue5 = spam5El.textContent;
    let previousValueqt2 = qty2El.textContent;
    let updatedValue = parseInt(previousValue) - 1;
    let updatedValue5 = parseInt(previousValue5) - 1;
    let updatedValueqt2 = parseInt(previousValueqt2) - 1;
    if (spam2El.textContent > "0" && spam5El.textContent > "0" && qty2El.textContent > "0") {
        spam2El.textContent = updatedValue;
        spam5El.textContent = updatedValue5;
        qty2El.textContent = updatedValueqt2;
        rupees2El.textContent = 10 * updatedValueqt2;
        amountEl.textContent = parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
    }
}

function onIncrease3() {
    let previousValue = spam3El.textContent;
    let previousValue6 = spam6El.textContent;
    let previousValueqt3 = qty3El.textContent;
    let updatedValue = parseInt(previousValue) + 1;
    let updatedValue6 = parseInt(previousValue6) + 1;
    let updatedValueqt3 = parseInt(previousValueqt3) + 1;
    spam3El.textContent = updatedValue;
    spam6El.textContent = updatedValue6;
    qty3El.textContent = updatedValueqt3;
    model3clickbtn1El.onclick = function () {
        if (qty3El.textContent == "0") {
            rupees3El.textContent = "0";
            product3El.textContent = "0";
            amountEl.textContent = parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        } else {
            rupees3El.textContent = 80 * updatedValueqt3;
            product3El.textContent = "40ml 1 item: Rs 80";
            amountEl.textContent = parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        }
    }

    model3clickbtn2El.onclick = function () {
        if (qty3El.textContent == "0") {
            rupees3El.textContent = "0";
            product3El.textContent = "0";
            amountEl.textContent = parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        } else {
            rupees3El.textContent = 100 * updatedValueqt3;
            product3El.textContent = "50ml 1 item: Rs 100";
            amountEl.textContent = parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        }
    }
    if (qty3El.textContent > "0") {
        noItemsEl.textContent = "";
        productCart3El.classList.add("d-block");
    }
}

function onDecrease3() {
    let previousValue = spam3El.textContent;
    let previousValue6 = spam6El.textContent;
    let previousValueqt3 = qty3El.textContent;
    let updatedValue = parseInt(previousValue) - 1;
    let updatedValue6 = parseInt(previousValue6) - 1;
    let updatedValueqt3 = parseInt(previousValueqt3) - 1;
    if (spam3El.textContent > "0" && spam6El.textContent > "0" && qty3El.textContent > "0") {
        spam3El.textContent = updatedValue;
        spam6El.textContent = updatedValue6;
        qty3El.textContent = updatedValueqt3;
        rupees3El.textContent = 10 * updatedValueqt3;
        amountEl.textContent = parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
    }
}


cheackoutEl.onclick = function () {
    window.location.reload();
    localStorage.setItem("subtotal", amountEl.textContent);
}

