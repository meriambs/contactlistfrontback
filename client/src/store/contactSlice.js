import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const contactSlice = createSlice({
    name:'contact',
    initialState:[
        {
            id:uuidv4(),
            name:"meriam",
            age:28,
            email:"bensalah@gmail.com"
        }
    ],
    reducers:{

        //la 1ere function ajout de clients 

      addContact:(state,action)=>{
          
             const newContact={
                 id:uuidv4(),
                ...action.payload
             }
             //best practice is to 
             return [...state,newContact]
       }

    ,



        //bich njibou el lista kemla mil backend donc n7otoha fil front  
//nrj3ou ely bich yjina el kolla ley howa biensure jeyna mil backend 
        setContacts:(state,action)=>{
            return action.payload;
      }



        //la 3eme update client 




        //la 4eme delet client 




        //la 5eme lecture d'un client unique 
    }
})

export const {addContact,setContacts} = contactSlice.actions

export default contactSlice.reducer