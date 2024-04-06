import { useSnackbar } from 'notistack'
import { useCallback } from 'react'

export default function useFormError() {
  const { enqueueSnackbar } = useSnackbar()

  const handleFormError = useCallback(
    error => {
      const processError = errorInfo => {
        if (Array.isArray(errorInfo)) {
          errorInfo.forEach(errorItem => {
            const [, itemInfo] = Object.entries(errorItem)[0]
            console.log(itemInfo)
            enqueueSnackbar(itemInfo.message || '', {
              variant: 'error',
            })
          })
        } else {
          const [, nestedErrorInfo] = Object.entries(errorInfo)[0]
          if (Object.entries(errorInfo).length !== 0 && errorInfo.message === undefined) {
            processError(nestedErrorInfo)
          } else {
            enqueueSnackbar(errorInfo.message || '', {
              variant: 'error',
            })
          }
        }
      }
      processError(error)
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
