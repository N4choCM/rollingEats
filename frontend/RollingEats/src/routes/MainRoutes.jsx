import { Routes, Route } from "react-router-dom";
import NavbarApp from "../components/NavbarApp";
import HomeScreen from "../pages/HomeScreen";

const MainRoutes = () => {
	return (
		<>
			<NavbarApp />
			<Routes>
				<Route path="/" element={<HomeScreen />} />
			</Routes>
		</>
	);
};

export default MainRoutes;
