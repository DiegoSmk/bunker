// import {useRouter} from 'next/router'
import {GetStaticProps, GetStaticPaths} from 'next'
import axios from 'axios'

// function Loading
import {useRouter} from 'next/router'
// type importer
import { IWarrior } from '../../../../types/Warrior';

interface WarriorsProps {
  warrior?: IWarrior

}

const Profile = (
  // {warrior={name: 'Fulano', id: 0, coin: 0, pow: 0} // values default
  {warrior}: WarriorsProps 
) => {
  // function Loading
  const router = useRouter()
  if (router.isFallback) return <h1>Loading...</h1>


  // const router = useRouter()
  // console.log(router)
  return (
  // <h1>Profile {router.query.id}</h1>
  <div>
    <h1>Profile of the {warrior.name}</h1>
    <p>id {warrior.id}</p>
    <p>{warrior.coin}</p>
    <p>{warrior.pow}</p>
  </div>
  )
}

export const getStaticProps:GetStaticProps = async (ctx) => {
  const response = await axios.get('http://localhost:3000/api/warriors',
  // const response = await axios.get('http://jsonplaceholder.typicode.com/users',
  { params: {id: ctx.params.id}})
  const warrior = await response.data[0]

  // function Loading
  await new Promise(res =>setTimeout(res, 1000))

  return {
    props: {warrior}, // added - revalidate: time for change to ISR
  }
}

export const getStaticPaths:GetStaticPaths = async () => {

  return {
      paths:[
        {params: {id: '1'}},
        {params: {id: '2'}},
      ],
      fallback: true
  }
}

export default Profile