import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EditIcon from '@mui/icons-material/Edit';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import Typography from '@mui/material/Typography';

const TimeLine = () => {
  return (
    <Timeline position="alternate" style={{backgroundColor: "#FAF9F6", borderRadius: 10, padding: 10, marginTop: 20}}>
      <div className='absolute'>
        TimeLine
      </div>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          April 20, 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <EditIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Planning
          </Typography>
          <Typography>List Features and Requirements</Typography>
          <Typography>Plan architecture for potential deployment</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          May 4th, 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Development
          </Typography>
          <Typography>Built Password Sign In</Typography>
          <Typography>Built Google &#38; Apple Sign In</Typography>
          <Typography>Built UI elements for Message Screen</Typography>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: '#5651e5' }} />
          <TimelineDot sx={{backgroundColor: "#5651e5"}}>
            <QueryStatsIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Current Sprint
          </Typography>
          <Typography>Integrate messages sent from Flask to Firestore</Typography>
          <Typography>Store image data in google cloud storage</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default TimeLine