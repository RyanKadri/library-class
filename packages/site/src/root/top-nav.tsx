import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, createStyles, Toolbar, WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { AppBarSettings } from "./app-bar-context";
import { ViewportInfo } from "./viewport-context";

const styles = createStyles({
    title: { 
        marginRight: 16
    },
    homeIcon: {
        marginRight: 8,
        color: "white"
    },
    link: {
        color: "white",
        padding: "0.5em",
        textDecoration: "none",
        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.1)"
        }
    },
    navBar: {
        fontSize: 16,
        overflowX: "auto",
    },
    linkGroup: {
        "& a": {
            color: "white",
            padding: 8,
            borderRadius: 99,
            marginRight: 8
        },
        "& a:hover": {
            backgroundColor: "rgba(255,255,255,0.15)"
        }
    },
    externalLinks: {
        marginLeft: "auto"
    }
})

const siteLinks = [
    { description: "Courses", link: "/courses" },
    { description: "Personal Projects", link: "/projects" }
];

const externalLinks = [
    { description: "Code", icon: faCode, link: "https://github.com/RyanKadri" }
]

const _RootNav = ({ classes, viewport }: Props) => {
    return (
        viewport.isFullscreen 
            ? null
            : ( <AppBar position="static" className={ classes.navBar }>
                    <Toolbar>
                        <div className={ classes.linkGroup }>
                            { siteLinks.map(link => (
                                <Link to={link.link} className={classes.link} key={link.link}>
                                    { link.description }
                                </Link>
                            ))}
                        </div>
                        <div className={ `${classes.linkGroup} ${classes.externalLinks}` }>
                            { externalLinks.map(link => (
                                <a href={ link.link } aria-label={link.description} target="_blank" key={link.link} rel="noopener">
                                    <FontAwesomeIcon icon={ link.icon } />
                                </a>
                            ))}
                        </div>
                    </Toolbar>
                </AppBar>
            )
    )
}

export const RootNav = withStyles(styles)(_RootNav)

interface Props extends WithStyles<typeof styles> {
    settings: AppBarSettings;
    viewport: ViewportInfo;
}