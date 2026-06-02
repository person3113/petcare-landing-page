package com.example.demo.repository;

import com.example.demo.entity.Feature;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FeatureRepository {

    @PersistenceContext
    private EntityManager em;

    public List<Feature> findAll() {
        return em.createQuery("SELECT f FROM Feature f", Feature.class)
                .getResultList();
    }
}
