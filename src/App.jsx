import Accordion from './components/Accordion/Accordion';
import RandomColorGenerator from './components/RandomColor/RandomColor';
import LoadMore from './components/LoadMore/LoadMore';
import StarRating from './components/StarRating/StarRating';
import TreeView from './components/TreeView/TreeView';
import menus from './components/TreeView/data';
import QRCodeGenerator from './components/QRCodeGenerator/QRCodeGenerator';

function App() {

  return (
    <>
      <Accordion/>
      <RandomColorGenerator/>
      <StarRating noOfStars={5} />
      <LoadMore/>
      <QRCodeGenerator/>
      <TreeView menus={menus} />
    </>
  )
}

export default App
