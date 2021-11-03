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
product1Item2El = document.getElementById('product1Item2');
rupees1Item2El = document.getElementById('rupees1Item2');
qty1Item2El = document.getElementById('qty1Item2');
product2Item2El = document.getElementById('product2Item2');
rupees2Item2El = document.getElementById('rupees2Item2');
qty2Item2El = document.getElementById('qty2Item2');
product3Item2El = document.getElementById('product3Item2');
rupees3Item2El = document.getElementById('rupees3Item2');
qty3Item2El = document.getElementById('qty3Item2');
modelImageEl = document.getElementById('model-image');
modelImage1El = document.getElementById('model-image2');
modelImage2El = document.getElementById('model-image3');
onIncreaseEl = document.getElementById('onIncrease');
onDecreaseEl = document.getElementById('onDecrease');
onIncrease2El = document.getElementById('onIncrease2');
onDecrease2El = document.getElementById('onDecrease2');
onIncrease3El = document.getElementById('onIncrease3');
onDecrease3El = document.getElementById('onDecrease3');
onDecreaseSection1El = document.getElementById('onDecreaseSection1');
onIncreaseSection1El = document.getElementById('onIncreaseSection1');
spam4Section1El = document.getElementById('spam4Section1');
onDecrease2Section2El = document.getElementById('onDecrease2Section2');
onIncrease2Section2El = document.getElementById('onIncrease2Section2');
spam5Section2El = document.getElementById('spam5Section2');
onDecrease3Section3El = document.getElementById('onDecrease3Section3');
onIncrease3Section3El = document.getElementById('onIncrease3Section3');
spam6Section3El = document.getElementById('spam6Section3');
productCart1Element2El = document.getElementById('product-cart1-element2');
productCart2Element2El = document.getElementById('product-cart2-element2');
productCart3Element2El = document.getElementById('product-cart3-element2');

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

// 10Ml button
if (spam4El.textContent == "0") {
    productCart1El.classList.add("visible-hidden");
}
product1El.textContent = "10ml";
modelclickbtn1El.onclick = function () {
    onIncreaseEl.onclick = function () {
        let previousValue4 = spam4El.textContent;
        let previousValueqt1 = qty1El.textContent;
        let updatedValue4 = parseInt(previousValue4) + 1;
        let updatedValueqt1 = parseInt(previousValueqt1) + 1;
        spam4El.textContent = updatedValue4;
        qty1El.textContent = updatedValueqt1;

        if (qty1El.textContent > "0") {
            noItemsEl.textContent = "";
            productCart1El.classList.add("d-block");
        }

        if (spam4El.textContent == "1"){
            productCart1El.classList.remove("visible-hidden");
        } 

        if (qty1El.textContent == "0") {
            rupees1El.textContent = "0";
            product1El.textContent = "0";
            amountEl.textContent = parseInt(rupees2Item2El.textContent) + parseInt(rupees3Item2El.textContent) + parseInt(rupees1Item2El.textContent) + parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        } else {
            rupees1El.textContent = 10 * updatedValueqt1;
            product1El.textContent = "10ml";
            amountEl.textContent = parseInt(rupees2Item2El.textContent) + parseInt(rupees3Item2El.textContent) + parseInt(rupees1Item2El.textContent) + parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        }
    }
    onDecreaseEl.onclick = function () {
        let previousValue4 = spam4El.textContent;
        let previousValueqt1 = qty1El.textContent;
        let updatedValue4 = parseInt(previousValue4) - 1;
        let updatedValueqt1 = parseInt(previousValueqt1) - 1;
        if (spam4El.textContent > "0" && qty1El.textContent > "0") {
            spam4El.textContent = updatedValue4;
            qty1El.textContent = updatedValueqt1;
            product1El.textContent = "10ml";
            rupees1El.textContent = 10 * updatedValueqt1;
            amountEl.textContent = parseInt(rupees2Item2El.textContent) + parseInt(rupees3Item2El.textContent) + parseInt(rupees1Item2El.textContent) + parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        }
    }
}

