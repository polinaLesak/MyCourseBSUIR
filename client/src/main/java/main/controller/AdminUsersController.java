package main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@CrossOrigin
public class AdminUsersController {
    @GetMapping("/adminPanel/users")
    public String showAdminUsersPage() {
        return "adminUsers";
    }
}
