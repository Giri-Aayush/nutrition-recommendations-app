import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

const Display = ({ dishName, ingredients, instruction }) => {
  return (
    <Main>
      <Root>
        <Typography variant="h3" fontWeight="600">
          {dishName}
        </Typography>

        <br />
        <Typography variant="h6" fontWeight="500">
          Ingredients
        </Typography>
        <ol>
          {ingredients.map((ingredient, index) => (
            <Typography variant="subtitle1" key={index} component="li">
              {ingredient}
            </Typography>
          ))}
        </ol>
        <br />
        <Typography variant="h6" fontWeight="500">
          Steps to Follow
        </Typography>
        <ol>
          {instruction.map((direction, index) => (
            <Typography variant="subtitle1" key={index} component="li">
              {direction}
            </Typography>
          ))}
        </ol>
      </Root>
    </Main>
  )
}

Display.propTypes = {
  dishName: PropTypes.string,
  ingredients: PropTypes.array,
  instruction: PropTypes.array,
}
const Main = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 10px;
`
const Root = styled.div`
  padding: 20px;
  box-shadow: 0px 12px 98px -18px #00ff6724;
  border: 1px solid #61a77d1c;
  background: #61a77d10;
  color: #d2fee4;
  border-radius: 12px;
  margin-right: auto;
  border-bottom-right-radius: 60px;
  overflow: hidden;
  position: relative;
  height: fit-content;
  ::before {
    content: '';
    position: absolute;
    width: 180px;
    height: 180px;
    bottom: -10px;
    right: -10px;
    background: #61a77d1c;
    clip-path: circle(50% at 0 0);
    rotate: 180deg;
  }
  hr {
    border: 0;
    height: 1px;
    background: #61a77d77;
    margin: 20px 0;
  }
`

export default Display
