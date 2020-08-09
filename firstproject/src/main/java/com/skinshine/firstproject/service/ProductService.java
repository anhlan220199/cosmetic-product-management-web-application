package com.skinshine.firstproject.service;

import com.skinshine.firstproject.model.Product;
import com.skinshine.firstproject.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product addNewProduct(Product product) {
        return productRepository.save(product);
    }

    public Product getProductByProductCode(String productCode) {
        System.out.println(productCode);
        return productRepository.findByProductCode(productCode);
    }

    public String CreateLinkToEditProduct(String productCode) {
        return "http://localhost:8080/edit-product" + "?productCode=" + productCode;
    }

    public void deleteProductByProductCode(String productCode) {
        productRepository.deleteByProductCode(productCode);
    }

    public void updateProduct(Product product) {
        productRepository.save(product);
    }
}
