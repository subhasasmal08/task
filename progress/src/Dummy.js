import React from 'react'

export default function Dummy() {
    var arr = [{
        id: 1,
        name: 'Subha'
      }, {
        id: 2,
        name: 'Hrushi'
      }]
      
   var result = arr.map(x => ({value: x.id, text:x.name}));
   console.log(result)

  return (
    <div>Dummy
     <div>
       <div>
        <p>{result}</p>
       </div>

     </div>




    </div>
  )
}
