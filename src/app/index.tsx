import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { App } from './App'
import 'shared/i18n/config'
import { ErrorBoundary } from './providers/ErrorBoundary'
import { PageError } from 'widgets/PageError'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <ErrorBoundary fallback={<PageError />}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
)
