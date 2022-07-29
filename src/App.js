import "./App.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

function App() {

  const { register, handleSubmit, formState: { errors }} = useForm()
  const [userList, setUserList] = useState()
  const [userData, setUserData] = useState({})
  const [newUserKey, setNewUserKey] = useState()
  
  const onSubmit = async data => {
    let result = await fetch("https://form-hook-18fe5-default-rtdb.firebaseio.com/.json", {
      method: 'POST',
      body:  JSON.stringify(data)
    })
   // console.log(result)
    result = await result.json()
    console.log(result.name)
    setNewUserKey(result.name)
  }

  const getUsers = async () => {
    let data = await fetch(
      "https://form-hook-18fe5-default-rtdb.firebaseio.com/.json"
    )
    data = await data.json()
    console.log(data)
    //setKodersList(data)
  }
  getUsers()

// let data = async fetch("https://calis-cb1f2-default-rtdb.firebaseio.com/.json")
// .then() await 
  return (
    <div className="App">
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="d-block ms-5">Photo</label>
        <input className="d-block ms-5"type="text" {...register("photo", {required:true})}/>
        {errors.photo?.type === 'required' && "Photo is required"}

        <label className="d-block ms-5">Name</label>
        <input className="d-block ms-5"type="text" {...register("name", {required:true, minLength:3})}/>
        {errors.name?.type === 'required' && "Name is required"}
        {errors.name?.type === 'minLength' && "Minlenght is 3"}

        <label className="d-block ms-5">Email</label>
        <input className="d-block ms-5" type="email" {...register("email", {required:true,  pattern: {value:/\S+@\S+\.\S+/, message:"Invalid email address"} })}/>
        {errors.email?.type === 'pattern' && "Invalid email address"}


        <button type="submit" className="btn btn-primary ms-5">Enviar</button>
        </form>

        <div className="card">
          <div className="card-image">
            <img></img>
          </div>
          <div className="card-text"></div>
          <div className="card-text"></div>
        </div>


    </div>
  );
}

export default App;
