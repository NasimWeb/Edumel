import AboutUs from "./Pages/AboutUs/AboutUs"
import Articles from "./Pages/Articles/Articles"
import Contactus from "./Pages/Contactus/Contactus"
import Courses from "./Pages/Courses/Courses"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import NotFound from "./Pages/NotFound/NotFound"
import Register from "./Pages/Register/Register"
import SingleArticle from "./Pages/SingleArticle/SingleArticle"
import SingleCourse from "./Pages/SingleCourse/SingleCourse"



const router = [
    {path : '/' , element : <Home/>},
    {path : '*' , element : <NotFound />},
    {path : '/articles' , element : <Articles />},
    {path : '/articles/:id' , element : <SingleArticle />},
    {path : '/courses' , element : <Courses />},
    {path : '/courses/:id' , element : <SingleCourse />},
    {path : '/ContactUs' , element : <Contactus />},
    {path : '/AboutUs' , element : <AboutUs />},
    {path : '/Login' , element : <Login />},
    {path : '/Register' , element : <Register />},
]



export default router