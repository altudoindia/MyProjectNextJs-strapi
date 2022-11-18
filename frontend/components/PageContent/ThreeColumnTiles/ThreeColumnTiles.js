import React from "react";
import Description from '/components/Elements/Description';
import Image from '/components/Elements/Image';
import Title from '/components/Elements/Title';
const StaffListing = ( {data} ) => {

     return (
      <>
        <div className='row'>   
            {data.map(({attributes,index}) => {
                return (
                    <div key={index} className="col-4 text-center">
                        <div className="profileimage">
                        <img className="group list-group-image img-fluid"  src={`http://localhost:1337${attributes.Image.data.attributes.url}`} />
                       
                        </div>                   
                        <Title type="h2">{attributes.Title}</Title>
                        <Description className="description">{attributes.Title}</Description>
                    </div>
                )
            })}
        </div>
      </>
    )
  }
  

  
  
  export default StaffListing;