import { useMutation } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { APIInstance } from '@services/global.service'

export const useCreateReportService = () => {
  const { enqueueSnackbar } = useSnackbar()

  const { isError, isLoading, isSuccess, mutate } = useMutation({
    mutationFn: createReportAPI,
    onSuccess: _data => {
      enqueueSnackbar(_data?.data?.message, {
        variant: 'success',
      })
    },
    onError: _error => {
      console.log(_error)
      enqueueSnackbar(_error?.response?.data?.message || 'Something went wrong!', {
        variant: 'error',
      })
    },
  })

  return {
    isLoading,
    isSuccess,
    isError,
    mutate,
  }
}

const createReportAPI = data => {
  return APIInstance({
    method: 'POST',
    url: '/report/create',
    data: {
      person_name: data.person_name,
      report_name: data.report_name,
      age: parseInt(data.age),
      weight: parseInt(data.weight),
      height: data.height.feet * 30.48 + data.height.inches * 2.54,
      activity: parseInt(data.activity),
    },
  })
}
