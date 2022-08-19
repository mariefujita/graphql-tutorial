import './App.css'
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/client";

const BOOKS = gql`
  query {
    test {
      title
      author
    }
  }
`

console.log(BOOKS);

function Books () {
  const { loading, error, data } = useQuery(BOOKS);
  if (loading) {
    return <p>loading...</p>
  }
  if (error) {
    return <p>error has occurred</p>
  }
  return data.test.map(({ title, author }) => (
    <div key={title}>
      <p>{author}:{title}</p>
    </div>
  ))
};

function App() {

  return (
    <div className="App">
      <h2>GraphQL Client</h2>
      <Books />
    </div>
  )
}

export default App
