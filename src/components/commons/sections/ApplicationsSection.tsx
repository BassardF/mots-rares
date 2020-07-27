import * as React from "react";

import styled from "styled-components";
import Flex from "../../styleguide/Flex";
import { getSpacing } from "../../../constants/spacing";
import { WaitingListContext } from "../../../contexts/waitingList";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidOutlinedIcon from "@material-ui/icons/AndroidOutlined";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "5px 15px",
  },
});

const CardWrapper = styled.div`
  padding: ${getSpacing(5)}px;
  max-width: 300px;
`;

const ApplicationsSection = () => {
  const { setShowWaitingListModal } = React.useContext(WaitingListContext);
  const classes = useStyles();
  return (
    <>
      <Flex justifyContent="center">
        <CardWrapper>
          <Card className={classes.root}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                En construction
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom>
                <AppleIcon fontSize="small" /> IOS App
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => setShowWaitingListModal(true)}
                size="small"
              >
                Joindre la liste d'attente
              </Button>
            </CardActions>
          </Card>
        </CardWrapper>
        <CardWrapper>
          <Card className={classes.root}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                En construction
              </Typography>
              <Typography variant="h5" component="h2" gutterBottom>
                <AndroidOutlinedIcon fontSize="small" /> Android App
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => setShowWaitingListModal(true)}
                size="small"
              >
                Joindre la liste d'attente
              </Button>
            </CardActions>
          </Card>
        </CardWrapper>
      </Flex>
    </>
  );
};

export default ApplicationsSection;
