import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/persons')
      .then(res => res.json())
      .then(data => setPersons(data))
  }, [])

  console.log(persons);

  return (
    <>
      <h1>Data  Management System</h1>
      <h2>Number,s of Person: {persons.length}</h2>

     <div className="grid grid-cols-3 gap-6 place-items-center p-5">
     {
        persons?.map(person => <>
          <div className="border p-4 rounded-lg shadow-lg w-full text-center">
            <h3 className="text-lg font-semibold">Name: {person.name}</h3>
            <a className="text-blue-600 underline">Email: {person.email}</a>
            <p className="text-gray-700">Gender: {person.gender}</p>
          </div>

        </>)
      }
     </div>
    </>
  )
}

export default App
