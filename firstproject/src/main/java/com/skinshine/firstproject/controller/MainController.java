package com.skinshine.firstproject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping(value = {"/products"})
    public String products() {
        return "products";
    }

    @GetMapping(value = {"/add-product"})
    public String getAddProductForm() {
        return "add-product";
    }

    @GetMapping(value = {"/edit-product"})
    public String getEditProductForm() {
        return "edit-product";
    }

    @GetMapping(value = {"accounts"})
    public String account() {
        return "accounts";
    }
}