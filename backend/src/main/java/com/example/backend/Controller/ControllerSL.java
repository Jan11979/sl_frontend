package com.example.sl_backend.Controller;

import com.example.backend.Interface.PShopListReposoty;
import com.example.backend.Model.ListNameItem;
import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.AbstractList;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;




@RestController
@RequestMapping("sl")
//@RequestMapping("${app.request.mapping.api}")
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class ControllerSL {

//    ItemService itemService = new ItemService();

//    @Autowired
//    ShopListRepository repositorysl;
//    @Autowired
//    AllShopListItemRepository repositoryASLI;
    @Autowired
    PShopListReposoty repository;


    @GetMapping(path = "/hallo")
    public String getHallo() {

        return "miau1";
    }

    @GetMapping(path = "/ListName")
    public List<ListNameItem> getAllListName(){
        List<ListNameItem> tmpPlist = new ArrayList<ListNameItem>();
        repository.findAll().stream().forEach( E -> tmpPlist.add( new ListNameItem(E.getId(), E.getName() ) ) );
        return tmpPlist;
    }


    @GetMapping(path = "/List/{id}")
    public String getTodoById(@PathVariable int id) {
        int test = 123;
        test += 47;
        return repository.findAllById( id );
    }
}
