import { RouterProvider } from "react-router-dom"
import { mainRouter } from "./router/mainRouter"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const App = () => {
  let client = new QueryClient()
  return (
    <div>
      <QueryClientProvider client={client}>
      <RouterProvider router={mainRouter}/>
      </QueryClientProvider>
    </div>
  )
}

export default App