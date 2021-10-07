import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import contributors from "./contributors.json";
import ContributorCard from "./Contributor";

const useStyles = makeStyles((theme: Theme) =>
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

  return (
    <List className={classes.root}>
      {contributors.map((contributor, int) => (
        <ListItem className={classes.listItem} key={int}>
          <ContributorCard {...contributor} />
        </ListItem>
      ))}
    </List>
  );
}
