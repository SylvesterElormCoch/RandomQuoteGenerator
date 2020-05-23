import React from 'react';
import 'typeface-roboto'
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import QuoteMachine from './QuoteMachine'
import './QuoteMachine.css'

var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var currentColor;

const styles = {
  container: {
    display:"flexbox",
    height: "100vh",
    alignItems:"center"
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quotesArray:[],
      selectedQuoteIndex:null
    }
    this.pickRandomQuoteIndex = this.pickRandomQuoteIndex.bind(this);
    this.nextQuoteIndex = this.nextQuoteIndex.bind(this);
  }

  componentDidMount(){
    fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
     .then(data => data.json())
     .then(fetchedQuotes => this.setState({quotesArray: fetchedQuotes},
      this.nextQuoteIndex))
  }

  // Selects a random index from the fetched quotes Array
  pickRandomQuoteIndex(){
    if (!this.state.quotesArray.length){
      return;
    }
    return Math.floor(Math.random() * this.state.quotesArray.length)
  }

  // Selects a random quote from the fetched quotes Array
  get pickRandomQuote(){
    if (this.state.quotesArray.length === 0 || !Number.isInteger(this.state.selectedQuoteIndex)){
      return null;
    }
    return this.state.quotesArray[this.state.selectedQuoteIndex];
  }


  nextQuoteIndex(){
    this.setState({selectedQuoteIndex: this.pickRandomQuoteIndex()});
    currentColor = colors[Math.floor(Math.random() * colors.length)]
    document.getElementsByTagName("body")[0].style.backgroundColor =  currentColor;
  }

  render() {
    return (
      <Grid className={this.props.classes.container} id="quote-box" justify="center" container>
        <Grid xs={11} lg={8} item>
          {
          this.pickRandomQuote ?

          <QuoteMachine color={currentColor} className="quote-Machine" pickRandomQuote={this.pickRandomQuote} nextQuoteIndex={this.nextQuoteIndex}  />
          : null
          }
        </Grid>
      </Grid>
    );
  }

}

export default withStyles(styles)(App);
