package com.example.backend2.Controller;

import com.example.backend2.Interface.PShopListReposoty;
import com.example.backend2.Model.AllShopListItem;
import com.example.backend2.Model.ListNameItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@RestController
@RequestMapping("sl")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class Controller2 {

    ItemService itemService = new ItemService();

    @Autowired
    PShopListReposoty repository;


    //    @GetMapping("${app.request.mapping.dummy}")
    @GetMapping(path = "/createDummy")
    public String getCreateDummy() {

        final AllShopListItem tmp = itemService.createDummy();
        SimpleDateFormat formatter= new SimpleDateFormat("yyyy-MM-dd 'at' HH:mm:ss z");
        Date date = new Date(System.currentTimeMillis());
        String miauOut = "Miau im:" + formatter.format(date);
        miauOut += "<br><br>";
//        miauOut += "<br>" + "spring.data.mongodb.database:" + mongdatabase;
//        miauOut += "<br>" + "spring.data.mongodb.host:" + monghost;
//        miauOut += "<br>" + "spring.data.mongodb.port:" + mongport;
//        miauOut += "<br><br>";
//        miauOut += "<br>" + "jan.sein.value:" + janseinvalue;

        System.out.println(miauOut);

//        final AllShopListItem newItem = new AllShopListItem("Denns");
//        repositoryASLI.save(tmp);

        tmp.listP.stream().forEach( repository::insert);

        System.out.println("Miau done: repository.save(frank);");
        return miauOut;
    }

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
        return repository.findAllById( id );
    }


}
