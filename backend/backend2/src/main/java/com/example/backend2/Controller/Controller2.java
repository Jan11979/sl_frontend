package com.example.backend2.Controller;

import com.example.backend2.Interface.PShopListReposoty;
import com.example.backend2.Model.ListNameItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("sl")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class Controller2 {

    @Autowired
    PShopListReposoty repository;

    @GetMapping(path = "/ListName")
    public List<ListNameItem> getAllListName(){
        List<ListNameItem> tmpPlist = new ArrayList<ListNameItem>();
        repository.findAll().stream().forEach( E -> tmpPlist.add( new ListNameItem(E.getId(), E.getName() ) ) );
        return tmpPlist;
    }

    @GetMapping(path = "/hallo")
    public String getHallo() {

        return "miau2";
    }
    @GetMapping(path = "/List/{id}")
    public String getTodoById(@PathVariable int id) {
        int test = 123;
        test += 47;
        return  "Test";//repository.findAllById( id );
    }


}
