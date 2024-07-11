import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {CreateTripPage} from '../pages/create-trip/index'
import { TripDetailsPage } from '../pages/trip-details/index'
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
