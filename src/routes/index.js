// import Contents from "../components/Contents/Contents";
import HomePage from "../pages/HomePage/HomePage";
import ActionMoviesPage from "../pages/ActionMoviesPage/ActionMoviesPage";
import AdventureMoviesPage from "../pages/AdventureMoviesPage/AdventureMoviesPage";
import AnimationMoviesPage from "../pages/AnimationMoviesPage/AnimationMoviesPage";
import ComedyMoviesPage from "../pages/ComedyMoviesPage/ComedyMoviesPage";
import CrimeMoviesPage from "../pages/CrimeMoviesPage/CrimeMoviesPage";
import DocumentaryMoviesPage from "../pages/DocumentaryMoviesPage/DocumentaryMoviesPage";
import FamilyMoviesPage from "../pages/FamilyMoviesPage/FamilyMoviesPage";
import HorrorMoviesPage from "../pages/HorrorMoviesPage/HorrorMoviesPage";
import MusicMoviesPage from "../pages/MusicMoviesPage/MusicMoviesPage";
import RomanceMoviesPage from "../pages/RomanceMoviesPage/RomanceMoviesPage";
import ScienceFictionMoviesPage from "../pages/ScienceFictionMoviesPage/ScienceFictionMoviesPage";
import ThrillerMoviesPage from "../pages/ThrillerMoviesPage/ThrillerMoviesPage";
import WarMoviesPage from "../pages/WarMoviesPage/WarMoviesPage";
import TopRatedMoviesPage from "../pages/TopRatedMoviesPage/TopRatedMoviesPage";
import MoviesDetailsPage from "../pages/MoviesDetailsPage/MoviesDetailsPage";
import UpComingMoviesPage from "../pages/UpComingMoviesPage/UpComingMoviesPage";

//public Routes
const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/movie/:id", component: MoviesDetailsPage },
  { path: "/phim-sap-chieu", component: UpComingMoviesPage },
  { path: "/phim-duoc-xep-hang-hang-dau", component: TopRatedMoviesPage },
  { path: "/phim-hanh-dong", component: ActionMoviesPage },
  { path: "/phim-phieu-luu", component: AdventureMoviesPage },
  { path: "/phim-hoat-hinh", component: AnimationMoviesPage },
  { path: "/phim-hai", component: ComedyMoviesPage },
  { path: "/phim-hinh-su", component: CrimeMoviesPage },
  { path: "/phim-tai-lieu", component: DocumentaryMoviesPage },
  { path: "/phim-gia-dinh", component: FamilyMoviesPage },
  { path: "/phim-kinh-di", component: HorrorMoviesPage },
  { path: "/phim-ca-nhac", component: MusicMoviesPage },
  { path: "/phim-lang-man", component: RomanceMoviesPage },
  { path: "/phim-khoa-hoc-vien-tuong", component: ScienceFictionMoviesPage },
  { path: "/phim-gay-can", component: ThrillerMoviesPage },
  { path: "/phim-chien-tranh", component: WarMoviesPage },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
