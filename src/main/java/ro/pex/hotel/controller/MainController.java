package ro.pex.hotel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @Autowired
    private JavaMailSender javaMailSender;

    @GetMapping("/login")
    public String login() {
        return "login";
   }

   @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/send")
    public void send() {
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo("petru.csokany@gmail.com");
        msg.setSubject("Test");
        msg.setText("Hello World");
        javaMailSender.send(msg);
        System.out.println("Email send");
    }
}
