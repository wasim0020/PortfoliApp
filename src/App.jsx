import './App.css'

function App() {
   return (
    <>
      <div className='h' >
        <h1 style={{paddingTop : 30}}>Jhon Doe</h1>
        <h3 style={{padding : 25}} >Full Stack Developer</h3>
        <div className='f' >
          <h2 className="c" style={{paddingRight : 20}}>About</h2>
          <h2 className="c" style={{paddingRight : 20}}> Project</h2>
          <h2 className="c" >Content</h2>
        </div>
        <br />
        <div className='about'>
          <h1 style={{marginBottom : 10}} >About Me</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi inventore qui, hic officiis praesentium maiores necessitatibus asperiores commodi quae excepturi soluta, fugiat provident, quod sed expedita eum deleniti dolorem.praesentium maiores necessitatibus asperiores commodi quae excepturi soluta, fugiat provident, quod sed expedita eum deleniti dolorem praesentium maiores necessitatibus asperiores commodi quae excepturi soluta, fugiat provident, quod sed expedita eum deleniti dolorem</p>
        </div>
        <div className='project'>
          <h1 style={{fontSize : 40}}>Project</h1>
          <br />
          <h2>ProjectOne</h2>
          <br />
          <p>Using Reactjs Nodejs Expressjs Mongdb or Vs Code Ide !!</p>
          <br />
          <a style={{fontSize : 20}} href="https://github.com/wasim0020/todo-App">View Project</a>
          <br />
          <br />
          <h2>ProjectTwo</h2>
          <br />
          <p>Using Java Reactjs Hibernate DataJpa Springboot Ide Used Intellji !!</p>
          <br />
          <a style={{fontSize : 20}} href="https://github.com/wasim0020/todo-App">View Project</a>
          <br />
          <br />
          <h2>ProjectThree</h2>
          <br />
          <p>Using Reactjs Nodejs Expressjs Mongdb or Vs Code Ide !!</p>
          <br />
          <a style={{fontSize : 20}} href="https://github.com/wasim0020/todo-App">View Project</a>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default App
