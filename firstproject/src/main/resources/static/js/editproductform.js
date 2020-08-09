$(function () {
    $("#expireDateEdit").datepicker({dateFormat: "yy-mm-dd"}).val();
});

function editImage() {
    var image = document.getElementById("editedImage");
    image.src = URL.createObjectURL(event.target.files[0]);
}
function getProductCodeFromCurrentURL(){
    var currentURL= window.location.href;
    var start=currentURL.indexOf("=");
    console.log(start);
    var productCode= currentURL.substring(start+1,currentURL.length-1);
    console.log(productCode);
    return productCode;
}

function fetchProductToEdit(productCode) {
    var product = {
        productCode: productCode,
        productName: "",
        productLineName: "",
        productDescription: "",
        buyPrice: 0,
        expireDate: 2020-01-01,
        quantityImport: 0,
    };
    $.ajax({
        type: "POST",
        contentType:"application/json",
        url: "/getProductByProductCode",
        dataType:"json",
        data: JSON.stringify(product),
        success: function (data) {
            console.log(data);
            document.getElementById("productNameEdit").value = data.productName;
            document.getElementById("productCodeEdit").value = data.productCode;
            document.getElementById("productLineNameEdit").value = data.productLineName;
            document.getElementById("descriptionEdit").innerHTML = data.productDescription;
            document.getElementById("buyPriceEdit").value = data.buyPrice;
            document.getElementById("expireDateEdit").value = data.expireDate;
            document.getElementById("quantityImportEdit").value = data.quantityImport;

        }, error: function (error) {
            console.log(error)
        }
    });
}
function isEmptyInput(){
    var  isEmpty=false;
    var productCode = $('#productCodeEdit').val(),
        productName = $('#productNameEdit').val(),
        productLineName = $('#productLineNameEdit').val(),
        productDescription = $('#descriptionEdit').val(),
        expireDate = $('#expireDateEdit').val(),
        buyPrice = $('#buyPriceEdit').val(),
        quantityImport = $('#quantityImportEdit').val();
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
function editProduct() {
    if(!isEmptyInput()){
        var productCode = $('#productCodeEdit').val(),
            productName = $('#productNameEdit').val(),
            productLineName = $('#productLineNameEdit').val(),
            productDescription = $('#descriptionEdit').val(),
            expireDate = $('#expireDateEdit').val(),
            buyPrice = $('#buyPriceEdit').val(),
            quantityImport = $('#quantityImportEdit').val();
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
            url: "/editProduct",
            contentType: "application/json",
            data: JSON.stringify(product),
            success: function (data){
                alert(data);
                window.location.href = "products";
            },error: function (error) {
                console.log(error);
            }
        });
    }
}