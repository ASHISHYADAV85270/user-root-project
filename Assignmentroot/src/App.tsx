import './App.css'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <UserProvider>
      <div className="flex flex-row h-screen bg-[#F6F7F9]">
        <div className="h-full">
          <LeftPanel />
        </div>
        <div className="h-full">
          <RightPanel />
        </div>
      </div>
    </UserProvider>
  )
}

export default App;
