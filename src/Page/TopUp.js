import {useParams} from "react-router-dom"
export default function Home(){
  const params=useParams()
  return <h1 onClick={console.log(params)}>page Topup</h1>
}