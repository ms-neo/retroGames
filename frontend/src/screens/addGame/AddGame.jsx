// import { Form } from "react-router-dom"
import { useEffect, useState } from "react"
import Button from "../../components/button/Button"
import Input from "../../components/input/Input.jsx"
import Logo from "../../components/logo/Logo"
import { Container, Form, SubContainer } from "./addGameStyles"
import { useDispatch, useSelector } from "react-redux"
import { addGame, getGames} from "../../redux/features/gamesSlice.js"
import BarcodeScanner from "../barcodescanner/BarcodeScanner.jsx"
import { useNavigate } from "react-router-dom"
import { MdQrCodeScanner } from "react-icons/md";
import scanImg from "../../assets/scan-icon.png";



const AddGame = () => {
  const dispatch = useDispatch()
  // const { game ,isError} = useSelector(state =>state.games)
  const navigate = useNavigate()
// console.log(isError,'444')
  const [dataForm, setDataForm] = useState({
    name: '',
    platform: '',
    price: 1,
    dateOfPurchase: '',
    numberOfCopies: 1,
    remarks: '',
  })
  const [file, setFile] = useState('')
  const [isClicked, setisClicked] = useState(false)
  const [result, setResult] = useState("");

  console.log(file,'file')

  let { name,
  platform,
  price,
  dateOfPurchase,
  numberOfCopies,
  remarks,
} =dataForm
console.log(dataForm,'dataaaa')

  const handleSubmit=  (e) =>{
    e.preventDefault()
console.log(file,'file')
console.log(result,'file')
    // i should save data here and send it to the database
     const gameData = {
      name,
      platform,
      price,
      dateOfPurchase,
      numberOfCopies,
      remarks,
      gameCode:result,
      image:file
     }
    //  console.log(imagePath,"imagePath")
     console.log(gameData,"gaaaam")
     console.log(isError,"isError")
     if (!isError) {
      return dispatch(addGame(gameData))
      navigate('/success')
     }
   

  }

  const handleFileChange = (e) =>{
    console.log(e.target.files[0],'here')
    setFile(e.target.files[0])
  }

  const handleChange = (e) =>{
 
    const { name, value } = e.target;
    setDataForm((prevDataForm) => ({
      ...prevDataForm,
      [name]: value
    }));
    console.log(dataForm,"df")
    console.log(dataForm)

  }

  const handleClick = ()=>{
    console.log(isClicked)
    setisClicked(!isClicked)
  }


  return (
    <Container>
    
      <Logo/>
  
 
    {/* <div>AddGame</div> */}

    <form onSubmit={handleSubmit}>
    <SubContainer>
      <div>
      <div>
      <label>Game Name:</label>
      <input 
      required 
      type="text"
      placeholder='Game name'
      name='name'
      value={name}
       onChange={handleChange}></input>
      </div>
      <div>
      <label>Platform:</label>
      <input
         required 
         type="text"
         placeholder='Enter platform'
         name='platform'
         value={platform}
         onChange={handleChange} />
      </div>
      <div>
      <label>Price:</label>
      <input
      required 
      type="number"
      placeholder='Enter price'
      name='price' 
      value={price}
      onChange={handleChange} />
      </div>
      <div>
      <label>Date Of pruchase:</label>
      <input
       required 
       type="date"
       placeholder='Enter price'
       name='dateOfPurchase' 
       value={dateOfPurchase}
       onChange={handleChange}/>
      </div>
      </div>
      <div>
      <div>
      <label>Numper Of Copies:</label>
      <input
      required 
      type="number"
      placeholder='Enter copies number'
      name='numberOfCopies' 
      value={numberOfCopies}
      onChange={handleChange} />
      </div>
      <div>
      <label>Remarks:</label>
      <input
          required 
          type="text"
          placeholder='Enter remarks'
          name='remarks' 
          value={remarks}
          onChange={handleChange} />
      </div>
      <div>
      <label>Game Image:</label>
      <input
          required 
          type="file"
          // placeholder='upload image'
          name='image' 
          // value={file}
          onChange={handleFileChange} />
      </div>
      <div >
      <label>Game Code:</label>
      <div onClick={handleClick}  >
    
      <p>
      {/* <img src={scanImg} width="10%"/> */}
      <span></span>
      <span>{result}</span>
    </p>
      {isClicked ? (
      <>
      <h3>Close Camera X</h3>

      <BarcodeScanner result={result} setResult={setResult}/>
      </>
      )
      :
            <div><MdQrCodeScanner value={{color: 'navy', size: 50}} />
</div>}
    </div>
      </div>
      </div>

      <Button type="submit">Add Game</Button>
    
      </SubContainer>
    </form>
  

    </Container>
  )
}

export default AddGame