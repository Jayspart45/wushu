import React from 'react'
import image1 from './images/img2.jpeg'
import image2 from './images/img3.jpeg'



export default function Achivement() {
  return (
    <div class="Achivement">
      <div class="col">
        <img src={image1} />
        <div class="layer">
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam aliquam reiciendis atque asperiores impedit quisquam ad illum totam exercitationem nisi numquam voluptatibus voluptatum, commodi nulla neque dolor eos enim eaque!</h3>

        </div>
      </div>
      <div class="col">
        <img src={image2} />
        <div class="layer">
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam aliquam reiciendis atque asperiores impedit quisquam ad illum totam exercitationem nisi numquam voluptatibus voluptatum, commodi nulla neque dolor eos enim eaque!</h3>
        </div>
      </div>

    </div>
  )
}
