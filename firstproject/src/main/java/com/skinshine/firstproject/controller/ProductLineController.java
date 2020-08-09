package com.skinshine.firstproject.controller;

import com.skinshine.firstproject.model.ProductLine;
import com.skinshine.firstproject.service.ProductLineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/productlines")
@RestController
public class ProductLineController {
    @Autowired
    private ProductLineService productLineService;

    @GetMapping("/getAll")
    public ResponseEntity<List<ProductLine>> getAllProductLines() {
        return ResponseEntity.ok(productLineService.getAllProductLines());
    }
}
