import styled from '@emotion/styled'

import { IconButton, Typography, Button, CircularProgress } from '@mui/material'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded'
import StyledTextField from '../../components/FormElements/StyledTextField'
import { FormProvider, useForm } from 'react-hook-form'
import StyledSelect from '../../components/FormElements/StyledSelect'
import { useNavigate } from 'react-router-dom'
import { useCreateReportService } from './services/createReport.service'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import useFormError from '@hooks/useFormError'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  person_name: yup.string().required('Person name is required'),
  report_name: yup.string().required('Report name is required'),
  age: yup.number().required('Age is required').typeError('Age must be a number'),
  weight: yup.number().required('Weight is required').typeError('Weight must be a number'),
  height: yup.object().shape({
    feet: yup.number().required('Feet is required').typeError('Feet must be a number'),
    inches: yup.number().required('Inches is required').typeError('Inches must be a number'),
  }),
  activity: yup.number().required('Activity level is required').typeError('Activity level is required'),
})

const CreateReport = () => {
  const navigate = useNavigate()
  const { mutate, isLoading } = useCreateReportService()
  const { handleFormError } = useFormError()
  const methods = useForm({
    defaultValues: {
      person_name: '',
      report_name: '',
      age: '',
      weight: '',
      height: {
        feet: '',
        inches: '',
      },
      activity: '',
    },
    resolver: yupResolver(schema),
  })

  return (
    <Root>
      <Header>
        <IconButton
          onClick={() => {
            navigate(-1)
          }}
          color="primary">
          <KeyboardBackspaceRoundedIcon />
        </IconButton>

        <Typography variant="h6" color="primary">
          Create a new report
        </Typography>
      </Header>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(mutate, handleFormError)}>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'text.secondary',
              fontWeight: 500,
              letterSpacing: 0.7,
            }}>
            Take a first step to start a healthy journey. Fill the form below to create a new report.
          </Typography>

          <Column>
            <Typography variant="subtitle1" color="primary" fontWeight={500}>
              Person Name
            </Typography>
            <Row>
              <StyledTextField name="person_name" placeholder="Enter person name here..." />
            </Row>
          </Column>
          <Column>
            <Typography variant="subtitle1" color="primary" fontWeight={500}>
              Report Name
            </Typography>
            <Row>
              <StyledTextField name="report_name" placeholder="Enter report name here..." />
            </Row>
          </Column>
          <Column>
            <Typography variant="subtitle1" color="primary" fontWeight={500}>
              Age
            </Typography>
            <Row>
              <StyledTextField name="age" placeholder="Enter age in years" />
            </Row>
          </Column>
          <Column>
            <Typography variant="subtitle1" color="primary" fontWeight={500}>
              Weight
            </Typography>
            <Row>
              <StyledTextField name="weight" placeholder="Enter weight in kg" />
            </Row>
          </Column>
          <Column>
            <Typography variant="subtitle1" color="primary" fontWeight={500}>
              Height
            </Typography>
            <Row>
              <StyledTextField name="height.feet" placeholder="Enter feet" />
              <StyledTextField name="height.inches" placeholder="Enter inches" />
            </Row>
          </Column>
          <Column>
            <Typography variant="subtitle1" color="primary" fontWeight={500}>
              Activity
            </Typography>
            <Row>
              <StyledSelect
                name="activity"
                placeholder="Select activity level"
                menuList={[
                  {
                    value: 1.2,
                    label: 'Sedentary: Little or no exercise',
                  },
                  {
                    value: 1.375,
                    label: 'Lightly Active: Exercise 1-3 times/week',
                  },
                  {
                    value: 1.464,
                    label: 'Moderately Active: Exercise 4-5 times/week',
                  },
                  {
                    value: 1.549,
                    label: 'Active: Daily exercise or intense exercise 3-4 times/week',
                  },
                  {
                    value: 1.725,
                    label: 'Very Active: Intense exercise 6-7 times/week',
                  },
                  {
                    value: 1.89,
                    label: 'Very Intensively Active: Exercise daily, or physical job',
                  },
                ]}
              />
            </Row>
          </Column>

          <Button variant="contained" type="submit" endIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <SendRoundedIcon />}>
            Submit
          </Button>
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

const Row = styled.div`
  display: flex;
  gap: 20px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export default CreateReport
