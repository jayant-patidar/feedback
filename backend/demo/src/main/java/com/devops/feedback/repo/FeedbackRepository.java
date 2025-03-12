package com.devops.feedback.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devops.feedback.model.Feedback;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {}
