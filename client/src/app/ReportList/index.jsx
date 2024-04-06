import styled from '@emotion/styled'
import Logo from '../../components/Logo'
import DrawRoundedIcon from '@mui/icons-material/DrawRounded'
import { Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import address from '@address'

const ReportList = () => {
  return (
    <Root>
      <Header>
        <Logo />
      </Header>

      <Main>
        <CreateActionModal>
          <DrawRoundedIcon color="primary" fontSize="large" />
          <Typography color="primary" variant="h6">
            Create a new report
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              fontSize: '0.9rem',
            }}
            variant="subtitle2">
            Take a first step to start a healthy journey
          </Typography>
          <Link to={address.create}>
            <Button
              variant="contained"
              sx={{
                mt: 1.5,
              }}>
              Create a report
            </Button>
          </Link>
        </CreateActionModal>
      </Main>
    </Root>
  )
}

const Root = styled.div``
const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* background: ${({ theme }) => theme.palette.background.paper}; */
  backdrop-filter: blur(5px);
  /* border: 1px solid ${({ theme }) => theme.palette.primary.main}30; */
  padding: 19px 25px 20px;
  border-radius: 12px;

  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  /* box-shadow: 0px 12px 45px -1px ${({ theme }) => theme.palette.primary.main}18; */
`
const Main = styled.main``

const CreateActionModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: ${({ theme }) => theme.palette.background.paper};
  backdrop-filter: blur(5px);
  padding: 19px 25px 20px;
  border-radius: 12px;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  align-items: center;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
`

export default ReportList
