import { RouterProvider } from "react-router-dom"
import router from "./routers/routers"
import DataLoadContext from "./contexts/DataLoadContext"
import SciFiMoviesLoadContext from "./contexts/SciFiMoviesLoadContext"

function App() {
  return (
    <DataLoadContext>
      <SciFiMoviesLoadContext>
        <RouterProvider router={router} />
      </SciFiMoviesLoadContext>
    </DataLoadContext>
  )
}

export default App
