import * as React from 'react'
import { styled } from '@mui/material/styles';
import {
  Dialog,
  DialogTitle,
  Table,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Paper,
  Switch,
  FormControlLabel,
  Button
} from '@mui/material'

export interface ExampleComponentProps {
  text: string
}

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    }
  }
}))

const ReactComponent = ({}: ExampleComponentProps) => {

  

  React.useEffect(() => {
    if(!document.getElementById("se1")) {
      // gross
      var se1 = document.createElement("script")
          se1.src = "/static-assets/app/videojs/video.js"
          se1.id = "se1"
          document.head.appendChild(se1)
      var se2 = document.createElement("script")
          se2.src = "/static-assets/app/videojs/videojs-dash.js"
          document.head.appendChild(se2)
    }


    dataLoadChannels()
    
    var intervalRef = setInterval( () => {
        dataLoadChannels()
      },10000)
      return function() {
        clearInterval(intervalRef)
      }

  }, [])

  const dataLoadChannels = () => {
    // @ts-ignore
    CrafterCMSNext.util.ajax.get('/api/list.json').subscribe((response) => {
       setState({...state, channels:response.response.channels})
    })
  }

  const handleToggleOn = () => {
    // @ts-ignore
    CrafterCMSNext.util.ajax.get('/api/control.json?action=start').subscribe((response) => {
        dataLoadChannels()
    })
  }

  const handleToggleChannel = (currentState ) => {
    if(!currentState || currentState == false) {
      handleToggleOn()
    }
    else {
      handleToggleOff()
    }

  }

  const previewDestination = () => {
    setLightBoxOpen(open)

    window.setTimeout(function() {
      // @ts-ignore
      var player = videojs('example-video');
      player.src({ src: 'https://547f72e6652371c3.mediapackage.us-east-1.amazonaws.com/out/v1/f3288b3154974ee3988d67acd9b27716/index.mpd', type: 'application/dash+xml'});
      player.play();
    },1500)

  }

  const handleToggleOff = () => {
    // @ts-ignore
    CrafterCMSNext.util.ajax.get('/api/control.json?action=stop').subscribe((response) => {
        dataLoadChannels()
    })
  }



  const [open, setOpen] = React.useState(false)
  const [lightBoxOpen, setLightBoxOpen] = React.useState(false)

  const [state, setState] = React.useState({
    channels: {},
    hasMore: true,
    curPage: 0,
    itemsPerPage: 10,
    itemSize: 1
  })

  return (
    <React.Fragment>
      <div className="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-button css-qctd7"  >
        <div className="MuiListItemIcon-root css-k9sfc6">
          <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="DashboardRoundedIcon">
            <path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"></path>
          </svg>
        </div>
        <div className="MuiListItemText-root css-1tsvksn">
          <span className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap MuiListItemText-primary css-typdpm"
                onClick={() => setOpen(true)} >
            AWS MediaLive Console
          </span>
        </div>
        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="ChevronRightRoundedIcon"><path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path></svg>
        <span className="MuiTouchRipple-root css-w0pj6f"></span>
      </div>

      <Dialog fullWidth={false} maxWidth={'lg'} onClose={() => setLightBoxOpen(false)} open={lightBoxOpen}>
        <video id="example-video" style={{width:600, height:300}} className="video-js vjs-default-skin" controls> </video>
      </Dialog>

      <Dialog
        fullWidth={true}
        maxWidth={'xl'}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle id="max-width-dialog-title">
          AWS MediaLive Console
        </DialogTitle>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">State</TableCell>
                <TableCell align="right">Control</TableCell>
                <TableCell align="right">Preview</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
        { state.channels && Object.entries(state.channels as any).map(([channelIdx]) => {
            let channel = state.channels[channelIdx]
            let channelSwitchOn = (channel.state == "STARTING" || channel.state == "RUNNING")
            
            // @ts-ignore
            return(
              <TableRow
                key={channel.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="right">{channel.name}</TableCell>
                <TableCell align="right">{channel.id}</TableCell>
                <TableCell align="right">{channel.state}</TableCell>
                <TableCell align="right">
                  <FormControlLabel
                    checked={channelSwitchOn}
                    onChange={() => handleToggleChannel(channelSwitchOn)}
                    control={<IOSSwitch  />}
                    label=""/> 
                </TableCell>
                <TableCell align="right">
                  <Button size="small" color="primary" onClick={() => previewDestination()}>Preview</Button>
                </TableCell>
              </TableRow>
            )
          })
        }
          </TableBody>
        </Table>
      </TableContainer>
    </Dialog>



    </React.Fragment>
  )
}

export default ReactComponent
