import {useEffect} from "react"
import {location} from "react-router-dom"

const GetToTopOnRender = () => {
  const pathname = location.pathname
  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])

return null;
}
export default GetToTopOnRender;
