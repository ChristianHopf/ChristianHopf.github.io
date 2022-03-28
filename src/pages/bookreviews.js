import '../App.css';
import Booklist from '../components/booklist';
import Navigation from '../components/navigation';
import Bookreviewsdescription from '../components/bookreviewsdescription';

function Bookreviews() {
  return (
    <div className="bookreviews">
      <Navigation />
      <Bookreviewsdescription />
      <Booklist />
    </div>
  );
}

export default Bookreviews;
