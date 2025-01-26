import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import { fetchProject, fetchProjects } from "../queries";
import Spinner from "./Spinner";
import Button from "./Button";

export default function Porjects({
  setActiveProject
}: {
  setActiveProject: React.Dispatch<React.SetStateAction<string | null>>
}) {
  const queryClient = useQueryClient()
  const { data, isFetching } = useSuspenseQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  })

  return (
    <div>
      <h1>TanStack Repositoires {isFetching ? <Spinner /> : null}</h1>
      {data.map((project) => (
        <p key={project.full_name}>
          <Button
            onClick={() => {
              // Prefetch the project query
              queryClient.prefetchQuery({
                queryKey: ['project', project.full_name],
                queryFn: () => fetchProject(project.full_name),
              })
              setActiveProject(project.full_name)
            }}
          >
            Load
          </Button>{' '}
          {project.name}
        </p>
      ))}
    </div>
  )
}