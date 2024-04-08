import { useMutation } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { APIInstance } from '@services/global.service'

export const useRecipeFromIngredientsService = () => {
  const { enqueueSnackbar } = useSnackbar()

  const { isError, isPending, isSuccess, mutate, data } = useMutation({
    mutationFn: getRecipeAPI,
    onError: _error => {
      console.log(_error)
      enqueueSnackbar(_error?.response?.data?.message || 'Something went wrong!', {
        variant: 'error',
      })
    },
  })

  return {
    isLoading: isPending,
    isSuccess,
    isError,
    mutate,
    result: data?.data?.data?.result ? JSON.parse(data?.data?.data?.result) : null,
    ingredients: data?.data?.data?.ingredients,
  }
}

const getRecipeAPI = data => {
  return APIInstance({
    method: 'POST',
    url: '/chat/create',
    data: {
      ingredients: data.ingredients.map(ingredient => ingredient),
    },
  })
}
