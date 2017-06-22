# NYT-React-Search

## Summary

React-based rendition of the New York Times Article Search application. This application requires React components, work with helper functions, and utilize the React mounting lifecycle to query and display articles based on user searches. It also use Node, Express and MongoDB so that users can save articles to read later.

## Live Links

Coming Soon.

## Technologies Used

• ReactJS

• JavaScript

• Node.js

• Express.js

• Mongoose

• Body-parser

• Cheerio

• Request

• HTML

• Bootstrap

## Execute

Follow the steps below to interact with this site locally

1. Clone this repository with git clone https://github.com/yenla/NYT-React-Search.git

2. Install modules with npm install in your terminal.

3. More Instruction Coming Soon.....

## Example code

• Below is example code on how to create a react component

	export default class Saved extends Component {
	constructor(props){
		super(props);
		this.state = {
			savedArticles: ""
		}
	}

	componentDidMount(){
		Helpers.getSaved().then(function(articleData){
			this.setState({
				savedArticles: articleData.data
			});
		}.bind(this))
	}

	handleClick(){
		Helpers.deleteSaved(item.title, item.date, item.url).then(function(data){

			Helpers.getSaved().then(function(articleData){
				this.setState({
					savedArticles: articleData.data
				});
			}.bind(this))

		}.bind(this))
	}
	render() {
		
		return(
			<div>

			</div>
		)
		
		}
	}
}