package com.skinshine.firstproject.controller;

import com.skinshine.firstproject.model.Product;
import com.skinshine.firstproject.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping("products/getAll")
    public ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @PostMapping("/addProduct")
    public ResponseEntity<String> addNewProduct(@RequestBody Product product) {
        productService.addNewProduct(product);
        return ResponseEntity.ok("Product is added!");
    }

    @PostMapping("/createLinkToEditProduct")
    public ResponseEntity<String> createLinkToEditProduct(@RequestBody String productCode) {
        return ResponseEntity.ok(productService.CreateLinkToEditProduct(productCode));
    }

    @DeleteMapping("/deleteProductByProductCode")
    public ResponseEntity<Void> deleteProductByProductCode(@RequestBody Product product) {
        productService.deleteProductByProductCode(product.getProductCode());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/editProduct")
    public ResponseEntity<String> editProductByproductCode(@RequestBody Product product) {
        productService.updateProduct(product);
        return ResponseEntity.ok("Update successfully!");
    }

    @PostMapping("/getProductByProductCode")
    public ResponseEntity<Product> getProductByProductCode(@RequestBody Product product) {
        return ResponseEntity.ok(productService.getProductByProductCode(product.getProductCode()));
    }


}
