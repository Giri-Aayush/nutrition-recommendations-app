import styled from '@emotion/styled'
import { useState } from 'react'
import { Button, Typography, IconButton } from '@mui/material'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import PropTypes from 'prop-types'

const Form = ({ onSubmit }) => {
  const [currentIngredient, setCurrentIngredient] = useState('')
  const [recipeNumber, setRecipeNumber] = useState('')
  const [ingredients, setIngredients] = useState([])
  return (
    <Root
      onSubmit={event => {
        event.preventDefault()
        setIngredients([])
        setCurrentIngredient('')
        onSubmit({ ingredients, recipeNumber })
      }}>
      {ingredients.map((ingredient, index) => (
        <Field key={index}>
          <Typography variant="subtitle2" lineHeight={1}>
            {ingredient}
          </Typography>
          <IconButton
            onClick={() => {
              const newIngredients = [...ingredients]
              newIngredients.splice(index, 1)
              setIngredients(newIngredients)
            }}>
            <DeleteForeverRoundedIcon
              fontSize="small"
              sx={{
                color: '#c2ffdbab',
              }}
            />
          </IconButton>
        </Field>
      ))}
      <Main>
        <Button
          onClick={() => {
            if (!currentIngredient) return
            setCurrentIngredient('')
            setIngredients([...ingredients, currentIngredient])
          }}>
          <AddRoundedIcon fontSize="medium" />
        </Button>
        <Input placeholder="Enter Your Ingredient..." type="text" value={currentIngredient} onChange={event => setCurrentIngredient(event.target.value)} />
        <Input
          className="recCount"
          placeholder="Enter number of recipes..."
          type="text"
          value={recipeNumber}
          onChange={event => {
            setRecipeNumber(event.target.value.replace(/\D/g, ''))
          }}
        />
        <Button
          type="submit"
          sx={{
            background: '#61a77d1c',
            '&:hover': {
              background: '#61a77d35',
            },
          }}>
          <SendRoundedIcon />
        </Button>
      </Main>
    </Root>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

const Root = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 20px;
  box-shadow: 0px 12px 45px -1px ${({ theme }) => theme.palette.primary.main}18;
  border-radius: 12px;
  margin-left: auto;
  box-shadow: 0px 12px 98px -18px #00ff6724;
  border: 1px solid #61a77d1c;
  color: #d2fee4;
`

const Field = styled.div`
  display: flex;
  gap: 10px;
  background: #61a77d28;
  backdrop-filter: blur(5px);
  padding: 5px 0px;
  padding-left: 20px;
  padding-right: 10px;

  border-radius: 10px;

  align-items: center;
  width: fit-content;
`

const Input = styled.input`
  background: transparent;
  color: #c2ffdb;
  font-weight: 600;
  font-size: 16px;
  border: 0;
  outline: 0;
  background: ${({ theme }) => theme.palette.primary.main}11;
  border-radius: 10px;
  padding: 10px 15px;
  letter-spacing: 0.4px;
  &::placeholder {
    color: #c2ffdb;
    opacity: 0.4;
    font-weight: 500;
    letter-spacing: 0.4px;
  }
`

const Main = styled.div`
  display: flex;
  gap: 10px;
`

export default Form
