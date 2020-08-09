package com.skinshine.firstproject.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;

@Entity
@Table(name = "productlines")
public class ProductLine implements Serializable {
    static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String productLineCode;
    private String productLineName;

    public ProductLine() {
    }

    public ProductLine(@NotBlank String productLineName) {
        this.productLineName = productLineName;
    }

    public String getProductLineCode() {
        return productLineCode;
    }

    public void setProductLineCode(String productLineCode) {
        this.productLineCode = productLineCode;
    }

    public String getProductLineName() {
        return productLineName;
    }

    public void setProductLineName(String productLineName) {
        this.productLineName = productLineName;
    }
}

