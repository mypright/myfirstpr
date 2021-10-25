import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ContributorCard from "./Contributor";
import useContributors from './useContributors';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
    },
    inline: {
      display: "inline",
    },
    listItem: {
      justifyContent: "center",
    },
  })
);

export default function Dashboard() {
  const classes = useStyles();
  const contributors = useContributors();
  if (!contributors) {
      return null;
  }

  return (
    <List className={classes.root}>
      {contributors.map((contributor) => (
        <ListItem key={Math.random()} className={classes.listItem}>
          <ContributorCard {...contributor} />
        </ListItem>
      ))}
    </List>
  );
}
