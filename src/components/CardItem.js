import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DoneIcon from '@material-ui/icons/Done';

export class CardItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.resetCard !== this.props.resetCard) {
            if(this.state.active === true) {
                this.setState({
                    active: false
                })
                Array.from(document.getElementsByClassName("cardItem")).forEach(
                    function(element) {
                        element.classList.remove('active')
                        element.querySelector('svg').classList.remove('active')
                    }
                );
            }
        }
    }
    render() {
        var rootStyles = { ...this.styles.root, backgroundColor: this.props.card.bgColor }
        if(this.props.disableCard) {
            rootStyles = { ...rootStyles, ...this.styles.disableCard }
        }

        return (
            <Card className="cardItem" style={rootStyles} onClick={this.toggleActiveCard} key={this.props.card.key}>
                <div style={ this.styles.details }>
                    <CardContent style={ this.styles.content }>
                        <Typography component="h6" variant="h6">
                            { this.props.card.title }
                        </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    style={ this.styles.cardMedia }
                    image={this.props.card.image}
                    title="Live from space album cover"
                />
                <DoneIcon className="cardCheckIcon" style={ this.styles.checkIcon } color="secondary"/>
            </Card>
        )
    }

    toggleActiveCard = (e) => {
        if(this.props.disableCard) {
            return
        }
        this.setState({
            active: !this.state.active
        })
        this.props.handleToUpdate(this.props.card.key, !this.state.active)
        e.currentTarget.classList.toggle('active')
        e.currentTarget.querySelector('svg').classList.toggle('active')
    }

    styles = {
        root: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#ffffff',
            border: '3px solid transparent',
            cursor: 'pointer',
            overflow: 'visible',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto'
        },
        cardMedia: {
            width: 90,
            height: 90,
            margin: 10,
        },
        checkIcon: {
            position: 'absolute',
            padding: 5,
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            boxShadow: '0 0 5px rgba(0,0,0,0.2)',
            fontSize: 30,
            top: -10,
            right: -10,
            zIndex: 100,
            display: 'none'
        },
        disableCard: {
            opacity: 0.5
        }
    }
}

export default CardItem
