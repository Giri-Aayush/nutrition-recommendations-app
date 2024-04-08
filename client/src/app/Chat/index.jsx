import styled from '@emotion/styled'
import Logo from '../../components/Logo'
import Display from './components/display'
import Form from './components/form'
import { Skeleton, Typography } from '@mui/material'
import { useRecipeFromIngredientsService } from './services/getRecipe.service'
import { useChatHistoryService } from './services/getChatHistory.service'
import { useEffect } from 'react'

const Chat = () => {
  const { chats, isLoading: isHistoryLoading, refetch } = useChatHistoryService()
  const { isError, isLoading, isSuccess, mutate } = useRecipeFromIngredientsService()

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
          onSubmit={ingredients => {
            console
            mutate({ ingredients })
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
        {chats?.map(item => (
          <Display key={item.id} inputIngredients={item?.ingredients} result={item?.result} />
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
