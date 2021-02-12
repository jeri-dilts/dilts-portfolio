import './Layout.css'
// import Header from '../Header/Header'

export default function Layout(props) {
  return (
    <div className='layout-container'>
      {/* <Header></Header> */}
      {props.children}
    </div>
  )
}