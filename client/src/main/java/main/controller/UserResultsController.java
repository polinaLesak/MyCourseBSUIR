package main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@CrossOrigin
public class UserResultsController {
    @GetMapping("/user/results")
    public String showUserResultsPage() {
        return "userResults";
    }
}
