import { useState } from "react"
import type {ChangeEvent,SubmitEvent } from "react"
import type { Activity } from "../types"
import { categories } from "../data/catogories"

export default function Form() {

    const [activity,setActivity]=useState<Activity>({
        category:1,
        name:"",
        calories:0
    })

    const handleChange =(e:ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        const IsNumberField=["category","calories"].includes(e.target.id)
        setActivity({
            ...activity,
            [e.target.id] : IsNumberField? +e.target.value: e.target.value
        })
    }

    const isValidActivity =()=>{
        const {name,calories}=activity
        return name.trim() !== "" && calories>0
    }

    const handleSubmit = (e:SubmitEvent<HTMLFormElement>)=>{

    }
  return (
    <form 
        className="space-y-5 bg-white shadow p-10 rounded-lg"
        onSubmit={handleSubmit}
        
        >
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Category:</label>
            <select 
                className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                id="category"
                value={activity.category}
                onChange={handleChange}
            >
                {categories.map(category=>(
                    <option
                        key={category.id}
                        value={category.id}
                    >
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="name" className="font-bold">Activity:</label>
            <input
                id="name"
                type="text"
                className="border border-slate-300 p-2 rounded-lg"
                placeholder=" ej. comida, accion"
                value={activity.name}
                onChange={handleChange}
            />
            </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className="font-bold">Calories:</label>
            <input
                id="calories"
                type="number"
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Calories. ej 500 ,800 "
                value={activity.calories}
                onChange={handleChange}
            />
        </div>
        <input
            type="submit"
            className=" bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
            value={activity.category===1? "Save Food": "Save Activity"}
            disabled={!isValidActivity()}
        />   
    </form>
  )
}

