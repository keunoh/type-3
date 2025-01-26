import { QueryClient, QueryClientProvider, QueryErrorResetBoundary, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import Button from "./components/Button";
import { fetchProjects } from "./queries";
import Project from "./components/Project";
import Porjects from "./components/Projects";
import { ErrorBoundary } from "react-error-boundary";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
            <React.Suspense fallback={<h1>Loading projects...!!</h1>}
              {...showProjects ? (
                activeProject ? (
                  <Project
                    activeProject={activeProject}
                    setActiveProject={setActiveProject}
                  />
                ) : (
                  <Porjects setActiveProject={setActiveProject} />
                )
              ) : null}>

            </React.Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
      <ReactQueryDevtools initialIsOpen />
    </>
  )
}