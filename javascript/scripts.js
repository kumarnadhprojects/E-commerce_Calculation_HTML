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

if (qty1El.textContent == "0") {
    noItemsEl.textContent = "No items";
    productCart1El.classList.add("d-none");
} if (qty2El.textContent == "0") {
    noItemsEl.textContent = "No items";
    productCart2El.classList.add("d-none");
}if (qty3El.textContent == "0") {
    noItemsEl.textContent = "No items";
    productCart3El.classList.add("d-none");
}

// 10Ml button
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
            rupees1El.textContent = 10 * updatedValueqt1;
            amountEl.textContent = parseInt(rupees2Item2El.textContent) + parseInt(rupees3Item2El.textContent) + parseInt(rupees1Item2El.textContent) + parseInt(rupees1El.textContent) + parseInt(rupees2El.textContent) + parseInt(rupees3El.textContent);
        }
    }
}

// 15Ml button
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
model2clickbtn1El.onclick = function () {
    onIncrease2El.onclick = function () {
        let previousValue5 = spam5El.textContent;
        let previousValueqt2 = qty2El.textContent;
        let updatedValue5 = parseInt(previousValue5) + 1;
        let updatedValueqt2 = parseInt(previousValueqt2) + 1;
        spam5El.textContent = updatedValue5;
        qty2El.textContent = updatedValueqt2;
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
model2clickbtn2El.onclick = function () {
    onIncrease2Section2El.onclick = function () {
        let previousValue5 = spam5Section2El.textContent;
        let previousValueqtItem2 = qty2Item2El.textContent;
        let updatedValue5 = parseInt(previousValue5) + 1;
        let previousValueqtItem2El = parseInt(previousValueqtItem2) + 1;
        spam5Section2El.textContent = updatedValue5;
        qty2Item2El.textContent = previousValueqtItem2El;

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
model3clickbtn1El.onclick = function () {
    onIncrease3El.onclick = function () {
        let previousValue6 = spam6El.textContent;
        let previousValueqt3 = qty3El.textContent;
        let updatedValue6 = parseInt(previousValue6) + 1;
        let updatedValueqt3 = parseInt(previousValueqt3) + 1;
        spam6El.textContent = updatedValue6;
        qty3El.textContent = updatedValueqt3;
        console.log(product3El.textContent)
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


// ------ Upload files functionality in javascript

const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon"
];

function validFileType(file) {
    return fileTypes.includes(file.type);
}

// First image display

function updateImageDisplay() {
    while (preview.firstChild) {
        preview.removeChild(preview.firstChild);
    }

    const curFiles = input.files;
    if (curFiles.length === 0) {
        const para = document.createElement('p');
        preview.appendChild(para);
    } else {
        const list = document.createElement('ol');
        list.classList.add("list-unstyled")
        preview.appendChild(list);

        for (const file of curFiles) {
            const listItem = document.createElement('li');
            const para = document.createElement('p');
            if (validFileType(file)) {
                modelImageEl.src = URL.createObjectURL(file);
                const image = document.createElement('img');
                image.src = URL.createObjectURL(file);
                image.classList.add('img-fluid', 'img-border');
                listItem.appendChild(image);
                listItem.appendChild(para);
            } else {
                listItem.appendChild(para);
            }

            list.appendChild(listItem);
        }
    }
}

// Secound image display

function updateImageDisplay2() {
    while (preview2.firstChild) {
        preview2.removeChild(preview2.firstChild);
    }

    const curFiles = imgupload2El.files;
    if (curFiles.length === 0) {
        const para = document.createElement('p');
        preview2.appendChild(para);
    } else {
        const list = document.createElement('ol');
        list.classList.add("list-unstyled")
        preview2.appendChild(list);

        for (const file of curFiles) {
            const listItem = document.createElement('li');
            const para = document.createElement('p');
            if (validFileType(file)) {
                modelImage1El.src = URL.createObjectURL(file);
                const image = document.createElement('img');
                image.src = URL.createObjectURL(file);
                image.classList.add('img-fluid', 'img-border');
                listItem.appendChild(image);
                listItem.appendChild(para);
            } else {
                listItem.appendChild(para);
            }

            list.appendChild(listItem);
        }
    }
}

// Third image display

function updateImageDisplay3() {
    while (preview3.firstChild) {
        preview3.removeChild(preview3.firstChild);
    }

    const curFiles3 = imgupload3El.files;

    if (curFiles3.length === 0) {
        const para = document.createElement('p');
        preview3.appendChild(para);
    } else {
        const list = document.createElement('ol');
        list.classList.add("list-unstyled")
        preview3.appendChild(list);

        for (const file of curFiles3) {
            const listItem = document.createElement('li');
            const para = document.createElement('p');
            if (validFileType(file)) {
                modelImage2El.src = URL.createObjectURL(file);
                const image = document.createElement('img');
                image.src = URL.createObjectURL(file);
                image.classList.add('img-fluid', 'img-border');
                listItem.appendChild(image);
                listItem.appendChild(para);
            } else {
                listItem.appendChild(para);
            }

            list.appendChild(listItem);
        }
    }
}


const input = document.querySelector('.imgupload');
const preview = document.querySelector('.preview');

const imgupload2El = document.querySelector('.imgupload2');
const preview2 = document.querySelector('.preview2');

const imgupload3El = document.querySelector('.imgupload3');
const preview3 = document.querySelector('.preview3');

input.addEventListener('change', updateImageDisplay);
imgupload2El.addEventListener('change', updateImageDisplay2);
imgupload3El.addEventListener('change', updateImageDisplay3);

// Jquery file upload function

$('#OpenImgUpload').click(function () {
    $('#imgupload').trigger('click');
});


$('#OpenImgUpload2').click(function () {
    $('#imgupload2').trigger('click');
});

$('#OpenImgUpload3').click(function () {
    $('#imgupload3').trigger('click');
});
