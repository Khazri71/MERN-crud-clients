import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

export const AfficherClients = () => {

  
    const [clients , setClients] = useState([])

    useEffect(() => {
       axios.get("http://localhost:3001/")
       .then( result => {
        console.log(result)
        setClients(result.data)
       } )
       .catch( err => console.log(err))
    }, [])



    const Supprimer = (id) => {
        axios.delete("http://localhost:3001/supprimerClient/" + id)
        .then( client => {
          console.log(client)
          window.location.reload()
        })
        .catch( err => console.log(err))
    }


  return (
    <>

    <div className="d-flex justify-content-center align-items-center vh-100  bg-body-secondary ">
    <div className="w-50 p-3 border rounded bg-white">
    <table className="table  ">
  <thead>
     <Link to="/ajouter" className="btn btn-success">Ajouter +</Link>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {clients && clients.map( (client) => (
     <tr>
      <td>{client.nom}</td>
      <td>{client.email}   </td>
      <td>{client.age} </td>
      <td>
       <div>
        <Link  to= {`/modifier/${client._id}`}  className="btn btn-primary me-2"  >Mofidier</Link>
         <button type="button" className="btn btn-danger" onClick={(e) => Supprimer(client._id)}    >Supprimer</button>
       </div>

      </td>
    </tr>
    ))}
  </tbody>
</table>
   </div>
     </div>
    </>
  )
}
