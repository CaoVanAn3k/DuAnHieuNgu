import { Route, Routes } from 'react-router-dom';
import './App.css';
import { PublicRouter } from './components/Router/PublicRouter';

function App() {
    return (
        <div className="App">
            <Routes>
                {PublicRouter.map((route, index) => {
                    const Page = route.component;
                    console.log(route.path);
                    return <Route key={index} path={route.path} element={<Page />} />;
                })}
            </Routes>
        </div>
    );
}
export default App;
