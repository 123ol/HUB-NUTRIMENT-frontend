import React, { useState , useEffect} from "react";
import pic from "../../../assets/img/avatar01.png"
import './bord.css';
// import {SignInSignupWithLocalStorage} from "./SignInSignUp"
function Bord(){


  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);
  const getdata = async () => {

    const res = await fetch("https://gymbackend-uyoa.onrender.com/getdata", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
        console.log("error ");

    } else {
        setUserdata(data)
        console.log("get data");

    }
}

useEffect(() => {
    getdata();
}, [])



    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }



    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

  

    return(
        <div>
  <div class="cont">
    <navbar>
      <ul>
        <li><sid  class="logo">
          <img src={pic}/>
          <span class="nav-item">localName</span>
        </sid></li>
        <li><sid >
          <i class="fas fa-menorah"></i>
          <span class="nav-item">Dashboard</span>
        </sid></li>
        <li><sid >
          <i class="fas fa-comment"></i>
          <span class="nav-item">Message</span>
        </sid></li>
    

        <li onClick={logout}><sid  class="logout">
          <i class="fas fa-sign-out-alt"></i>
          <span class="nav-item">Log out</span>
        </sid></li>
      </ul>
    </navbar>


    <section class="main">


      <section className= "attendance  active-content" >
        <div class="attendance-list" style={{overflowX:"scroll"}}>
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
             
                <th>Lifestyle Motivation</th>
                <th>Health Plans</th>
                <th>Sport Specific</th>
                <th>Lists of items to eat</th>
                <th>Workouts</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
            {
                              getuserdata.map((element, id) => {
                                  return (
                                      <>
              <tr class="active">
                <td>{id + 1}</td>
              
                <td>{element.Lifem}</td>
                <td>{element.Healthplan}</td>
                <td>{element.Sst}</td>
                <td>{element.mealplans} </td>
                <td>{element.gymworkouts} </td>
                <td className="des">
            {element.desc}
            </td>
                {/* {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <td>
            {element.desc}
            </td>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}   */}

{/* <td><button onClick={toggleModal}>View</button></td> */}
              </tr>
       
              </>
              
                                  )
                              })
                          }
            </tbody>
          </table>
        </div>
      </section>
     
     
    </section>
  </div>

        </div>
    );
}
export default Bord;