import React from 'react'

export const PizzaTypesFinal = () => {
    return (
        <div>
            <div id="one">
      <form id="myform">
        Name: <input type="text" name="name" id="name" /><br /><br />
        Gender:
        <input type="radio" name="gender" id="gender" value="male" />Male
        <input type="radio" name="gender" id="gender" value="female" />Female
        <br /><br />
        Age: <input type="number" name="age" id="age" /><br /><br />
        City: <input type="text" name="city" id="city" /><br /><br />
      </form>
      <input type="button" onclick="resetAll()" value="Reset" id="four" />
      <button onclick="addRow();" id="four">Add</button>
      <button onclick="updateRow();" id="four">Update</button>
    </div>

    <table border="1" id="table" width="60%">
      <tr>
        <th>Name</th>
        <th>Gender</th>
        <th>Age</th>
        <th>City</th>
        <th>Actions</th>
      </tr>

      <tr>
        <td>Zeeshan</td>
        <td>male</td>
        <td>10</td>
        <td>lahore</td>
        <td>
          <button onclick="removeRow()" id="but1">Delete</button> /
          <button onclick="selectRow()" id="but2">Select</button>
        </td>
      </tr>

      <tr>
        <td>Adnan</td>
        <td>male</td>
        <td>20</td>
        <td>islamabad</td>
        <td>
          <button onclick="removeRow()" id="but1">Delete</button> /
          <button onclick="selectRow()" id="but2">Select</button>
        </td>
      </tr>

      <tr>
        <td>Saram</td>
        <td>male</td>
        <td>30</td>
        <td>kamra</td>
        <td>
          <button onclick="removeRow()" id="but1">Delete</button> /
          <button onclick="selectRow()" id="but2">Select</button>
        </td>
      </tr>

      <tr>
        <td>Arham</td>
        <td>male</td>
        <td>40</td>
        <td>karachi</td>
        <td>
          <button onclick="removeRow()" id="but1">Delete</button> /
          <button onclick="selectRow()" id="but2">Select</button>
        </td>
      </tr>

      <tr>
        <td>Ahsaan</td>
        <td>male</td>
        <td>50</td>
        <td>quetta</td>
        <td>
          <button onclick="removeRow()" id="but1">Delete</button> /
          <button onclick="selectRow()" id="but2">Select</button>
        </td>
      </tr>
    </table>
        </div>
    )
}
