package com.pratiksha.portfolio.controller;

import com.pratiksha.portfolio.model.ContactMessage;
import com.pratiksha.portfolio.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ContactController {

    @Autowired
    private ContactMessageRepository contactMessageRepository;

    @PostMapping("/contact")
    public ResponseEntity<?> submitMessage(@RequestBody ContactMessage message) {
        if (message.getName() == null || message.getName().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Name is required");
        }
        if (message.getEmail() == null || message.getEmail().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Email is required");
        }
        if (message.getMessage() == null || message.getMessage().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Message is required");
        }

        try {
            ContactMessage savedMessage = contactMessageRepository.save(message);
            System.out.println("New message received from " + savedMessage.getName() + " (" + savedMessage.getEmail() + ")");
            return new ResponseEntity<>(savedMessage, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error saving message to database: " + e.getMessage());
        }
    }
}
