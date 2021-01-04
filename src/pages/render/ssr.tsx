import axios from 'axios'
import { GetServerSideProps } from 'next';

const Ssr = ({warriors}) => {
  return (
    <>
      <div>
        Server Side Rendering exemplo with Axios
      </div>
      <div>
        {warriors.map((warrior) => (
          <div key={warrior.id}>{warrior.name}</div>
        ))}
      </div>
    </>
  );
}


export const getServerSideProps:GetServerSideProps = async (ctx) => {
  const response = await axios.get('http://localhost:3000/api/warriors')
  const data = await response.data

  return {
    props:{
      warriors: data
    }
  }
}

export default Ssr;