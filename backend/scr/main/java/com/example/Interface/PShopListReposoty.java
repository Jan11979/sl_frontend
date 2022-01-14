package com.example.backend2.Interface;


import com.example.backend2.Model.PersonalShopList;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface PShopListReposoty extends MongoRepository<PersonalShopList, Integer> {

    String findAllById(int i);
}