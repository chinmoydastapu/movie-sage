import { RouterProvider } from "react-router-dom"
import router from "./routers/routers"

function App() {
  return (
    <RouterProvider router={router}>
      <div className="text-center text-5xl text-green-400">
        Hello Movie Reviewers!!
      </div>
    </RouterProvider>
  )
}

export default App
