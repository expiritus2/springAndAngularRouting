package com.testsecurity2.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RoutesController {

    @RequestMapping("/login")
    public String index(){
        System.out.println("tut");
        return "forward:/index.html";
    }
}
