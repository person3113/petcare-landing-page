package com.example.demo.controller;

import com.example.demo.dto.ReviewRequestDto;
import com.example.demo.entity.Feature;
import com.example.demo.entity.Member;
import com.example.demo.entity.Review;
import com.example.demo.service.LandingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class LandingController {

    private final LandingService landingService;

    @GetMapping("/features")
    public ResponseEntity<List<Feature>> getFeatures() {
        List<Feature> features = landingService.getAllFeatures();
        return ResponseEntity.ok(features);
    }

    @GetMapping("/members")
    public ResponseEntity<List<Member>> getMembers() {
        List<Member> members = landingService.getAllMembers();
        return ResponseEntity.ok(members);
    }

    @GetMapping("/reviews")
    public ResponseEntity<List<Review>> getReviews() {
        List<Review> reviews = landingService.getAllReviews();
        return ResponseEntity.ok(reviews);
    }

    @PostMapping("/reviews")
    public ResponseEntity<String> createReview(@RequestBody ReviewRequestDto requestDto) {
        landingService.saveReview(requestDto);
        return ResponseEntity.ok("리뷰 저장 완료");
    }
}
