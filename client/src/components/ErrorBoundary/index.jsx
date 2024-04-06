import styled from '@emotion/styled'
import { Link, useLocation, useRouteError } from 'react-router-dom'
import { Button, Divider, Typography } from '@mui/material'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const ErrorBoundary = () => {
  let location = useLocation()
  let error = useRouteError()

  console.error(error)

  if (error?.statusText === 'Not Found') {
    return (
      <Root>
        <Main>
          <TextGroup>
            <Typography variant="h1" color="primary" fontWeight={500}>
              404
            </Typography>
            <Typography variant="h4">Page Not Found</Typography>
            <Typography
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
            </Typography>
            <Typography variant="subtitle1" maxWidth={350} marginTop={2}>
              This can be because you have enter here typing wrong url or this page is under construction
            </Typography>
          </TextGroup>
          <Divider />
          <Link to="/">
            <Button disableElevation variant="contained" startIcon={<ArrowBackIcon />}>
              Back To Dashboard
            </Button>
          </Link>
        </Main>
      </Root>
    )
  }

  return (
    <Root>
      <Main>
        <TextGroup>
          <Typography variant="h1" color="primary" fontWeight={500}>
            OOps!
          </Typography>
          <Typography variant="h4">Error Occurred</Typography>
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: '14px',
              backdropFilter: 'blur(40px)',
              backgroundColor: '#ffffff10',
              borderRadius: '5px',
              padding: '5px 10px',
              marginTop: '15px',
            }}
            color="primary">
            {error.toString()}
          </Typography>
          <Typography variant="subtitle1" maxWidth={350} marginTop={2}>
            Error occurred while loading this page. Please contact ... Support.
          </Typography>
        </TextGroup>
        <Divider />
        <Link to="/">
          <Button variant="contained" startIcon={<ArrowBackIcon />}>
            Back To Dashboard
          </Button>
        </Link>
      </Main>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
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

export default ErrorBoundary
