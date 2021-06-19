import React, { Component } from 'react'
import { Container, Grid, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import MediaControlCard from '../components/CardItem';
import HeroContent from '../components/HeroContent';

const stepCardLimits = [ 10, 5, 3]

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            countLimit: stepCardLimits[0],
            activeCards: [],
            disableCards: false,
            isLoading: true,
            resetCard: false,
            step: 0,
        }
    }

    componentDidMount() {
        fetch("http://tamkeen.dev.me/?cards=all")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        cards: result,
                        isLoading: false
                    })
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    handleToupdate = (key, status) => {
        if (status) {
            this.setState({
                countLimit: this.state.countLimit - 1,
                activeCards: [...this.state.activeCards, key]
            }, () => {
                if (this.state.countLimit === 0) {
                    this.setState({
                        disableCards: true
                    })
                }
            })
        } else {
            this.setState({
                countLimit: this.state.countLimit + 1,
                activeCards: this.state.activeCards.filter(item => item !== key)
            }, () => {
                this.setState({
                    disableCards: false
                })
            })
        }
    }

    toNextStep = () => {
        setTimeout(() => {
            window.scrollTo({ top: 0 });
            this.setState({
                step: this.state.step + 1
            }, () => {
                if(this.state.step === 1) {
                    let filtered = this.state.cards.filter(item => this.state.activeCards.includes(item.key));
                    this.setState({
                        cards: filtered,
                        activeCards: [],
                        disableCards: false,
                        countLimit: stepCardLimits[this.state.step],
                        resetCard: !this.state.resetCard
                    })
                }
                if(this.state.step === 2) {
                    let filtered = this.state.cards.filter(item => this.state.activeCards.includes(item.key));
                    this.setState({
                        cards: filtered,
                        activeCards: [],
                        disableCards: false,
                        countLimit: stepCardLimits[this.state.step],
                        resetCard: !this.state.resetCard
                    })
                }
                if(this.state.step === 3) {
                    // TODO
                    window.location.href = '/'
                }
            })
        }, 1000);
    }

    render() {
        return (
            <main>
                {
                    this.state.step === 0 ? (
                        <HeroContent />
                    ) : (
                        <div></div>
                    )
                }
                <Container style={this.styles.cardGrid} maxWidth="xl">
                    
                    <div style={{ marginTop: 20 }}>
                    {
                        this.state.step >= 2 && this.state.countLimit === 0 ? (
                            <Typography variant="h5" style={{ textAlign: 'center', padding: 30 }} id="cardListTitle">
                                NOW YOU ARE READY!
                            </Typography>
                        ) : (
                            <Typography variant="h5" style={{ textAlign: 'center', padding: 30 }} id="cardListTitle">
                                CHOOSE <big><strong>{this.state.countLimit}</strong></big> CARDS YOU LIKE.
                            </Typography>
                        )
                    }
                    </div>
                    <Typography style={{ textAlign: 'right', paddingBottom: 10 }}>
                        Total: {this.state.cards.length} items
                    </Typography>
                    {
                        this.state.isLoading ? (
                            <Grid item sm={12} style={{ textAlign: 'center' }}>
                                <CircularProgress />
                            </Grid>
                        ) : (
                            <Grid container spacing={4}>
                                {this.state.cards.map((card) => {
                                    var disableCard = false
                                    if (this.state.activeCards.indexOf(card.key) <= -1 && this.state.disableCards) {
                                        disableCard = true
                                    }
                                    return (
                                        <Grid item key={card.key} xs={12} sm={6} md={4} lg={3}>
                                            <MediaControlCard card={card} handleToUpdate={this.handleToupdate.bind(this)} disableCard={disableCard} resetCard={this.state.resetCard} />
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        )
                    }
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={8} md={6} lg={4} style={{ padding: '50px 0', margin: '0 auto' }}>
                            <Button variant="outlined" size="large" disabled={!this.state.disableCards} style={{ display: 'block', width: '100%' }} onClick={this.toNextStep}>Next Step</Button>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        )
    }

    styles = {
        icon: {
            marginRight: 2,
        },
        cardGrid: {
            paddingTop: 8,
            paddingBottom: 8,
        },
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        cardMedia: {
            paddingTop: '56.25%', // 16:9
        },
        cardContent: {
            flexGrow: 1,
        },
        footer: {
            backgroundColor: '#efefef',
            padding: 6,
        },
    };
}

export default Home