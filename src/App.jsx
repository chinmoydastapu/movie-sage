import { RouterProvider } from "react-router-dom"
import router from "./routers/routers"
import DataLoadContext from "./contexts/DataLoadContext"

function App() {
  return (
    <DataLoadContext>
      <RouterProvider router={router} />
    </DataLoadContext>
  )
}

export default App
