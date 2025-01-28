import { QueryClient, QueryClientProvider, QueryErrorResetBoundary, useQueryClient } from "@tanstack/react-query";
import React, { lazy, useState } from "react";
import Button from "./components/Button";
import { fetchProjects } from "./queries";
import { ErrorBoundary } from "react-error-boundary";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Projects = lazy(() => import('./components/Projects'))
const Project = lazy(() => import('./components/Project'))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    }
  }
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
  const queryClient = useQueryClient();
  const [showProjects, setShowProjects] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <>
      <Button
        onClick={() => {
          setShowProjects((old) => {
            if (!old) {
              queryClient.prefetchQuery({
                queryKey: ['projects'],
                queryFn: fetchProjects,
              })
            }
            return !old;
          })
        }}
      >
        {showProjects ? 'Hide Projects' : 'Show Projects'}
      </Button>

      <hr />

      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <div>
                There was an error!{' '}
                <Button onClick={() => resetErrorBoundary()}>Try again</Button>
                <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
              </div>
            )}
            onReset={reset}
          >
            <React.Suspense fallback={<div style={{backgroundColor:'beige', height: '2000px'}}></div>}>
              {showProjects ? (
                activeProject ? (
                  <Project
                    activeProject={activeProject}
                    setActiveProject={setActiveProject}
                  />
                ) : (
                  <Projects setActiveProject={setActiveProject} />
                )
              ) : null}

            </React.Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
      <ReactQueryDevtools initialIsOpen />
    </>
  )
}