// 15Ml button
if (spam4Section1El.textContent == "0") {
    productCart1Element2El.classList.add("visible-hidden");
}
product1Item2El.textContent = "15ml";
modelclickbtn2El.onclick = function () {
    onIncreaseSection1El.onclick = function () {
        let previousValue4 = spam4Section1El.textContent;
        let updatedValueqtItem21 = qty1Item2El.textContent;
        let updatedValue4 = parseInt(previousValue4) + 1;
        let updatedValueqtItemEl1 = parseInt(updatedValueqtItem21) + 1;
        spam4Section1El.textContent = updatedValue4;
        qty1Item2El.textContent = updatedValueqtItemEl1;

        if (qty1Item2El.textContent > "0") {
            noItemsEl.textContent = "";
            productCart1El.classList.add("d-block");
        }

        if (spam4Section1El.textContent == "1"){
            productCart1Element2El.classList.remove("visible-hidden");
        }

        if (qty1Item2El.textContent == "0") {
            rupees1Item2El.textContent = "0";
            qty1Item2El.textContent = "0";
            amountEl.textContent = parseInt(rupees2Item2El.textContent) + parseInt(rupees3Item2El.textContent) + parseInt(rupees1Item2El.textContent) + parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        } else {
            rupees1Item2El.textContent = 15 * updatedValueqtItemEl1;
            product1Item2El.textContent = "15ml";
            amountEl.textContent = parseInt(rupees2Item2El.textContent) + parseInt(rupees3Item2El.textContent) + parseInt(rupees1Item2El.textContent) + parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        }
    }

    onDecreaseSection1El.onclick = function () {
        let previousValue4 = spam4Section1El.textContent;
        let updatedValueqtItem21 = qty1Item2El.textContent;
        let updatedValue4 = parseInt(previousValue4) - 1;
        let updatedValueqtItemEl1 = parseInt(updatedValueqtItem21) - 1;
        if (spam4Section1El.textContent > "0" && qty1Item2El.textContent > "0") {
            spam4Section1El.textContent = updatedValue4;
            qty1Item2El.textContent = updatedValueqtItemEl1;
            rupees1Item2El.textContent = 15 * updatedValueqtItemEl1;
            amountEl.textContent = parseInt(rupees2Item2El.textContent) + parseInt(rupees3Item2El.textContent) + parseInt(rupees1Item2El.textContent) + parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        }
    }
}

// 20Ml button
if (spam5Section2El.textContent == "0") {
    productCart2Element2El.classList.add("visible-hidden");
}
product2El.textContent = "20ml";
model2clickbtn1El.onclick = function () {
    onIncrease2El.onclick = function () {
        let previousValue5 = spam5El.textContent;
        let previousValueqt2 = qty2El.textContent;
        let updatedValue5 = parseInt(previousValue5) + 1;
        let updatedValueqt2 = parseInt(previousValueqt2) + 1;
        spam5El.textContent = updatedValue5;
        qty2El.textContent = updatedValueqt2;

        if(spam5El.textContent == "1"){
            productCart2El.classList.remove("visible-hidden");
        }
        console.log(spam5El.textContent)

        if (qty2El.textContent == "0") {
            rupees2El.textContent = "0";
            product2El.textContent = "0";
            amountEl.textContent = parseInt(rupees2Item2El.textContent) + parseInt(rupees3Item2El.textContent) + parseInt(rupees1Item2El.textContent) + parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        } else {
            rupees2El.textContent = 20 * updatedValueqt2;
            product2El.textContent = "20ml";
            amountEl.textContent = parseInt(rupees2Item2El.textContent) + parseInt(rupees3Item2El.textContent) + parseInt(rupees1Item2El.textContent) + parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        }
        if (qty2El.textContent > "0") {
            noItemsEl.textContent = "";
            productCart2El.classList.add("d-block");
        }
    }
    onDecrease2El.onclick = function () {
        let previousValue5 = spam5El.textContent;
        let previousValueqt2 = qty2El.textContent;
        let updatedValue5 = parseInt(previousValue5) - 1;
        let updatedValueqt2 = parseInt(previousValueqt2) - 1;
        if (spam5El.textContent > "0" && qty2El.textContent > "0") {
            spam5El.textContent = updatedValue5;
            qty2El.textContent = updatedValueqt2;
            rupees2El.textContent = 20 * updatedValueqt2;
            amountEl.textContent = parseInt(rupees2Item2El.textContent) + parseInt(rupees3Item2El.textContent) + parseInt(rupees1Item2El.textContent) + parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        }
    }
}

