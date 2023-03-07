import React from 'react'
import Card from './Card'
const Form = () => {
  return (
    <div>
        <form>
          <label> Nombre </label>
          {/* <input type="text" value={user.nombre}onChange /> */}

          <select name="" id="">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>

        </form>
        <h1> <Card nombre={"Belen"}/></h1>

    </div>
  )
}

export default Form
