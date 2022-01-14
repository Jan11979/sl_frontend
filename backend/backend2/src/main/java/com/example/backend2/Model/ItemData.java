package com.example.backend2.Model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemData {
    int id;
    String name;
    public List<PersonalShopList> listP = new ArrayList<PersonalShopList>();

//    public ItemData() {
//        id = -1;
//        name = "";
//        PersonalShopList = [];
//    }
}