// 30Ml button
if(spam5El.textContent == "0"){
    productCart2El.classList.add("visible-hidden");
}
product2Item2El.textContent = "30ml";
model2clickbtn2El.onclick = function () {
    onIncrease2Section2El.onclick = function () {
        let previousValue5 = spam5Section2El.textContent;
        let previousValueqtItem2 = qty2Item2El.textContent;
        let updatedValue5 = parseInt(previousValue5) + 1;
        let previousValueqtItem2El = parseInt(previousValueqtItem2) + 1;
        spam5Section2El.textContent = updatedValue5;
        qty2Item2El.textContent = previousValueqtItem2El;

        if (spam5Section2El.textContent == "1") {
            productCart2Element2El.classList.remove("visible-hidden");
        }

        if (qty2Item2El.textContent > "0") {
            noItemsEl.textContent = "";
            productCart2El.classList.add("d-block");
        }

        if (qty2Item2El.textContent == "0") {
            rupees2Item2El.textContent = "0";
            product2Item2El.textContent = "0";
            amountEl.textContent = parseInt(rupees2Item2El.textContent) + parseInt(rupees3Item2El.textContent) + parseInt(rupees1Item2El.textContent) + parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        } else {
            rupees2Item2El.textContent = 30 * previousValueqtItem2El;
            product2Item2El.textContent = "30ml";
            amountEl.textContent = parseInt(rupees2Item2El.textContent) + parseInt(rupees3Item2El.textContent) + parseInt(rupees1Item2El.textContent) + parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        }
    }
    onDecrease2Section2El.onclick = function () {
        let previousValue5 = spam5Section2El.textContent;
        let previousValueqt2 = qty2Item2El.textContent;
        let updatedValue5 = parseInt(previousValue5) - 1;
        let updatedValueqt2 = parseInt(previousValueqt2) - 1;
        if (spam5Section2El.textContent > "0" && qty2Item2El.textContent > "0") {
            spam5Section2El.textContent = updatedValue5;
            qty2Item2El.textContent = updatedValueqt2;
            rupees2Item2El.textContent = 30 * updatedValueqt2;
            amountEl.textContent = parseInt(rupees2Item2El.textContent) + parseInt(rupees3Item2El.textContent) + parseInt(rupees1Item2El.textContent) + parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        }
    }
}
// 40Ml button
if (spam6El.textContent == "0"){
    productCart3El.classList.add("visible-hidden")
}
product3El.textContent = "40ml";
model3clickbtn1El.onclick = function () {
    onIncrease3El.onclick = function () {
        let previousValue6 = spam6El.textContent;
        let previousValueqt3 = qty3El.textContent;
        let updatedValue6 = parseInt(previousValue6) + 1;
        let updatedValueqt3 = parseInt(previousValueqt3) + 1;
        spam6El.textContent = updatedValue6;
        qty3El.textContent = updatedValueqt3;

        if (qty3El.textContent == "0") {
            rupees3El.textContent = "0";
            product3El.textContent = "0";
            amountEl.textContent = parseInt(rupees2Item2El.textContent) + parseInt(rupees3Item2El.textContent) + parseInt(rupees1Item2El.textContent) + parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        } else {
            rupees3El.textContent = 40 * updatedValueqt3;
            product3El.textContent = "40ml";
            amountEl.textContent = parseInt(rupees2Item2El.textContent) + parseInt(rupees3Item2El.textContent) + parseInt(rupees1Item2El.textContent) + parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        }
        if (qty3El.textContent > "0") {
            noItemsEl.textContent = "";
            productCart3El.classList.add("d-block");
        }
        if (spam6El.textContent == "1"){
            productCart3El.classList.remove("visible-hidden")
        }

    }
    onDecrease3El.onclick = function () {
        let previousValue6 = spam6El.textContent;
        let previousValueqt3 = qty3El.textContent;
        let updatedValue6 = parseInt(previousValue6) - 1;
        let updatedValueqt3 = parseInt(previousValueqt3) - 1;
        if (spam6El.textContent > "0" && qty3El.textContent > "0") {
            spam6El.textContent = updatedValue6;
            qty3El.textContent = updatedValueqt3;
            rupees3El.textContent = 40 * updatedValueqt3;
            amountEl.textContent = parseInt(rupees2Item2El.textContent) + parseInt(rupees3Item2El.textContent) + parseInt(rupees1Item2El.textContent) + parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        }
    }
}

