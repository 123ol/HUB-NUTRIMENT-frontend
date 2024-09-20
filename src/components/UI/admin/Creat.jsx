import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { adddata } from '../../context/ContextProvider';
import "../user/bord.css"
function Creat() {
    const { udata, setUdata } = useContext(adddata);

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


    const addinpdata = async (e) => {
        e.preventDefault();

        const { Lifem, Healthplan, gymworkouts, mealplans, desc, Sst} = inpval;

        const res = await fetch("https://gymbackend-uyoa.onrender.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Lifem, Healthplan, gymworkouts, mealplans, desc, Sst
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
            alert("error");

        } else {
            setUdata(data)
            alert("data added");

        }
    }

    return (
        <>        <div className="section-contact">
            <div className='container'>
                <h1>Add your </h1>
            <NavLink to="/">home</NavLink>
            <form>
                
                    <div className="form-group">
                        <label for="exampleInputEmail1">Lifestyle Motivation</label>
                        <input type="text" value={inpval.Lifem} onChange={setdata} name="Lifem" class="form-element" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" >Health Plans</label>
                        <input type="text" value={inpval.Healthplan} onChange={setdata} name="Healthplan" class="form-element" id="exampleInputPassword1" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" >Sport Specific</label>
                        <input type="text" value={inpval.Sst} onChange={setdata} name="Sst" class="form-element" id="exampleInputPassword1" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" >Lists Of Items To Eat</label>
                        <input type="text" value={inpval.mealplans} onChange={setdata} name="mealplans" class="form-element"  />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" >Workouts</label>
                        <input type="text" value={inpval.gymworkouts} onChange={setdata} name="gymworkouts" class="form-element"  />
                    </div>
                 
                    <div class="form-group full">
                        <label for="exampleInputPassword1" >Description</label>
                        <textarea name="desc" value={inpval.desc} onChange={setdata} className="form-element" id="" cols="30" rows="5"></textarea>
                    </div>
<div className="submit-group">
                    <button type="submit" onClick={addinpdata}>Submit</button>
                </div>
            </form>
        </div>
        </div></>

    )
}

export default Creat