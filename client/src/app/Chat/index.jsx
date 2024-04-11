import styled from '@emotion/styled'
import Logo from '../../components/Logo'
import Display from './components/display'
import Form from './components/form'
import { Skeleton, Typography, Box } from '@mui/material'
import { useRecipeFromIngredientsService } from './services/getRecipe.service'
import { useChatHistoryService } from './services/getChatHistory.service'
import { useEffect } from 'react'
import MarkChatUnreadRoundedIcon from '@mui/icons-material/MarkChatUnreadRounded'

const Chat = () => {
  const { chats, isLoading: isHistoryLoading, refetch } = useChatHistoryService()
  const { isError, isLoading, isSuccess, mutate, recipeIds } = useRecipeFromIngredientsService()

  useEffect(() => {
    refetch()
  }, [isSuccess, refetch])

  return (
    <Root>
      <Header>
        <Logo />
      </Header>
      <Main>
        <Form
          onSubmit={({ ingredients, recipeNumber }) => {
            mutate({ ingredients, recipeNumber })
          }}
        />
        {(isLoading || isHistoryLoading) && (
          <SkeletonBox>
            <Skeleton
              animation="wave"
              height={50}
              sx={{
                background: '#61a77d10',
              }}
            />
            <Skeleton
              animation="wave"
              height={50}
              sx={{
                background: '#61a77d10',
                width: '90%',
              }}
            />
            <SkeletonBox
              animation="wave"
              height={50}
              sx={{
                background: '#61a77d10',
                width: '80%',
              }}
            />
          </SkeletonBox>
        )}

        {isError && (
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{
              textAlign: 'center',
            }}>
            Something went wrong! Please try again...
          </Typography>
        )}

        {isHistoryLoading === false && chats?.length === 0 && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}>
            <MarkChatUnreadRoundedIcon
              color="primary"
              sx={{
                fontSize: '80px',
                marginBottom: '20px',
              }}
            />
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{
                textAlign: 'center',
                fontWeight: '500',
              }}>
              No chat history available.
            </Typography>
            <Typography
              variant="subtitle1"
              color="primary"
              sx={{
                textAlign: 'center',
                fontWeight: '500',
              }}>
              Start by typing your ingredients !
            </Typography>
          </Box>
        )}

        {chats?.map(item => (
          <Display isCurrent={recipeIds.includes(item.id)} key={item.id} userIngredients={item?.userIngredients} ingredients={item?.ingredients} instruction={item?.instruction} dishName={item?.dishName} />
        ))}
      </Main>
    </Root>
  )
}

const Root = styled.div`
  height: calc(100vh);
  display: flex;
  flex-direction: column;
`

const SkeletonBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;
  backdrop-filter: blur(5px);
  padding: 19px 25px 20px;
  border-radius: 12px;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
`
const Main = styled.main`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  padding: 19px 25px 20px;
  flex: 1;
  overflow: scroll;
`

export default Chat
