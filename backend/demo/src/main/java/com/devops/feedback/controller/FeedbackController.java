package com.devops.feedback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devops.feedback.model.Feedback;
import com.devops.feedback.repo.FeedbackRepository;

@RestController
@RequestMapping("/feedback")
@CrossOrigin("*")
public class FeedbackController {
    @Autowired
    private FeedbackRepository repository;

    @PostMapping
    public Feedback submitFeedback(@RequestBody Feedback feedback) {
        return repository.save(feedback);
    }

    @GetMapping
    public List<Feedback> getAllFeedback() {
        return repository.findAll();
    }
}

