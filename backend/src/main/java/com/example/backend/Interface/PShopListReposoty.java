package com.example.backend.Interface;

import com.example.backend.Model.PersonalShopList;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface PShopListReposoty extends MongoRepository<PersonalShopList, Integer> {

    String findAllById(int i);
}