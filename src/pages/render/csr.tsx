import {useEffect, useState} from 'react'
import axios from 'axios'

const Csr = () => {
  const [warriors, setWarriors] = useState([])

  const fetchWarriors = async () => {
    const response = await axios.get('http://localhost:3000/api/warriors')
    const data = await response.data

    setWarriors(data)
  }

  console.log(warriors)

  useEffect(()=> {
    fetchWarriors()
  }, [])

  return (
    <>
      <div>
        Client Side Rendering exemplo with Axios
      </div>
      <div>
        {warriors.map((warrior, id) => (
          <div key={warrior.id}>{warrior.name}</div>
        ))}
      </div>
    </>
  )
}

export default Csr