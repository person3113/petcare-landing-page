package com.example.demo.repository;

import com.example.demo.entity.Review;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ReviewRepository {

    @PersistenceContext
    private EntityManager em;

    public void save(Review review) {
        em.persist(review);
    }

    public List<Review> findAll() {
        return em.createQuery("SELECT r FROM Review r ORDER BY r.createdAt DESC", Review.class)
                .getResultList();
    }
}
