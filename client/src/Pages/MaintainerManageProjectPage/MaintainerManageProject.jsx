import React from 'react'
import "../MaintainerManageProjectPage/MaintainerManageProject.css"
import imgone from "../../assets/Images/mainatinermanage.svg"


function MaintainerManageProject() {
  return (
    <div>

      <div className='d-flex justify-content-center mt-5'>
        <div className="maintainer-manage-proj-sec-one">
          <div className='mt-5'>
            <p className='maintainer-manage-proj-sec-one-para'>Overview</p>
            <p className='maintainer-manage-proj-sec-one-paraone'>An overview of all the project in the past 3 weeks</p>
          </div>
          <div className='mt-4'>
            <img src={imgone} />
          </div>
        </div>
      </div>

      <div className="maintainer-manage-proj-sec-two ">
        <div className=" mb-3 d-flex justify-content-end mt-3">
          <button className="btn btn-secondary ">See all</button>
        </div>
      </div>

      <div className="maintainer-manage-proj-sec-three">
        <div className="table-container">
          <table className="table table-bordered text-center shadow-sm">
            <thead className="table-warning">
              <tr >
                <th>Project ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Chat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>jaja129@2024</td>
                <td>JAVA AI</td>
                <td>Introducing new concept of AI tools related to Java</td>
                <td>
                  <select className="form-select">
                    <option className="text-warning">Pending</option>
                    <option className="text-success">Success</option>
                  </select>
                </td>
                <td>
                  <button className="btn btn-outline-primary btn-sm">Chat y</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}

export default MaintainerManageProject
