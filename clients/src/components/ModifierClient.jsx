import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'

export const ModifierClient = () => {

  const [nom , setNom ] = useState()
  const [email  , setEmail] = useState()
  const [age , setAge] = useState()

  const navigate = useNavigate()


 const {id} = useParams()


  useEffect(()=>{
    axios.get("http://localhost:3001/obtenirClient/" + id)
    .then( result => {
      console.log(result)
      setNom(result.data.nom)
      setEmail(result.data.email)
      setAge(result.data.age)
      
    })
    .catch( err => console.log(err))
  },[])


  const Modifier = (e) => {
    e.preventDefault()
    axios.put("http://localhost:3001/modifierClient/" + id , {nom , email , age})
    .then( result => {
      console.log(result)
      navigate("/")
    })
    .catch( err => console.log(err))
  }







  return (
     <div className="d-flex justify-content-center align-items-center vh-100 bg-body-secondary">

<div className="w-50 border rounded p-3 bg-white">


<form onSubmit={Modifier}>
  <div className="mb-3">
    <input type="text" className="form-control" id="nom" placeholder="Entrer Nom" required
    value ={nom}
    onChange ={(e) => setNom(e.target.value)}
    
    
    />
  </div>
   <div className="mb-3">
    <input type="email" className="form-control" id="email" placeholder="Entrer Email" required
    value = {email}
    onChange ={(e) => setEmail(e.target.value)}
    />
  </div>
   <div className="mb-3">
    <input type="number" className="form-control" id="age" placeholder="Entrer Age" required 
    value={age}
    onChange={(e) => setAge(e.target.value)}
    />
  </div>
 
  <button type="submit" className="btn btn-primary">Modifier</button>
</form>
    </div>
    </div>
  )
}
