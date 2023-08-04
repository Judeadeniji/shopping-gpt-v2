import {useEffect} from "react"
import {useLocation} from "react-router-dom"

const GetToTopOnRender = () => {
  const location = useLocation()
  const {pathname} = location
  useEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])

return null;
}
export default GetToTopOnRender;
