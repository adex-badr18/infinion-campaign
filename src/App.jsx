import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Overview from "./pages/overview/Overview";
import Campaigns, {
    loader as campaignsLoader,
} from "./pages/campaigns/Campaigns";
import CampaignCreate from "./pages/campaign/campaignCreate/CampaignCreate";
import CampaignEdit, {
    loader as campaignEditLoader,
} from "./pages/campaign/campaignEdit/CampaignEdit";
import CampaignView, {
    loader as campaignViewLoader,
} from "./pages/campaign/campaignView/CampaignView";
import PageNotFound from "./components/PageNotFound";
import "./App.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Overview /> },
            {
                path: "campaigns",
                element: <Campaigns />,
                loader: campaignsLoader,
            },
            {
                path: "campaigns/:id",
                element: <CampaignView />,
                loader: campaignViewLoader,
            },
            { path: "campaigns/create", element: <CampaignCreate /> },
            {
                path: "campaigns/:id/edit",
                element: <CampaignEdit />,
                loader: campaignEditLoader,
            },
            { path: "*", element: <PageNotFound /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
