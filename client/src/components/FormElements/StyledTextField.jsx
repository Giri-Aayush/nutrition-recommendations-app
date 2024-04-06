import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import { useController, useFormContext } from 'react-hook-form'
import { TextField, Tooltip } from '@mui/material'

const StyledTextField = ({ name, label, rules, required, disabled, ...props }) => {
  const formContext = useFormContext()
  const { control, errors } = formContext

  const { field } = useController({
    name,
    control,
    defaultValue: '',
    rules: {
      required: required,
      ...rules,
    },
  })

  const errorMessage = errors?.[name]?.message
  const isError = Boolean(errorMessage)

  const rootProps = {
    size: 'small',
    error: isError ? isError : undefined,
    label: label,
    required: required || Boolean(rules?.required),
    ...field,
    ...props,
  }

  if (disabled)
    return (
      <Tooltip title={`Your cannot change ${label}`}>
        <StyledTextFieldRoot {...rootProps} disabled={disabled} />
      </Tooltip>
    )

  return <StyledTextFieldRoot {...rootProps} />
}

StyledTextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  rules: PropTypes.object,
  required: PropTypes.bool,
  Icon: PropTypes.elementType,
  disabled: PropTypes.bool,
}

export const StyledTextFieldRoot = styled(TextField)`
  .MuiInputBase-input {
    box-shadow: black !important;
  }
  min-width: 230px;
  .MuiOutlinedInput-root {
    letter-spacing: 0.45px;
  }

  .MuiInputLabel-asterisk {
    letter-spacing: 0.45px;
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette?.primary?.main}35;
    border-width: 1px;
  }

  .MuiInputLabel-root {
    color: ${({ theme }) => theme.palette?.primary?.main}d1;
    font-weight: 500;
    letter-spacing: 0.45px;
  }

  .MuiInputLabel-root.Mui-focused {
    color: ${({ theme }) => theme.palette?.primary?.main};
  }

  .MuiOutlinedInput-input {
    /* padding-inline: 14px; */
    /* padding-block: 16px; */

    -webkit-autofill {
      box-shadow: none;
      -webkit-text-fill-color: none;
    }
  }
`
export default StyledTextField
