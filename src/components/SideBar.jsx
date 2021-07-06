import React, { useState } from "react";
import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Button,
  Typography,
} from "@material-ui/core/";
import {
  Menu as MenuIcon,
  Settings as SettingsIcon,
  PowerSettingsNew as PowerIcon,
  Help as HelpIcon,
  ArrowForwardIos as ArrowIcon ,
} from "@material-ui/icons/";
import logo from "../images/logo.png";
import SideBarItems from "./SIdeBarItems";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useAlert } from "react-alert";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: {
    margin: "1rem",
  },
  drawerPaper: {
    backgroundColor: "#203244",
    color: "#51636f",
    width: drawerWidth,
  },
  topSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    display: "block",
    height: "70px",
  },
  iconDiv: {
    display: "flex",
  },
  icon: {
    color: "#687884",
  },
  upgradeButton: {
    borderRadius: "12px",
    margin: "10px 0px",
    padding: "10px 10px",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function SideBar(props) {
  const SideBarListItems = SideBarItems();
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const alert = useAlert();
  const [alertd, setAlert] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div className={classes.topSection}>
        <div className={classes.logoDiv}>
          <img src={logo} alt="logo" className={classes.logo} />
        </div>

        <div className={classes.iconDiv}>
          <IconButton className={classes.icon} color="inherit">
            <SettingsIcon />
          </IconButton>
          <IconButton className={classes.icon} color="inherit">
            <PowerIcon />
          </IconButton>
          <IconButton className={classes.icon} color="inherit">
            <HelpIcon />
          </IconButton>
        </div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.upgradeButton}
        >
          Upgrade to Premium
        </Button>
        <IconButton color="primary">
          <HelpIcon />
        </IconButton>
      </div>

      <List>
        {SideBarListItems.map((items) => (
          <ListItem
            button
            key={items.id}
            onClick={() => {
              if (alertd) {
                alert.show(items.name);
                setAlert(false);
              } else {
                alert.removeAll();
                alert.show(items.name);
              }
            }}
          >
            <ListItemIcon className={classes.icon}>{items.icon}</ListItemIcon>
            <ListItemText primary={items.name} />
            {items.more && <ArrowIcon />}
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            {" "}
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap>
            Vecmocon
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
