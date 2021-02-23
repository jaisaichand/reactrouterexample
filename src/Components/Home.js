import React from 'react';
import Nav from './Nav';
import Topbar from './Topbar';
import Box from '@material-ui/core/Box';
import Postsparent from './PostsParent';
import Typography from '@material-ui/core/Typography';

const Home = () => {
    const [value, setValue] = React.useState(0);

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
        <div>
            <Nav />
            <Topbar settValue={setValue} />
            <div className="w-100 container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-xl-3 col-sm-0"></div>
                    <div className=" col-lg-6 col-xl-6 col-sm-12">
                        <TabPanel value={value} index={0}>
                            <Postsparent />
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
                    </div>
                    <div className="col-lg-3 col-xl-3 col-sm-0"></div>
                </div>

            </div>
        </div>
    )

}

export default Home;