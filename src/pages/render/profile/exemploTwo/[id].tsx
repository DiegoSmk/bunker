// exemplo two be use map

// import {useRouter} from 'next/router'
import {GetStaticProps, GetStaticPaths, InferGetStaticPropsType} from 'next'
import axios from 'axios'
import { IWarrior } from '../../../../types/Warrior';


interface WarriorProps {
  warrior: IWarrior
}

const Profile = ({warrior}: InferGetStaticPropsType<typeof getStaticProps>) => {
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

export const getStaticProps:GetStaticProps<WarriorProps> = async (ctx) => {
  const response = await axios.get('http://localhost:3000/api/warriors',
  // const response = await axios.get('http://jsonplaceholder.typicode.com/users',
  { params: {id: ctx.params.id}})
  const warrior = await response.data[0]
  return {
    props: {warrior},
  }
}

export const getStaticPaths:GetStaticPaths = async () => {
  const response = await axios.get('http://localhost:3000/api/warriors',
  // const response = await axios.get('http://jsonplaceholder.typicode.com/users',
  )
  const warriors = await response.data //.slice(0, 2)  slice - limita a geração de paginas estáticas a algumas posições.

  const paths = warriors.map((warrior)=>{
    return {params: {id: String(warrior.id)}}
  })

  return {
      paths, //other options - paths: paths
      fallback: true
  }
}

export default Profile