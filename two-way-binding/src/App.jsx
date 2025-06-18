import React from 'react'
import Card from './Components/Card'

const App = (props) => {
  const user = [
    {
      "username": "john_doe",
      "photo": "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWxzfGVufDB8fDB8fHww",
      "proficiency": "Full Stack Developer",
      "city": "Bangalore",
      "age": 29
    },
    {
      "username": "anita_rai",
      "photo": "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "proficiency": "Data Scientist",
      "city": "Hyderabad",
      "age": 27
    },
    {
      "username": "rahul_k",
      "photo": "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "proficiency": "DevOps Engineer",
      "city": "Pune",
      "age": 31
    },
    {
      "username": "meera_s",
      "photo": "https://images.unsplash.com/photo-1498746607408-1e56960e3bdd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzfGVufDB8fDB8fHww",
      "proficiency": "UI/UX Designer",
      "city": "Delhi",
      "age": 25
    },
    {
      "username": "alex_fernandez",
      "photo": "https://images.unsplash.com/photo-1566802842272-e694af42eb29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "proficiency": "Cloud Architect",
      "city": "Mumbai",
      "age": 34
    }
  ]
  return (
    <>
      <div className='flex'>
        {user.map(function(props){
        return <Card user={props.username} city={props.city} photo={props.photo} age={props.age} prof={props.proficiency}/>
      })}
      </div>
    </>
  )
}

export default App
