import { useSnackbar } from 'notistack'
import { useCallback } from 'react'

export default function useFormError() {
  const { enqueueSnackbar } = useSnackbar()

  const handleFormError = useCallback(
    error => {
      // eslint-disable-next-line no-unsafe-optional-chaining
      const [, info] = Object.entries(error)?.[0]

      if (Array.isArray(info)) {
        info.map(item => {
          const [, info] = Object.entries(item)[0]
          enqueueSnackbar(info.message || '', {
            variant: 'error',
          })
        })
      } else {
        enqueueSnackbar(info.message || '', {
          variant: 'error',
        })
      }
    },
    [enqueueSnackbar],
  )

  return { handleFormError }
}

export const getFormErrorMessage = error => {
  // eslint-disable-next-line no-unsafe-optional-chaining
  const [field, message] = Object.entries(error)?.[0]

  if (field && message?.[0]) return message?.[0]
}
