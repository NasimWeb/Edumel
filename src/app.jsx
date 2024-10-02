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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



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
