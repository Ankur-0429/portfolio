import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import EditIcon from "@mui/icons-material/Edit";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";
import RocketLaunch from "@mui/icons-material/RocketLaunch";
import { FaBug } from "react-icons/fa";

const TimeLine2 = () => {
  return (
    <Timeline
      position="alternate"
      style={{
        backgroundColor: "#FAF9F6",
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
      }}>
      <div className="absolute">TimeLine</div>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary">
          September 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <EditIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Planning
          </Typography>
          <Typography>- List Features and Requirements</Typography>
          <Typography>- Plan architecture for potential deployment</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary">
          November 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Development
          </Typography>
          <Typography>- Built Password Sign In</Typography>
          <Typography>- Built Google &#38; Apple Sign In</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary">
          December 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography>- Built Camera and Map Screen</Typography>
          <Typography>- Queried recyling locations using Google Maps API</Typography>
          <Typography>
            - Added Machine Learning Model using{" "}
            <a href="https://openai.com/blog/clip/" className="text-blue-400">
              Clip
            </a>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary">
          Febuary 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "#16a34a" }} />
          <TimelineDot sx={{ backgroundColor: "#16a34a" }}>
            <RocketLaunch />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Deployment
          </Typography>
          <Typography>- Shipped to Google Play and App Store</Typography>
          <Typography>- Deployed Flask Server under Cloud Run</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary">
          March 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FaBug size={23} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Bug Fixes
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimeLine2;
