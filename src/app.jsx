import { useEffect, useState , useRef} from "preact/hooks";
import "./app.css";
import router from "./Routes";
import { useRoutes } from "react-router-dom";
import authContext from "./Contexts/AthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export function App() {

  const routes = useRoutes(router);
  const btnScroll = useRef()

  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setuserInfo] = useState({});
  const [isLoading , setIsLoading] = useState(true)
  const loginUser = () => {};
  const logOut = () => {};

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 5000,
      },
    },
  });

  const handleScroll = () => {
    if (window.scrollY > 30) {
      btnScroll.current?.classList.add("visible");
    } else {
      btnScroll.current?.classList.remove("visible");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener('DOMContentLoaded', () => {
       setIsLoading(false)
    })
    return () => window.removeEventListener("scroll", handleScroll);



  }, []);



  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


if(isLoading) {
  <div className="flex justify-center align-center" style={{height : '100vh'}}>
  <div class="loader">
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
  </div>
  </div>
}


  return (
    <>
      <QueryClientProvider client={client}>
        <authContext.Provider
          value={{
            isLogin,
            setIsLogin,
            userInfo,
            setuserInfo,
            loginUser,
            logOut,
          }}
        >
          {routes}
        </authContext.Provider>
        <ReactQueryDevtools position="top-right" />
      </QueryClientProvider>

      <div ref={btnScroll} className="btn--to-up" onClick={scrollToUp}>
        <i class="fa-solid fa-angle-up"></i>
      </div>
    </>
  );
}
