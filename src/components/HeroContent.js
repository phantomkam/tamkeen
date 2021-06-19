import React, { Component } from 'react';
import { Container, Grid, Button, Typography } from '@material-ui/core';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import headerBgImage from '../assets/image/bg.jpg';

export class HeroContent extends Component {
    render() {
        return (
            <div style={this.styles.heroContent}>
                <Container maxWidth="md">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        TRY TAMKEEN NOW!
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Something short and leading about the collection below—its contents, the creator, etc.
                        Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                        entirely.
                    </Typography>
                    <div style={this.styles.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    Main call to action
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    Secondary action
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <KeyboardArrowDownOutlinedIcon color="action" style={{ fontSize: 60, marginTop: 40 }} />
                    </div>
                </Container>
            </div>
        )
    }

    styles = {
        heroContent: {
            backgroundColor: '#efefef',
            backgroundImage: `url(${headerBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: "8rem 0 0",
        },
        heroButtons: {
            marginTop: 4,
        },
    }
}

export default HeroContent
