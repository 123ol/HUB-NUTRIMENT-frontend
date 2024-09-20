import React, { useEffect, useState,useContext } from 'react'
import { NavLink, useParams,useNavigate,useHistory } from 'react-router-dom'
import { updatedata } from '../../context/ContextProvider'

import "../user/bord.css"
function Update() {
  
    const {updata, setUPdata} = useContext(updatedata);

    const history = useNavigate();

    const [inpval, setINP] = useState({
        Lifem: "",
        Healthplan: "",
        Sst: "",
        mealplans: "",
        gymworkouts: "",
        desc: ""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`https://gymbackend-uyoa.onrender.com/getuser/${id}`, {
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
            setINP(data)
            console.log("Updated");

        }
    }

    useEffect(() => {
        getdata();
    }, []);


    const updateuser = async(e)=>{
        e.preventDefault();

        const { Lifem, Healthplan, gymworkouts, mealplans, desc, Sst} = inpval;

        const res2 = await fetch(`https://gymbackend-uyoa.onrender.com/updateuser/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                Lifem, Healthplan, gymworkouts, mealplans, desc, Sst
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            history.push("/Admin")
            setUPdata(data2);
            alert("done");
        }

    }

    return (
        
        <>
          {
              updata ?
                  <>
                      <div class="alert alert-success alert-dismissible fade show" role="alert">
                          <strong>{updata.name}</strong> <span> updated succesfully! </span>
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>
                  </> : ""
          }

        <div className="section-contact">
        <div className="container">
            <NavLink to="/Admin">home2</NavLink>
            <form>
                
                    <div class="form-group">
                        <label for="exampleInputEmail1" class="form-label">	Lifestyle Motivation</label>
                        <input type="text" value={inpval.Lifem} onChange={setdata} name="Lifem" class="form-element" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" class="form-label">Health Plans</label>
                        <input type="text" value={inpval.Healthplan} onChange={setdata} name="Healthplan" class="form-element" id="exampleInputPassword1" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" class="form-label">Sport Specific</label>
                        <input type="text" value={inpval.gymworkouts} onChange={setdata} name="gymworkouts" class="form-element" id="exampleInputPassword1" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" class="form-label">Lists Of Items To Eat</label>
                        <input type="text" value={inpval.mealplans} onChange={setdata} name="mealplans" class="form-element" id="exampleInputPassword1" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" class="form-label">Workouts</label>
                        <input type="text" value={inpval.Sst} onChange={setdata} name="Sst" class="form-element" id="exampleInputPassword1" />
                    </div>
                  
                    <div class="form-group full">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                        <textarea name="desc" value={inpval.desc} onChange={setdata} className="form-element" id="" cols="30" rows="5"></textarea>
                    </div>
                    <div className="submit-group">
                    <button type="submit" onClick={updateuser}>Submit</button>
                    </div>
            </form>
        </div>
        </div>
        </>
    )
}

export default Update