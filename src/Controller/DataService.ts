import {IPersonalShopList} from "../Page/FrameSet";

export interface IListNames {
    id: number,
    text: string
}
//[{"id":0,"listName":"Jan"},{"id":1,"listName":"Peter"}]
export const FetchListNameData = (data: any): IListNames[]  => {
    let newData:IListNames[] = [];
    data.map((e:IListNames) => (newData.push(e)));
    return newData;
}

export const FetchListPData = (data: any): IPersonalShopList  => {
    let newData:IPersonalShopList = data;
    return newData;
}

export const FetchString = (data: any): string[]  => {
    let newData:string[] = data;
    return newData;
}