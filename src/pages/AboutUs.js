import React, { Component } from 'react'
import { Container, Grid, Typography, Button } from '@material-ui/core';
import DoubleArrowTwoToneIcon from '@material-ui/icons/DoubleArrowTwoTone';
import { Link } from 'react-router-dom';

export class AboutUs extends Component {

    render() {
        return (
            <Container maxWidth="md" style={this.styles.container}>
                <Grid container justify="center" style={this.styles.topGrid}>
                    <Grid item sm={12}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={this.styles.title}>
                            About Us
                        </Typography>
                        <Typography paragraph style={this.styles.paragraph}>
                            Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam accumsan lorem in dui. Mauris sollicitudin fermentum libero.
                            <br />
                            Vivamus elementum semper nisi. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Aenean massa. Etiam ultricies nisi vel augue. Sed in libero ut nibh placerat accumsan.
                        </Typography>
                    </Grid>
                    <Grid item sm={12} style={{ textAlign: 'center', marginTop: 20 }}>
                        <Link to="/" style={this.styles.link} >
                            <Button variant="contained" color="primary" endIcon={<DoubleArrowTwoToneIcon />}>
                                Try test
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        )
    }

    styles = {
        container: {
            marginTop: 50,
            paddingTop: 50,
            paddingBottom: 50,
            minHeight: 'calc(100vh - 50px)'
        },
        topGrid: {
            minHeight: '100%'
        },
        title: {
            paddingTop: 50,
            paddingBottom: 50,
        },
        paragraph: {
            textAlign: 'justify',
            lineHeight: '2em'
        },
        link: {
            textDecoration: "none",
            color: "#ffffff"
        }
    }
}

export default AboutUs
