import PropTypes from 'prop-types'
import Autocomplete from '@mui/material/Autocomplete'
import { useController, useFormContext } from 'react-hook-form'
import { CircularProgress } from '@mui/material'
import { StyledTextFieldRoot } from './StyledTextField'

export default function StyledAutocomplete({ name, label, suggestions, noSuggestionsText, onInputChange, loading, required, rules, sx }) {
  const { control } = useFormContext()

  const { field } = useController({
    name,
    control,
    defaultValue: '',
    rules: {
      required: required,
      ...rules,
    },
  })

  return (
    <Autocomplete
      sx={sx}
      filterOptions={x => x}
      options={suggestions}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={field.value || null}
      noOptionsText={noSuggestionsText}
      onChange={(event, newValue) => {
        field.onChange(newValue || null)
      }}
      onInputChange={(event, newInputValue) => {
        onInputChange(newInputValue || null)
      }}
      renderInput={params => (
        <StyledTextFieldRoot
          {...params}
          name={field.name}
          label={label}
          fullWidth
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      getOptionLabel={suggestion => suggestion || ''}
    />
  )
}

StyledAutocomplete.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  suggestions: PropTypes.array.isRequired,
  noSuggestionsText: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  required: PropTypes.bool,
  rules: PropTypes.object,
  sx: PropTypes.object,
}
