import * as React from 'react'

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
} from '@mui/material'

export interface ExampleComponentProps {
  text: string
}

const ReactComponent = ({}: ExampleComponentProps) => {

  React.useEffect(() => {
    dataLoadJobs()

    var intervalRef = setInterval( () => {
        dataLoadJobs()
      },10000)
      return function() {
        clearInterval(intervalRef)
      }

  }, [])

  const dataLoadJobs = () => {
    // @ts-ignore
    const siteId = craftercms.getStore().getState().sites.active
    // @ts-ignore
    let serviceUrl = '/studio/api/2/plugin/script/plugins/org/rd/plugin/awsmediaconvertconsole/mediaconvertconsole/list.json'
                   + '?siteId='+siteId

    // @ts-ignore
    CrafterCMSNext.util.ajax.get(serviceUrl).subscribe((response) => {
       setState({...state, jobs:response.response.result.jobs})
    })
  }



  const [open, setOpen] = React.useState(false)
  const [state, setState] = React.useState({
    jobs: []
  })

  return (
    <React.Fragment>

      <div
        onClick={() => setOpen(true)}
        className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters"
        style={{
          WebkitTapHighlightColor: 'transparent',
          backgroundColor: 'transparent',
          outline: '0px',
          border: '0px',
          margin: '0px',
          borderRadius: '0px',
          cursor: 'pointer',
          userSelect: 'none',
          verticalAlign: 'middle',
          appearance: 'none',
          color: 'inherit',
          display: 'flex',
          WebkitBoxFlex: 1,
          flexGrow: 1,
          WebkitBoxPack: 'start',
          justifyContent: 'flex-start',
          WebkitBoxAlign: 'center',
          alignItems: 'center',
          position: 'relative',
          textDecoration: 'none',
          minWidth: '0px',
          boxSizing: 'border-box',
          textAlign: 'left',
          padding: '8px 16px',
          transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
        }}
      >
        <div
          className="MuiListItemIcon-root"
          style={{
            color: 'rgb(255, 255, 255)',
            flexShrink: 0,
            display: 'inline-flex',
            marginRight: '10px',
            minWidth: 'auto'
          }}
        >
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-vubbuv"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="DashboardRoundedIcon"
          >
            <path d="M17 21.5H4a2 2 0 01-2-2v-10a2 2 0 012-2h13a2 2 0 012 2v10a2 2 0 01-2 2zM21 11.5v6l4.445 2.964A1 1 0 0027 19.631V9.369a1 1 0 00-1.555-.832L21 11.5z" />
          </svg>
        </div>
        <div className="MuiListItemText-root mui-1tsvksn">
          <span className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap MuiListItemText-primary css-typdpm">
            AWS MediaConvert Jobs
          </span>
        </div>
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="ChevronRightRoundedIcon"
        >
          <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
        </svg>
        <span className="MuiTouchRipple-root css-w0pj6f" />
      </div>

      <Dialog
        fullWidth={true}
        maxWidth={'xl'}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-dialog-title"
        open={open}>

        <DialogTitle id="max-width-dialog-title">
          AWS MediaConvert Jobs
        </DialogTitle>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Input</TableCell>
                <TableCell align="right">Started</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">% Complete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
        { state.jobs && Object.entries(state.jobs as any).map(([jobIdx]) => {
            let job = state.jobs[jobIdx]

            // @ts-ignore
            return(<TableRow
                key={job.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="left"><b>{job.id}</b></TableCell>
                <TableCell align="right">{job.settings.inputs[0].fileInput}</TableCell>
                <TableCell align="right">{job.createdAt}</TableCell>
                <TableCell align="right">{job.status}</TableCell>
                <TableCell align="right">{job.jobPercentComplete}</TableCell>
              </TableRow>)
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