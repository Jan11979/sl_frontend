import axios from "axios";


//https://jpshoplist.herokuapp.com/sl/miau
async function getAll(src:string) {
    let uml = "http://localhost:8080/sl";
    uml += src;
    const response = await fetch(uml);

    const body = await response.json();
    const result = await body;
    console.log("Vom Server Miau :", result);
    return result;
}

export const getTodoById = (id: any) =>
    axios.get(`http://localhost:8080/sl/List/${id}`).then(response => response.data)



export default getAll;