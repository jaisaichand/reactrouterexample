import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import '../App.css'
import SearchBar from "material-ui-search-bar";
import InputBase from '@material-ui/core/InputBase';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '../jai_crown2.png'
import Fab from '@material-ui/core/Fab';
import AppBar from '@material-ui/core/AppBar';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const Topbar = (propss) => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        propss.settValue(newValue);
        setValue(newValue);
    };
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    function TabPanel(props) {
        let { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`scrollable-prevent-tabpanel-${index}`}
                aria-labelledby={`scrollable-prevent-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
    return (
        <div className="fulltopbar">
            <div className="mainflexnav">
                {/* logo left */}
                <div className="mainlogo">
                    <img src={logo} alt="" className="logoClass" />
                </div>


                {/* all Icon tabs */}

                <div className="tabsParent">
                    <AppBar position="static" color="transparent">

                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            indicatorColor="primary"
                            textColor="primary"
                        >
                            <Tab label="Home" icon={<HomeIcon />} />
                            <Tab label="Notifications" icon={<NotificationsIcon />} />
                            <Tab label="Messages" icon={<QuestionAnswerIcon />} />
                            <Tab label="New Post" icon={<AddIcon color="inherit" className="AddIconClass" />} />
                        </Tabs>
                    </AppBar>
                    {/* <TabPanel value={value} index={0}>
                        Item One
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>

                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>

                    <TabPanel value={value} index={3}>
                        Item Four
                    </TabPanel>
               */}
                </div>



                {/* all icon tabs end */}

                {/* searchbar */}
                {/* <div className="mainSearch">
                    <SearchBar
                        onChange={() => console.log('onChange')}
                        onRequestSearch={() => console.log('onRequestSearch')}
                        style={{
                            margin: '0 auto',
                            maxWidth: 800
                        }}
                    />
                </div> */}

                {/* addIcon */}
                {/* <div className="mainlogo displayallcenter">
                    <AddCircleOutlineIcon color="action" className="AddIconClass"></AddCircleOutlineIcon>
                </div> */}
                {/* <Fab color="inherit" aria-label="add" className="mainlogo displayallcenter">
                    <AddIcon color="inherit" className="AddIconClass" />
                </Fab> */}

                <div className="mainlogo displayallcenter">
                    <IconButton className="mainlogo">
                        <AccountCircle color="action" className="AddIconClass" />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Topbar;