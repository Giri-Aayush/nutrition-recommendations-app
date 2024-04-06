import styled from '@emotion/styled'
import { FormControl, FormHelperText } from '@mui/material'
import { Select, MenuItem } from '@mui/material'
import { useController, useFormContext } from 'react-hook-form'
import PropTypes from 'prop-types'

import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'

const StyledSelect = ({ name, label, menuList, disabled, rules, helperText, required, sx, placeholder }) => {
  const formContext = useFormContext()
  const { control, errors } = formContext

  const { field } = useController({
    name,
    control,
    rules,
    defaultValue: '',
  })

  const labelId = `${name}-label`
  const errorMessage = errors?.[name]?.message

  const isError = Boolean(errorMessage)
  const isRequired = required || Boolean(rules?.required)

  const selectProps = {
    id: name,
    labelId: labelId,
    label: label,
    required: isRequired,
    IconComponent: KeyboardArrowDownRoundedIcon,
    name: name,
    inputRef: field.ref,
    onBlur: field.onBlur,
    onChange: field.onChange,
    value: formContext.watch(name),
  }

  const _menuItemsMapping = (item, index) => (
    <StyledMenuItems id={index} value={item.value} key={index}>
      {item.label}
    </StyledMenuItems>
  )

  return (
    <Root variant="outlined" size="small" error={isError ? isError : undefined} sx={sx} defaultValue="" disabled={disabled}>
      <StyledSelectPaper size="small" placeholder={placeholder} {...selectProps}>
        {menuList.map(_menuItemsMapping)}
      </StyledSelectPaper>

      <FormHelperText>{helperText}</FormHelperText>
    </Root>
  )
}

StyledSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  rules: PropTypes.object,
  required: PropTypes.bool,
  Icon: PropTypes.elementType,
  disabled: PropTypes.bool,
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.string,
    }),
  ),
  helperText: PropTypes.string,
  sx: PropTypes.object,
  placeholder: PropTypes.string,
}

const Root = styled(FormControl)`
  .MuiInputLabel-root {
    /* font-size: 0.94rem; */
  }
  .MuiInputLabel-asterisk {
    /* font-size: 0.84rem; */
    /* line-height: 1.445; */
  }
  .MuiOutlinedInput-root {
    /* font-size: 0.81rem; */
  }
  .MuiSelect-select {
    /* padding: 12px 14px; */
  }
  .MuiSvgIcon-root {
    color: rgb(255, 255, 255, 0.5);
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette?.primary?.main}35;
    border-width: 1px;
  }
  min-width: 230px;
  input {
    opacity: 1;
    background: transparent;
    border: none;
    color: transparent;
    padding-left: 14px;
    padding-bottom: 10px;
  }
  input::placeholder {
    color: #8e8e8e;
    font-size: 0.94rem;
    letter-spacing: 0.45px;
  }
`

const StyledSelectPaper = styled(Select)`
  font-size: 1rem;
`

const StyledMenuItems = styled(MenuItem)`
  font-size: 1rem;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 14px;
  padding-right: 14px;
`

export default StyledSelect
