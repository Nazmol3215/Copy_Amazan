import './App.css';
import MainRouter from './Mainrouterpage/MainPage';
import ProductCard from './categoriesContains/categoriesImage';
import ProductSlider from './categoriesContains/ImsSli';
import ProductSliderTwo from './categoriesContains/CardImeg';
import MobaileDetails from './OtherPagecss/MobailesDetail/MobaileDetails';


function App() {
  return (
    <div className="App">

<MobaileDetails/>
<MainRouter/>
<ProductCard/>
<ProductSlider/>
<ProductSliderTwo/>

    </div>
  );
}

export default App;
