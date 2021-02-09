import './Layout.css'
import Header from '../Header/Header'
import Sticky from '../Sticky/Sticky'
import Main from '../../screens/Main/Main'

export default function Layout(props) {
  return (
    <div className='layout-container'>
      <Header></Header>
      {props.children}
      <Main></Main>
      {/* <Sticky></Sticky> */}
    </div>
  )
}