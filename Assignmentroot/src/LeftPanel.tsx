import DashboardImage from './assets/DashboardImage.png'
import { Box } from '@mui/material';
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
        <Box
          component="img"
          src={DashboardImage}
          alt="Dashboard"
          sx={{
            width: '100%',
            maxWidth: {
              xs: 320,
              sm: 420,
              md: 520,
              lg: 600,
            },
            height: 'auto',
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  )
}

export default LeftPanel;