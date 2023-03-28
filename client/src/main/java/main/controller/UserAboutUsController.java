package main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@CrossOrigin
public class UserAboutUsController {
    @GetMapping("/user/aboutUs")
    public String showUserAboutUsPage() {
        return "userAboutUs";
    }
}
