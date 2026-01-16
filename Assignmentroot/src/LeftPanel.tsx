import DashboardImage from './assets/DashboardImage.png'
const LeftPanel = () => {
  return (
    <div className='flex flex-col justify-between h-full p-20'>
      <div className="left-panel-container flex flex-col gap-3 font-rubik">
        <div className="font-light text-lg">
          Let’s get started
        </div>
        <div className="font-bold text-5xl">
          Create your account
        </div>
        <div className="font-normal text-base">
          Follow the steps to create your account
        </div>
      </div>
      <div className="dashboard-image">
        <img src={DashboardImage} alt="Dashboard" width={600} height={380} className="object-cover" />
      </div>
    </div>
  )
}

export default LeftPanel;