import React from 'react';
import { Typography, Button, Card, CardContent, CardActions, IconButton} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter, faTumblrSquare} from '@fortawesome/free-brands-svg-icons';


const QuoteMachine = (props) => {
  return (
        (
        <Typography id="quote-box">
          <span id="text" style={{color:props.color}}>
          <FontAwesomeIcon icon={faQuoteLeft}/> {props.pickRandomQuote.quote}
          </span>
          <div style={{color:props.color}} id="author"> ~ {props.pickRandomQuote.author}</div>
        </Typography>
        )
      }
      <CardActions>

      {/* FCCTest: button should be enclosed within #quote-box*/}
      <Button style={{backgroundColor:props.color}} id="new-quote" size="small" onClick={props.nextQuoteIndex}>Next Quote</Button>

      <IconButton
        id="tweet-quote"
        target="_blank"
        href={`https:twitter.com/intent/tweet?text=${props.pickRandomQuote.quote} - ${props.pickRandomQuote.author}&hashtags=FavoriteQuote`}>
        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
      </IconButton>

      <IconButton
        id="share-quote"
        target="_blank"
        href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button&caption=${props.pickRandomQuote.quote} - ${props.pickRandomQuote.author}`}>
        <FontAwesomeIcon icon={faTumblrSquare}></FontAwesomeIcon>
      </IconButton>

      </CardActions>
      </CardContent>
    </Card>
  )
}

export default QuoteMachine