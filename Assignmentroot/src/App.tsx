import './App.css'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
function App() {
  return (
    <div className="flex flex-row h-screen bg-[#F6F7F9]">
      <div className="h-full">
        <LeftPanel />
      </div>
      <div className="h-full">
        <RightPanel />
      </div>
    </div>
  )
}

export default App;
