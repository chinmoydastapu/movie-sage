import { RouterProvider } from "react-router-dom"
import router from "./routers/routers"
import DataLoadContext from "./contexts/DataLoadContext"
import GrenreDataLoadContext from "./contexts/GenreDataLoadContext"

function App() {
  return (
    <DataLoadContext>
      <GrenreDataLoadContext>
        <RouterProvider router={router} />
      </GrenreDataLoadContext>
    </DataLoadContext>
  )
}

export default App
