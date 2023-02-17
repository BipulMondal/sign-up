import React, {useState} from "react";

const Registration = () => {

  //fetch all the data from user
  const [userRegistration, setUserRegistration] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:""

  });

  //onchange method
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration({...userRegistration, [name] : value});
  }

  //without database the value are stored in the same page using this methos
  const [records, setRecords] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {...userRegistration, id: new Date().getTime().toString()}
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);

    setUserRegistration({firstname: "", lastname: "", email: "", password: ""})
  }
  


  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-gray-700">
        <form 
        action="" 
        onSubmit={handleSubmit} 
        className="h-[420px] w-80 py-4 bg-blue-500 text-white text-center text-bold rounded-2xl border border-2 border-red-500">
          <div className="flex flex-col items-center pb-6">
            <label className="text-lg" htmlFor="firstname">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              autoComplete="off"
              value={userRegistration.firstname}
              onChange={handleInput}
              className="h-8 w-64 rounded-lg text-black"
            />
          </div>
          <div className="flex flex-col items-center pb-6">
            <label className="text-lg" htmlFor="lastname">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              autoComplete="off"
              value={userRegistration.lastname}
              onChange={handleInput}
              className="h-8 w-64 rounded-lg text-black"
            />
          </div>
          <div className="flex flex-col items-center pb-6">
            <label className="text-lg" htmlFor="email">
              Email
            </label>
            <input 
            type="text" 
            name="email" 
            id="email" 
            autoComplete="off"
            value={userRegistration.email}
            onChange={handleInput}
            className="h-8 w-64 rounded-lg text-black" />
          </div>
          <div className="flex flex-col items-center pb-6">
            <label className="text-lg" htmlFor="password">
              Password
            </label>
            <input 
            type="password" 
            name="password" 
            id="password"
            value={userRegistration.password}
            onChange={handleInput}
            className="h-8 w-64 rounded-lg text-black" />
          </div>
          <button 
          type="submit" 
          id="btn"
          className="h-8 w-40 bg-white text-black text-lg font-bold rounded-xl "
          >Sign Up</button>
        </form>

        <div className="mt-10 p-4 bg-yellow-200 w-[630px] text-center">
          {
            records.map((currentele) => {
              const {id, firstname, lastname, email, password } = currentele
              return (
                <div className="flex justify-center" key={id}>
                  <p className="w-32 bg-red-300 mt-2">{firstname}</p>
                  <p className="w-32 bg-red-500 mt-2">{lastname}</p>
                  <p className="w-40 bg-red-300 mt-2">{email}</p>
                  <p className="w-40 bg-red-500 mt-2">{password}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
};

export default Registration;