// 50Ml button
if (spam6Section3El.textContent == "0"){
    productCart3Element2El.classList.add("visible-hidden")
}
product3Item2El.textContent = "50ml";
model3clickbtn2El.onclick = function () {
    onIncrease3Section3El.onclick = function () {
        let previousValue6 = spam6Section3El.textContent;
        let previousValueqt3 = qty3Item2El.textContent;
        let updatedValue6 = parseInt(previousValue6) + 1;
        let updatedValueqt3 = parseInt(previousValueqt3) + 1;
        spam6Section3El.textContent = updatedValue6;
        qty3Item2El.textContent = updatedValueqt3;

        if (qty3Item2El.textContent > "0") {
            noItemsEl.textContent = "";
            productCart3El.classList.add("d-block");
        }

        if (qty3Item2El.textContent == "0") {
            rupees3Item2El.textContent = "0";
            product3Item2El.textContent = "0";
            amountEl.textContent = parseInt(rupees2Item2El.textContent) + parseInt(rupees3Item2El.textContent) + parseInt(rupees1Item2El.textContent) + parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        } else {
            rupees3Item2El.textContent = 50 * updatedValueqt3;
            product3Item2El.textContent = "50ml";
            amountEl.textContent = parseInt(rupees2Item2El.textContent) + parseInt(rupees3Item2El.textContent) + parseInt(rupees1Item2El.textContent) + parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        }
        if (spam6Section3El.textContent == "1"){
            productCart3Element2El.classList.remove("visible-hidden")
        }
    }
    onDecrease3Section3El.onclick = function () {
        let previousValue6 = spam6Section3El.textContent;
        let previousValueqt3 = qty3Item2El.textContent;
        let updatedValue6 = parseInt(previousValue6) - 1;
        let updatedValueqt3 = parseInt(previousValueqt3) - 1;
        if (spam6Section3El.textContent > "0" && qty3Item2El.textContent > "0") {
            spam6Section3El.textContent = updatedValue6;
            qty3Item2El.textContent = updatedValueqt3;
            rupees3Item2El.textContent = 50 * updatedValueqt3;
            amountEl.textContent = parseInt(rupees2Item2El.textContent) + parseInt(rupees3Item2El.textContent) + parseInt(rupees1Item2El.textContent) + parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        }
    }
}

cheackoutEl.onclick = function () {
    window.location.reload();
    localStorage.setItem("subtotal", amountEl.textContent);
}

// Jquery file upload function

$('.OpenImgUpload').click(function () {
    $('.imgupload').trigger('click');
});


$('.OpenImgUpload2').click(function () {
    $('.imgupload2').trigger('click');
});

$('.OpenImgUpload3').click(function () {
    $('.imgupload3').trigger('click');
});

// File upload Functionality

// First image
function readURL1(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
            $('#model-image')
                .attr('src', e.target.result)
        };

        reader.readAsDataURL(input.files[0]);
    }
}

// Secound image
function readURL2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah1')
                .attr('src', e.target.result)
            $('#model-image2')
                .attr('src', e.target.result)
        };

        reader.readAsDataURL(input.files[0]);
    }
}

// Third image
function readURL3(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah2')
                .attr('src', e.target.result)
            $('#model-image3')
                .attr('src', e.target.result)
        };

        reader.readAsDataURL(input.files[0]);
    }
}



