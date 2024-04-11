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
    recipeIds: data?.recipeIds || [],
  }
}

const getRecipeAPI = async data => {
  const response = await APIInstance({
    method: 'POST',
    url: '/chat/create',
    data: {
      ingredients: data.ingredients.map(ingredient => ingredient),
      recipe_number: data.recipeNumber,
    },
  })

  return {
    recipeIds: response.data.data.dish_id_list.map(id => id),
  }
}
