import { CssBaseline, ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RoutesContainer from '@routes'
import snackbarComponents from '@theme/snackbar.components'
import { SnackbarProvider } from 'notistack'
import darkTheme from '@theme/dark.theme'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 1000 * 60 * 60 * 24,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <SnackbarProvider Components={snackbarComponents}>
          <RoutesContainer />
        </SnackbarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
