import React, { useState, useEffect, useContext } from 'react'
import "../user/bord.css"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import { adddata, deldata } from '../../context/ContextProvider';
import { updatedata } from '../../context/ContextProvider'
function Admin() {
    const { udata, setUdata } = useContext(adddata);

  const {updata, setUPdata} = useContext(updatedata);

  const {dltdata, setDLTdata} = useContext(deldata);

//   const [toggleState, setToggleState] = useState(1);

//   const toggleTab = (index) => {
//     setToggleState(index);
//   };


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

  const deleteuser = async (id) => {

      const res2 = await fetch(`https://gymbackend-uyoa.onrender.com/deleteuser/${id}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json"
          }
      });

      const deletedata = await res2.json();
      console.log(deletedata);

      if (res2.status === 422 || !deletedata) {
          console.log("error");
      } else {
          console.log("user deleted");
          setDLTdata(deletedata)
          getdata();
      }

  }


  return (

      <>
          {
              udata ?
                  <>
                      <div class="alert alert-success alert-dismissible fade show" role="alert">
                          <strong>{udata.name}</strong>  added succesfully!
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>
                  </> : ""
          }
          {
              updata ?
                  <>
                      <div class="alert alert-success alert-dismissible fade show" role="alert">
                          <strong>{updata.name}</strong> <span> updated succesfully! </span>
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>
                  </> : ""
          }

          {
              dltdata ?
                  <>
                      <div class="alert alert-danger alert-dismissible fade show" role="alert">
                          <strong>{dltdata.name}</strong> <span> deleted succesfully!</span>
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>
                  </> : ""
          }
<div>
</div>

          <div className="mt-5">
              <div className="container" style={{overflowX:"scroll"}}>
                  <div className="add_btn mt-2 mb-2">
                    <button>
                      <NavLink to="/Creat" className="btn btn-primary">Add data</NavLink></button>
                  </div>
                  

                  <table class="table">
                      <thead>
                          <tr className="table-dark">
                              <th scope="col">id</th>
                              <th scope="col">Lifestyle Motivation</th>
                              <th scope="col">Health Plans</th>
                              <th scope="col">Sport Specific</th>
                              <th scope="col">Lists Of Items To Eat</th>
                              <th scope="col">Workouts</th>
                          </tr>
                      </thead>
                      <tbody>

                          {
                              getuserdata.map((element, id) => {
                                  return (
                                      <>
                                          <tr>
                                              <th scope="row">{id + 1}</th>
                                              <td className='bar'>{element.Lifem}</td>
                                              <td className='bar'>{element.Healthplan}</td>
                                              <td className='bar'>{element.Sst}</td>
                                              <td className='bar'>{element.mealplans}</td>
                                              <td className='bar'>{element.gymworkouts}</td>
                                              <td className="d-flex justify-content-between">
                                               
                                                  <NavLink to={`/Update/${element._id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink>
                                                  <button className="btn btn-danger" onClick={() => deleteuser(element._id)}><DeleteOutlineIcon /></button>
                                              </td>
                                          </tr>
                                      </>
                                  )
                              })
                          }
                      </tbody>
                  </table>


              </div>
          </div>
      </>
  )

}

export default Admin