import { useRoutes } from 'react-router-dom';
import DashboardLayout from '../Layouts/Dashboard';
import DashboardPage from '../Pages/Dashboard';
import WeatherPage from '../Pages/Weather';
import HistoryPage from '../Pages/History';

const userRoutes = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: '/weather',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <WeatherPage />,
      },
    ],
  },
  {
    path: '/history',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <HistoryPage />,
      },
    ],
  },
  
  {
    path: '*',
    element: <DashboardLayout />,
  },
];

const AppRoutes = () => {
  const Routes = useRoutes(userRoutes);
  return Routes;
};
export default AppRoutes;
