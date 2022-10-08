import React from 'react'
import image1 from './images/img2.jpeg'
import image2 from './images/img3.jpeg'
export default function Gallery() {
  return (
    <div className='Gallery '>
      <div className="row border">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <img src={image2} />

            </div>
            <div className="card-footer">
               <h5 className="text-center">Title</h5>
            </div>
          </div>

        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <img src={image2} />

            </div>
            <div className="card-footer">
               <h5 className="text-center">Title</h5>
            </div>
          </div>

        </div>

        <div className="w-100 p-1"></div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <img src={image2} />

            </div>
            <div className="card-footer">
               <h5 className="text-center">Title</h5>
            </div>
          </div>

        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <img src={image2} />

            </div>
            <div className="card-footer">
               <h5 className="text-center">Title</h5>
            </div>
          </div>

        </div>
        <div className="w-100 p-1"></div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <img src={image2} />

            </div>
            <div className="card-footer">
               <h5 className="text-center">Title</h5>
            </div>
          </div>

        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <img src={image2} />

            </div>
            <div className="card-footer">
               <h5 className="text-center">Title</h5>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
