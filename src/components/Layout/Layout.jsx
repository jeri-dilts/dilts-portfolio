import './Layout.css'
import Header from '../Header/Header'
import Sticky from '../Sticky/Sticky'

export default function Layout(props) {
  return (
    <div className='layout-container'>
      <Header></Header>
      {props.children}
      <Sticky></Sticky>
    </div>
  )
}