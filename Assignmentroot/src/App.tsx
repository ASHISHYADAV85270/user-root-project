import './App.css'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <UserProvider>
      <div className="flex sm:flex-row flex-col sm:h-screen bg-[#F6F7F9]">
        <div className="h-full sm:w-1/2">
          <LeftPanel />
        </div>
        <div className="h-full sm:w-1/2">
          <RightPanel />
        </div>
      </div>
      <div id="recaptcha-container"></div>
    </UserProvider>
  )
}

export default App;
