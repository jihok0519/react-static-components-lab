import Sidebar from './components/Sidebar';
import Reviews from './components/Reviews';
import AvgRating from './components/AvgRating';
import WebsiteVisitors from './components/WebsiteVisitors';
import SentimentAnalysis from './components/SentimentAnalysis';
import './App.css';
import './styles.css';

function App() {
  return (
    <div className='wrapper'>
      <Sidebar />
      <Reviews />
      <AvgRating />
      <SentimentAnalysis/>
      <WebsiteVisitors />
    </div>
  );
}

export default App;
