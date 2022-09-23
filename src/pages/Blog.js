import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Articles from './../components/Articles';
import Sidebar from './../components/Sidebar';
import Slider from './../components/Slider';

const Blog = () => {
    return (
        <Grid container >
            <Slider title="Blogs" size="slider-small" />
            <Grid>
                <Typography variant='h1'> Ultimos Articulos</Typography>
                <Articles />
            </Grid>
            <Sidebar blog='true' />
        </Grid>
    )
}
export default Blog;