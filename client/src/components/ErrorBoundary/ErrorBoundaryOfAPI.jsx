import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { Divider, Typography } from '@mui/material'

const ErrorBoundaryOfAPI = ({ message }) => {
  return (
    <Root>
      <Main>
        <TextGroup>
          <Typography variant="h1" color="primary" fontWeight={500}>
            500
          </Typography>
          <Typography variant="h4">SERVER DOWN</Typography>
          {/* <Typography
            variant="h6"
            sx={{
              backdropFilter: 'blur(40px)',
              backgroundColor: '#ffffff10',
              borderRadius: '5px',
              padding: '5px 10px',
              marginTop: '15px',
            }}
            color="primary">
            {location.pathname}
          </Typography> */}
          <Typography variant="subtitle1" maxWidth={350} marginTop={2}>
            {message || 'Sorry for the inconvenience. We are working on it and will be back online soon.'}
          </Typography>
        </TextGroup>
        <Divider />
      </Main>
    </Root>
  )
}

ErrorBoundaryOfAPI.propTypes = {
  message: PropTypes.string,
}

export default ErrorBoundaryOfAPI

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`
const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: ${({ theme }) => theme.palette.background.paper};
  backdrop-filter: blur(5px);
  border: 1px solid ${({ theme }) => theme.palette.secondary.main}30;
  padding: 25px 30px;

  border-radius: 12px;
`
const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
