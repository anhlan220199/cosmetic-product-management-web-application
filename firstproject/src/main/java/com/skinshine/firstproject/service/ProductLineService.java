package com.skinshine.firstproject.service;

import com.skinshine.firstproject.model.ProductLine;
import com.skinshine.firstproject.repository.ProductLineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductLineService {
    @Autowired
    private ProductLineRepository productLineRepository;

    public List<ProductLine> getAllProductLines() {
        return productLineRepository.findAll();
    }


}
