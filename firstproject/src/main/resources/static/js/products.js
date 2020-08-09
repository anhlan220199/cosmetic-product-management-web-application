
function openProductAddTab() {
    window.location.href = "add-product";
};
function fetchProductsAndDisplay() {
    $.ajax({
        url: "/products/getAll",
        method: "GET"
    }).done(function (data) {
        var str = '';
        for (var i = 0; i < data.length; i++) {
            str += "<tr id='editTabDirectBtn'>" +
                "<th scope='row'><input type='checkbox' /></th>" +
                "<td id='productCodeInTable'>" + data[i].productCode + "</td>" +
                "<td class='tm-product-name' onclick='getProductCodeToEdit(this)'>" + data[i].productName + "</td>" +
                "<td>" + data[i].productDescription + "</td>" +
                "<td>" + "<a href='#'  class='tm-product-delete-link' onclick='deleteProduct(this)'> <i class='far fa-trash-alt tm-product-delete-icon'></i> </a>" + "</td>" +
                "</tr>";
        }
        $('.productTableBody').append(str);
        console.log(data);
    });
};

function fetchProductLinesAndDisplay() {
    $.ajax({
        url: "/productlines/getAll",
        method: "GET"
    }).done(function (data) {
        var str = '';
        for (var i = 0; i < data.length; i++) {
            str += "<tr>" +
                "<td class='tm-productline-name'>" + data[i].productLineName + "</td>" +
                "<td>" + "<a href='#' class='tm-product-delete-link' onclick='deleteProductLine(this)'> <i class='far fa-trash-alt tm-product-delete-icon'></i> </a>" + "</td>" +
                "</tr>";
        }
        $('.productLineTableBody').append(str);
        console.log(data);
    });
}

$(function () {
    $("#addProductLineButton").on("click", function () {
        document.getElementById("productLineTextArea").style.display = "block";
        document.getElementById("addbtn").style.display = "block";
    });
});

function addProductLine() {
    var productLine = document.getElementById("productLineTextArea").value;
    if (productLine == "") {
        alert("Product Line field can not be empty!")
    } else {
        var str = "<tr>" +
            "<td class='tm-productline-name'>" + productLine + "</td>" +
            "<td>" + "<a href='#' class='tm-product-delete-link'> <i class='far fa-trash-alt tm-product-delete-icon'></i> </a>" + "</td>" +
            "</tr>";
        $('.productLineTableBody').append(str);
        console.log(str);
    }
    document.getElementById("productLineTextArea").style.display = "none";
    document.getElementById("addbtn").style.display = "none";
}

function deleteProduct(r) {
    if (confirm('Do you really want to delete this product?')) {
        var row = r.parentNode.parentNode;
        var productCode = row.cells[1].innerHTML;
        console.log(productCode);
        var product = {
            "productCode": productCode, "productName": "", "productLineName": "",
            "productDescription": "", "buyPrice": 0, "expireDate": 2020 / 1 / 1, "quantityImport": 0
        }
        $.ajax({
            type: "DELETE",
            contentType: "application/json",
            url: "/deleteProductByProductCode",
            data: JSON.stringify(product),
            success: function () {
                document.getElementById("productsTable").deleteRow(row.rowIndex);
                alert("Already deleted product " + productCode);
            }, error: function (error) {
                alert("error")
                //document.getElementById("productsTable").deleteRow(row.rowIndex);
                console.log(error)
            }
        })
    }
}
function deleteProductLine(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("productLineTable").deleteRow(i);
}
function getProductCodeToEdit(r) {
    var row = r.parentNode;
    var productCode = row.cells[1].innerHTML;
    //  console.log(productCode);
    $.ajax({
        type: "POST",
        url: "/createLinkToEditProduct",
        data: productCode,
        success: function (data) {
            window.location.assign(data);
        }, error: function (error) {
            console.log(error)
        }
    });
}
function SearchProductByProductName() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("productNameInput");
    filter = input.value.toUpperCase();
    console.log(filter);
    table = document.getElementById("productsTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent ;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}