import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Homepage from "./pages/Homepage";
import CategoryPage from "./pages/Category";
import WishList from "./pages/WishList";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
    return (

        <div className="min-h-screen min-w-screen bg-[#93785B] flex flex-col justify-between ">
          <header>
            <Navbar />
          </header>
          <main className="flex-grow">
            <CategoryPage/>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
    )

  }
  export default App
