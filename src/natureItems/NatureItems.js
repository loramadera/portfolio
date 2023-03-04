import React, { useEffect, useState } from "react";


function NatureItems() { 

  useEffect(() => {
    GetNatureItems();
  }, [])

  function GetNatureItems () {
    fetch("http://localhost:8080/web/nature-items")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }


  return (
   <div>
    NatureItems 
    </div>
  );

}

export { NatureItems }
