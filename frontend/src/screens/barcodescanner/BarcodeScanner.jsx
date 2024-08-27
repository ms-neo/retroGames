import React, { useState } from 'react'
import { useZxing } from "react-zxing";

const BarcodeScanner = ({result,setResult}) => {
   

    const { ref } = useZxing({
      onDecodeResult(result) {
        setResult(result.getText());
      },
    });
 // i need to let the camera close the moment the code scaned

  return (
    <div><video  style={{width:"60%"}} ref={ref} />
    {/* <p>
      <span>Last result:</span>
      <span>{result}</span>
    </p> */}
  </div>
  )
}

export default BarcodeScanner