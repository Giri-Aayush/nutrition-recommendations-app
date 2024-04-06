import styled from '@emotion/styled'

import { IconButton, Typography } from '@mui/material'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded'
import StyledTextField from '../../components/FormElements/StyledTextField'
import { FormProvider, useForm } from 'react-hook-form'

const CreateReport = () => {
  const methods = useForm()

  return (
    <Root>
      <Header>
        <IconButton color="primary">
          <KeyboardBackspaceRoundedIcon />
        </IconButton>

        <Typography variant="h6" color="primary">
          Create a new report
        </Typography>
      </Header>
      <FormProvider {...methods}>
        <Form>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'text.secondary',
              // fontSize: '0.9rem',
              fontWeight: 500,
              letterSpacing: 0.7,
            }}>
            Take a first step to start a healthy journey. Fill the form below to create a new report.
          </Typography>

          <StyledTextField label="Person Name" name="person_name" />
          <StyledTextField label="Report Name" name="report_name" />
          <StyledTextField label="Age" name="report_name" />
          <StyledTextField label="Weight" name="report_name" />
          <StyledTextField label="Height" name="report_name" />
          <StyledTextField label="Activity" name="report_name" />
        </Form>
      </FormProvider>
    </Root>
  )
}

const Root = styled.div``
const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 20px;
  background: ${({ theme }) => theme.palette.background.paper};
  backdrop-filter: blur(5px);
  padding: 10px 15px 10px;
  border-radius: 12px;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  box-shadow: 0px 12px 45px -1px ${({ theme }) => theme.palette.primary.main}18;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 20px;
  background: ${({ theme }) => theme.palette.background.paper};
  backdrop-filter: blur(5px);
  padding: 25px 20px 25px;
  border-radius: 12px;
  margin-top: 55px;
  margin-left: 15px;
  margin-right: 15px;
  /* box-shadow: 0px 12px 45px -1px ${({ theme }) => theme.palette.primary.main}18; */
`

export default CreateReport
