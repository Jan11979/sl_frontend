package com.example.backend.Model;


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
@Document("p_list")
public class PersonalShopList {
    @Id
    int id;
    String name;
    public List<ShopListItem> list = new ArrayList<ShopListItem>();


}