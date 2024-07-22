package com.ssafy.fleaOn.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping(value =  {"", "/main"})
    public String forward() {
        return "index.html";
    }
}
