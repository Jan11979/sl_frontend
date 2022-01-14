package com.example.backend2.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document("all_list")
public class AllShopListItem {
    @Id
    private String id;
    private String name;
    public List<PersonalShopList> listP = new ArrayList<PersonalShopList>();

    public AllShopListItem(String newName){
        name = newName;
    }
}