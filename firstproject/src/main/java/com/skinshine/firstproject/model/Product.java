package com.skinshine.firstproject.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.sql.Date;


@Entity
@Table(name = "products")
public class Product implements Serializable {
    static final long serialVersionUID = 1L;
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private String productCode;
    private String productName;
    private String productLineName;
    private String productDescription;
    private float buyPrice;
    private int quantityImport;
    private Date expireDate;

    public Product() {
    }

    public Product(@NotBlank String productName, @NotBlank String productLineName, @NotBlank String productDescription, @NotBlank float buyPrice, @NotBlank int quantityImport, @NotBlank Date expireDate) {
        this.productName = productName;
        this.productLineName = productLineName;
        this.productDescription = productDescription;
        this.buyPrice = buyPrice;
        this.quantityImport = quantityImport;
        this.expireDate = expireDate;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductLineName() {
        return productLineName;
    }

    public void setProductLineName(String productLineName) {
        this.productLineName = productLineName;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public float getBuyPrice() {
        return buyPrice;
    }

    public void setBuyPrice(float buyPrice) {
        this.buyPrice = buyPrice;
    }

    public int getQuantityImport() {
        return quantityImport;
    }

    public void setQuantityImport(int quantityImport) {
        this.quantityImport = quantityImport;
    }

    public Date getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(Date expireDate) {
        this.expireDate = expireDate;
    }
}
