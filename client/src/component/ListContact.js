import React ,{useEffect}from 'react'
import {fetchContacts} from '../api/contact'
import {useDispatch,useSelector} from 'react-redux'
import {setContacts } from '../store/contactSlice'
import CardContact from '../component/CardContact'
const ListContact = () => {
  const dispatch=useDispatch();
  const contacts = useSelector(state=>state.contact)
  //we declare a fucntion in useeffect
  //donc mil backend jibna el dta b3thneha lil store w jibneha lil front 
  const getContact=async()=>{
  const data = await fetchContacts()
  dispatch(setContacts(data.Contacts))
  }
  // aja async fi wiset useeffect matkhdemichot //njimich n
  useEffect(()=>{
    getContact();
  },[])
  //behy lina juste njib les données w nafichehom 
  return (
    <div>
      {
contacts.map((el)=>(<CardContact contact={el} getContact={getContact} />))
    }
    </div>
  )
}

export default ListContact