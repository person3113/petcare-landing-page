package com.example.demo.service;

import com.example.demo.dto.ReviewRequestDto;
import com.example.demo.entity.Feature;
import com.example.demo.entity.Member;
import com.example.demo.entity.Review;
import com.example.demo.repository.FeatureRepository;
import com.example.demo.repository.MemberRepository;
import com.example.demo.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class LandingService {

    private final FeatureRepository featureRepository;
    private final MemberRepository memberRepository;
    private final ReviewRepository reviewRepository;

    public List<Feature> getAllFeatures() {
        return featureRepository.findAll();
    }

    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    @Transactional
    public void saveReview(ReviewRequestDto requestDto) {
        Review review = new Review();
        review.setAuthorName(requestDto.getAuthorName());
        review.setContent(requestDto.getContent());
        reviewRepository.save(review);
    }
}
