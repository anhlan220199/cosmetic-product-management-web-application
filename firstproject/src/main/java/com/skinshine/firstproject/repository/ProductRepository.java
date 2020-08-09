package com.skinshine.firstproject.repository;

import com.skinshine.firstproject.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {
    @Override
    List<Product> findAll();

    Product findByProductCode(String productCode);

    void deleteByProductCode(String productCode);

}
