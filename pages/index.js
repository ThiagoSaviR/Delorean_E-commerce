import { gql, GraphQLClient} from 'graphql-request'

export const getStaticProps = async () =>{
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    Headers: {
      Authorization : process.env.GRAPH_CMS_TOKEN,
    }
  })
  
  const query = gql`
  query {
    products{
      createdAt,
      id,
      tilte,
      description,
      price,
      slug,
      tags,
      image{
        url
      }
    }
  }
  `

  const data = await graphQLClient.request(query)
  const products = data.products

  return{
    props:{
      products,

    }
  }
}

const Home = ({ products }) => {
  console.log(products)
  return (
    <div> 
      
    </div>
  )
}

export default Home
