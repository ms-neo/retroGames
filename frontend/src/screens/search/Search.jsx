import Button from "../../components/button/Button"
import { SearchContainer } from "./searchStyles"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from "react";
import { createTheme } from "@mui/material";


const Search = ({games,setCards}) => {
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState('');
  const [val, setVal] = useState([]);

   console.log(val,"val")
   console.log(inputValue,"input")
   console.log(value,'value')

   const handleSearch  = e =>{
   let newGames=[];
 
   if (games.length || value !== 0){
    games.forEach(game => {
      if (value !== 0 && game.name.includes(value)  ){
        console.log('a')
        console.log(game.name.includes(value))
        newGames.push(game.name)
      } 
      else if (value === 0 && game.name.includes(inputValue)){
        console.log('b')
        newGames.push(game.name)
      }
      setVal(newGames)
      setCards(newGames)
    });
   }
   }

   const theme = createTheme({
    components: {
      MuiAutocomplete: {
        styleOverrides: {
          option: {
            '&[aria-selected="true"]': {
              backgroundColor: '#e3abed',
            },
            color:'#fff',
            '&:hover': {
              backgroundColor: '#9c27b0',
            },
            backgroundColor: '#fff',
          },
        },
      },
    },
  })

  return (
    <SearchContainer>
       {games.length && (
        <>
       <Autocomplete
       className="auto"
        disablePortal
        inputValue={inputValue}
        onInputChange={(e, newInputValue) => {
          setInputValue(newInputValue) 
          console.log(e.target.value,'ee')
          let ee =e.target.value
          setValue(ee)
        }}
        id='test'
        options={games}
        getOptionLabel={(option=>option.name?option.name:'')}
        sx={{ width: 700 }}
        renderInput={(params) => <TextField {...params}  label="Game name" />}
        />
        </>)}
      <div onClick={handleSearch} className="btn">Search</div>
    </SearchContainer>
  )
}


export default Search