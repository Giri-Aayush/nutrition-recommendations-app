import { useQuery } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { APIInstance } from '@services/global.service'
import { useEffect } from 'react'

export const useChatHistoryService = () => {
  const { enqueueSnackbar } = useSnackbar()

  const { data, isPending, isSuccess, isError, refetch } = useQuery({
    queryKey: ['CHAT_HISTORY'],
    queryFn: fetchChatHistoryAPI,
  })

  useEffect(() => {
    if (isError) {
      enqueueSnackbar('Some thing went wrong!', {
        variant: 'error',
      })
    }
  }, [isError, enqueueSnackbar])

  return {
    isLoading: isPending,
    isSuccess,
    isError,
    chats: data?.chats,
    refetch,
  }
}

const fetchChatHistoryAPI = async () => {
  const response = await APIInstance({
    url: '/chat/list',
    method: 'GET',
  })

  return {
    chats: response.data?.chats?.map(chat => {
      return {
        id: chat?.id,
        result: JSON.parse(chat?.result),
        ingredients: chat?.user_ingredients,
        ip_address: chat?.ip_address,
      }
    }),
  }
}
