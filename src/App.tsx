import {NonContext} from "./example/Context/NonContext";
import {ContextExample} from "./example/Context/Context";
import {Context2} from "./example/Context/Context2";
import {Layout} from "./layouts/Layout";
import {Example1} from "./pages/Example1";

function App() {
    return <Layout>
        <Example1/>
    </Layout>;
}

export default App;