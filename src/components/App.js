import React , {useEffect, useState} from "react";
function App (){
    const [Image , setImage] = useState(null)
   useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setImage(data.message));
  },[]); 
    return(
        <div>
      {Image ? (
        <img src={Image} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
    )

};
export default App