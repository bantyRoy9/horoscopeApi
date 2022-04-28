import React, { useState } from 'react'
import axios from 'axios'
import DataInfo from './dataInfo';
import 'primeicons/primeicons.css';
import { useNavigate } from 'react-router-dom';
 


const FormInput = () => {
  const navigation = useNavigate();
  const [user, setUser] = useState({sign:'aquarius',date:'today'});
  const [preload, setPreload] = useState(false);
  const [ data, setData ] = useState(false)

  const changehandler = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);

    setPreload(true)
    axios.post(`https://aztro.sameerkumar.website/?sign=${user.sign}&day=${user.date}`)
    .then(response => {
        setData(response.data);
        setPreload(false)
        console.log(response.data);
      }).catch(err =>{
        console.log(err);
        alert('something Error');
        navigation('/')
        
      });
    }
  
  
  return (
    <>
     <div className='container'>
        <div className="form_container">
          <h3 className='title'>Find Horoscope Detail</h3>
          <div className="form_field">
            <form className='form' action="" onSubmit={submitHandler}>
              <select name="sign" id="" placeholder='Select One' onChange={changehandler}>
                {/* <option value="" disabled selected>Select sign</option> */}
                <option value='aquarius'>Aquarius</option>
                <option value='pisces'>Pisces</option>
                <option value='taurus'>Taurus</option>
                <option value='gemini'>Gemini</option>
                <option value='cancer'>Cancer</option>
                <option value='leo'>Leo</option>
                <option value='virgo'>Virgo</option>
                <option value='libra'>Libra</option>
                <option value='scorpio'>Scorpio</option>
                <option value='sagittarius'>Sagittarius</option>
                <option value='capricorn'>Capricorn</option>
              </select>
              {/* <label htmlFor="">name</label> */}
              <input type='text' name='name' placeholder='Name' onChange={changehandler} required/>

              {/* <label htmlFor="">email</label> */}
              <input type="email" name="email" placeholder='Email' onChange={changehandler} required />
              {/* <label htmlFor="">Date</label> */}
              <select name="date" id="" onChange={changehandler} required>
                <option value="yesterday">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="tomorrow">Tomorrow</option>
              </select>
              <input type="submit" value="submit" />
            </form>
          </div>
        </div>
       </div>
       <div className="data-container">
    { preload ? <div className="preloading"> <i className="pi pi-spin pi-spinner"></i></div> :(data ? <DataInfo infoData={data} userData={user} />: null)}

       </div>
       

       

    </>
  )
}

export default FormInput