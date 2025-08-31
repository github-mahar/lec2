// import React from 'react'

export default function profile(props) {
  return (
    <div>
      <table className="m-2">
        <thead>
            <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2">Class</th>
                <th className="border p-2">Gender</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="border p-2">{props.name}</td>
                <td className="border p-2">{props.class}</td>
                <td className="border p-2">{props.gender}</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}
