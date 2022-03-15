import * as React from 'react'
import ToolsPanelListItemButton from '@craftercms/studio-ui/components/ToolsPanelListItemButton'

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
    let siteId = craftercms.plugins.get("org.rd.plugin.awsmediaconvertconsole").source.site
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

      <ToolsPanelListItemButton icon={{id: "@mui/icons-material/VideocamOutlined"  }} 
                                title="AWS MediaConvert Jobs"  
                                onClick={() => setOpen(true)}/>

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