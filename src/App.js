import logo from "./logo.svg";
import "./App.css";
import { PDFViewer } from "@react-pdf/renderer";
import { MyDocument } from "./Mydocument";

function App() {
	return (
		<div className="App">
			<PDFViewer width={"100%"} height={"100%"}>
				<MyDocument />
			</PDFViewer>
		</div>
	);
}

export default App;
