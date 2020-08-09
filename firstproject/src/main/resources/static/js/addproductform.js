$(function () {
    $("#expireDate").datepicker({dateFormat: "yy-mm-dd"}).val();
});

function changeImage() {
    document.getElementById("upload-icon").style.display = "none";
    var image = document.getElementById("image");
    image.src = URL.createObjectURL(event.target.files[0]);
}
function isEmptyInput(){
    var  isEmpty=false;
    var productCode = $('#productCode').val(),
        productName = $('#productName').val(),
        productLineName = $('#productLineName').val(),
        productDescription = $('#description').val(),
        expireDate = $('#expireDate').val(),
        buyPrice = $('#buyPrice').val(),
        quantityImport = $('#quantityImport').val();
    if(productCode==""){
        alert("Product code is empty!");
        isEmpty=true;
    }else if(productName==""){
        alert("Product Name is empty!");
        isEmpty=true;
    }else if(productLineName==""){
        alert("Product Line is empty!");
        isEmpty=true;
    }else if(productDescription==""){
        alert("Product Description is empty!");
        isEmpty=true;
    }else if(expireDate==""){
        alert("Please choose the expire date for product!");
        isEmpty=true;
    }else if(buyPrice==""){
        alert("Price of product is empty!");
        isEmpty=true;
    }else if(quantityImport==""){
        alert("Please enter the quantity import products!");
        isEmpty=true;
    }
    return isEmpty;
}
function addProduct() {
    if(!isEmptyInput()){
        var productCode = $('#productCode').val(),
            productName = $('#productName').val(),
            productLineName = $('#productLineName').val(),
            productDescription = $('#description').val(),
            expireDate = $('#expireDate').val(),
            buyPrice = $('#buyPrice').val(),
            quantityImport = $('#quantityImport').val();
        var product = {
            "productCode": productCode,
            "productName": productName,
            "productLineName": productLineName,
            "productDescription": productDescription,
            "buyPrice": buyPrice,
            "expireDate": expireDate,
            "quantityImport": quantityImport
        }
        $.ajax({
            method: "POST",
            url: "/addProduct",
            contentType: "application/json",
            data: JSON.stringify(product),
            success: function (data) {
                alert(data);
                window.location.href = "products";
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}