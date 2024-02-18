import { lazy } from 'react';
import './App.css';

const HomePage = lazy(() => import('./Component/HomePage'));

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
