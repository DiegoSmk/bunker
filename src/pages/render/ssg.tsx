import axios from 'axios'
import {GetStaticProps, GetStaticPaths} from 'next'
import Link from 'next/link'

const Ssr = ({warriors}) => {
  return (
    <>
      <div>
        Static Site Generation exemplo with Axios
      </div>
      <div>
        {warriors.map((warrior) => (
          <div key={warrior.id}>
            <Link href='/render/profile/exemploTwo/[id]' as={`/render/profile/exemploTwo/${warrior.id}`}>
              <a>
              {warrior.name}
              </a>
            </Link>
            </div>
        ))}
      </div>
    </>
  );
}


export const getStaticProps:GetStaticProps = async (ctx) => {
  const response = await axios.get('http://localhost:3000/api/warriors')
  const data = await response.data

  return {
    props:{
      warriors: data
    }
  }
}

export default Ssr;