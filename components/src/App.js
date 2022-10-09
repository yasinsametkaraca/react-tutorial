import './App.css';
import Header from './components/Header'

const userName = "YSK"
const title = "YSK App"
const isLogin = true

function App() {
    return (
        /*  <>   div kullanmak istemezsek böyle (<>) anonim olarak oluşturabiliriz*/
        <div className="App">
            <Header></Header>
            <p className="ab">      {/*class değil className kullan*/}
                lorem ipsum dolor sit amet, consectetur adipis
            </p>
            <label htmlFor="input">  {/*for değil htmlFor kullan*/}
                Country
                <input type="text" id="input"/>
            </label>
            <h1>{title}</h1>

            <h1>{isLogin ? `Kullanıcı Adı : ${userName}` : "you are not logged in"}</h1>  {/*isLogin true ise gösterilir*/}
            {/*<h1>{!isLogin && "you are not logged in"}</h1>*/}
        </div>
        /* </>  */
    );
}

export default App;
