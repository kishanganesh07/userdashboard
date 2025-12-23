import React, { useContext } from 'react'
import { Context } from '../Context/useContext'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Personaldetails from './Personaldetails'
import Companydetails from './Companydetails'
import Addressdetails from './Addressdetails'

const Userdetailspage = () => {
    const {id}=useParams()
    const {users}=useContext(Context)
    
    const user=users.find((use)=> use.id==id)
    if (!user) {
            return <div className="p-6">Loading user...</div>
        }
   
    const personal = { 
        name:user.name, 
        email:user.email, 
        phone:user.phone
    } ;
    const company = { 
        name:user.company.name, 
        catchPhrase:user.company.catchPhrase, 
        bs:user.company.bs
    } ;
    const address = { 
        street:user.address.street, 
        suite:user.address.suite,
        city:user.address.city,
        zipcode:user.address.zipcode,
        lat:user.address.geo.lat,
        lng:user.address.geo.lng
        
    } ;
      
        

  return (
    <div className='bg-gray-200 w-full h-screen '>
       <div className='pb-5 '>
        <Link to="/">
        <button className='m-10 border rounded-lg w-45 h-9'>{`<- Back to Dashboard`}</button>
        </Link>
       </div>
       <div className='flex space-x-15 mt-5 ml-12'>
        <Personaldetails  personal={personal}/>
        <div className='flex  space-x-15'>
        <Companydetails deatils={company}/>
        <Addressdetails deatils={address}/>
        </div>

       </div>

        
     
    </div>
  )
;
}

export default Userdetailspage
