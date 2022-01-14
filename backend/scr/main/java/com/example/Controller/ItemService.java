package com.example.backend2.Controller;


import com.example.backend2.Model.AllShopListItem;
import com.example.backend2.Model.ItemData;
import com.example.backend2.Model.PersonalShopList;
import com.example.backend2.Model.ShopListItem;
import com.example.backend2.Model.AllShopListItem;
import com.example.backend2.Model.ItemData;
import com.example.backend2.Model.PersonalShopList;
import com.example.backend2.Model.ShopListItem;
import org.springframework.stereotype.Service;

@Service
public class ItemService {

    public ItemData data = new ItemData();

    public AllShopListItem createDummy()
    {
        AllShopListItem allItem = new AllShopListItem();
        allItem.setName("Rooti");
        ShopListItem item1 = new ShopListItem( "Banane", 1  );
        ShopListItem item2 = new ShopListItem( "Gurke", 2  );
        ShopListItem item3 = new ShopListItem( "Bier", 3  );
        ShopListItem item11 = new ShopListItem( "Banane", 1  );
        ShopListItem item12 = new ShopListItem( "Gurke", 2  );
        ShopListItem item13 = new ShopListItem( "Bier", 3  );
        PersonalShopList pList1 = new PersonalShopList( );
        PersonalShopList pList2 = new PersonalShopList( );
        pList1.setId(0);
        pList1.setName("Jan");
        pList1.list.add(item1);
        pList1.list.add(item2);
        pList1.list.add(item3);
        addPList( pList1 );
        allItem.listP.add(pList1);
        pList2.setId(1);
        pList2.setName("Peter");
        pList2.list.add(item11);
        pList2.list.add(item12);
        pList2.list.add(item13);
        addPList( pList2 );
        allItem.listP.add(pList2);

        return allItem;
    }

    public void addPList(PersonalShopList pList) {
        if (pList == null)
            return;
        data.listP.add(pList);
    }

    public ItemData getAll() {
        return data;
    }


    private int lastID;

}

