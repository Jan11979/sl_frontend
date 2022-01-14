import { IListNames } from "../Controller/DataService"
import { IPersonalShopList } from "./FrameSet"
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {useState} from "react";
import { Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

interface PropsMidFrame {
    listName:   IListNames[],
    listP:      IPersonalShopList
}
function MidFrame({ listName, listP } : PropsMidFrame ) {
    if(listName === null)
        return ( <div>listName null</div>)
    if(listP === null)
        return ( <div>listP null</div>)

    return (
        <div>
            <p> Listen </p>
            < ShoppingListBasicUserList  list={listP}/>
        </div>
    )
}

interface PropsShoppingListBasicListCreateString {
    count:  number,
    text:   string
}
function ShoppingListBasicListCreateString( { count, text } : PropsShoppingListBasicListCreateString) {
    let elementString = "";
    elementString += count.toString();
    elementString += " "
    elementString += text;

    return(
        <div>
            {elementString}
        </div>
    )
}
interface ElementPropsShoppingListBox {
    list: IPersonalShopList
}
function ShoppingListBasicUserList( { list } : ElementPropsShoppingListBox) {
    // let navigate = useNavigate();
    // const [searchParams] = useSearchParams();
    // const location = useLocation();
    // const listParam = searchParams.get('list')
    // const idParam = searchParams.get('id')


  //  console.log("ShoppingListBasicUserList" , listParam, idParam );


    const [checked, setChecked] = useState([0]);
    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    const handleEventEdit = ( listID: number, myID: number) => {
        //const handleEventEdit: React.MouseEventHandler<HTMLButtonElement> = (event: ) => {
        console.log("handleShopListElementEventAdd" , listID, myID);
        let navString="statleft=edit&list="+listID+"&id="+myID;
   //     navigate({ pathname: location.pathname, search: navString, });

    }

    if(list.id === -1)
    {
        return(<div> </div>)
    }

    return (
        <div>
            <Typography variant="h3">{list.name}</Typography>
            <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
                {list.list.map((elem, i) => {
                    const labelId = `checkbox-list-label-${i}`;
                    return (
                        <ListItem
                            key={i}
                            secondaryAction={
                                <IconButton edge="end" aria-label="comments" onClick= {(e) => handleEventEdit( list.id,  i)} >
                                    <EditIcon />
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(i)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(i) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={<ShoppingListBasicListCreateString count={elem.count} text={elem.name} /> } />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
}

export default MidFrame