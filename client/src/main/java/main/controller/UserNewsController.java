package main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@CrossOrigin
public class UserNewsController {
    @GetMapping("/user/news")
    public String showNewsPage() {
        return "userNews";
    }
}
