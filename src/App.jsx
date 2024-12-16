import Home from "./Components/Home/Home"
import { Dataprovider } from "./Reducer/DataContext"
export default function App() {


    return (
        <Dataprovider>
            <Home />
        </Dataprovider>
    );
}
