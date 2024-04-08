/* eslint-disable no-regex-spaces */
import styled from '@emotion/styled'
import { useMemo } from 'react'
import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

function getSeparation(result) {
  let titleMatch = result.match(/\[TITLE\]: (.*)\n/)
  let title = titleMatch ? titleMatch[1] : 'No title found'
  let ingredientsMatches = result.matchAll(/\[INGREDIENTS\]:\n((?:  - .*\n)*)/g)
  let directionsMatch = result.match(/\[DIRECTIONS\]:\n((?:  - .*\n)*)/)
  let directions = directionsMatch ? directionsMatch[1] : 'No directions found'

  let ingredients = ''
  for (let match of ingredientsMatches) {
    ingredients += match[1]
  }

  ingredients = ingredients
    .split('\n')
    .filter(Boolean)
    .map(item => `${item.replace(/  - \d: /, '')}`)

  if (directions) {
    directions = directions
      .split('\n')
      .filter(Boolean)
      .map(item => `${item.replace(/  - \d: /, '')}`)
  }

  return { title, ingredients, directions }
}

const Display = ({ inputIngredients, result }) => {
  const { title, ingredients, directions } = useMemo(() => {
    return getSeparation(result)
  }, [result])

  return (
    <Main>
      <Root>
        <Typography variant="subtitle2" fontWeight="600" color="primary">
          Ingredients by picked you
        </Typography>
        <Typography variant="subtitle1" fontWeight="600">
          {inputIngredients.join(', ')}
        </Typography>
        <hr />
        <Typography variant="h3" fontWeight="600">
          {title}
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
          {directions.map((direction, index) => (
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
  inputIngredients: PropTypes.array,
  result: PropTypes.string,
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
