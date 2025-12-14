import React from "react";
import { useState } from "react";

export function CreateTodo() {
    
    const [title,setTitle] = React.useState("");
    const [description, setDescripition] = React.useState("");
    return (
    <div>
        <input type="text" placeholder="Title" onChange={function(e){
            setTitle(e.target.value);
        }}></input> 
        <br/>
        <input type="text" placeholder="Description"onChange={function(e){
            setDescripition(e.target.value);
        }}></input> 
        <br/>

         <button onClick ={() =>{
            fetch("http://localhost:3000/todo",{
                method :"POST",
                body:JSON.stringify({
                    title: title,
                    description: description
                }),
                
                headers:{
                    "content-type":"application/json"

                }
            })
            .then(async function (res){
                const json = await res.json();
                alert("todo Added")
            })

         }} > Add Todo</button>
    </div>
    )}