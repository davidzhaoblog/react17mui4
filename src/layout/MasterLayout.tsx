import { AppBar, Box, Theme, Toolbar, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useStyles } from "./styles";

interface IMasterLayoutProps {
    theme: Theme;
}

export default function MasterLayout(props: IMasterLayoutProps): JSX.Element {
    const classes = useStyles();
    const { t } = useTranslation(["UIStringResourcePerApp"]);

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {t("UIStringResourcePerApp:Application_Title")}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box my={4}>
            </Box>
        </div>
    );
}

