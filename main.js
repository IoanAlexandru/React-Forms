var React = require('react');
var forms = require('newforms');
require('./style.css');

var FormularNewforms = forms.Form.extend({
	nume: forms.CharField(),
	email: forms.EmailField(),
	parola: forms.CharField({
		widget: forms.PasswordInput
	})
});

var Formular = React.createClass({
	renderModularForm: function(){
		var divFirstDay = [];
		var divSecondDay = [];
		var divThirdDay = [];
		var divPass = [];

		for(var i = 1; i<= this.props.properties.firstDayNum; i++){
			divFirstDay.push(<div>
						<h2>Formular pentru bilet pentru prima zi, numarul: {i}</h2>
						<forms.RenderForm form={FormularNewforms} />			
					</div>);
		}

		for(var i = 1; i<= this.props.properties.secondDayNum; i++){
			divSecondDay.push(<div>
						<h2>Formular pentru bilet pentru a doua zi, numarul: {i}</h2>
						<forms.RenderForm form={FormularNewforms} />			
					</div>);
		}

		for(var i = 1; i<= this.props.properties.thirdDayNum; i++){
			divThirdDay.push(<div>
						<h2>Formular pentru bilet pentru a treia zi, numarul: {i}</h2>
						<forms.RenderForm form={FormularNewforms} />			
					</div>);
		}

		for(var i = 1; i<= this.props.properties.passNum; i++){
			divPass.push(<div>
						<h2>Formular pentru bilet three-day-pass, numarul: {i}</h2>
						<forms.RenderForm form={FormularNewforms} />			
					</div>);
		}

		var allForms = [divFirstDay, divSecondDay, divThirdDay, divPass];
		return allForms;						

	},
	render: function(){
		return <form method="POST">
				<div>{this.renderModularForm()}</div>
				<input type="submit" value="Trimiteti" />
			   </form>
	}
});

var Table = React.createClass({
	getInitialState: function(){
		return {
			firstDayNum: 0,
			secondDayNum: 0,
			thirdDayNum: 0,
			passNum: 0
		}
	},
	handleChange: function(){
		this.setState({
			firstDayNum: React.findDOMNode(this.refs.firstDayNum).value,
			secondDayNum: React.findDOMNode(this.refs.secondDayNum).value,
			thirdDayNum: React.findDOMNode(this.refs.thirdDayNum).value,
			passNum: React.findDOMNode(this.refs.passNum).value
		});
	},
	handleClick: function(e){
		e.preventDefault();
		console.log("Number of first day tickets: " + this.state.firstDayNum + "\nNumber of second day tickets: " + this.state.secondDayNum + "\nNumber of third day tickets: " + this.state.thirdDayNum + "\nNumber of three day passes: " + this.state.passNum + "\n============================================");
		renderNext({"firstDayNum": this.state.firstDayNum,
					"secondDayNum": this.state.secondDayNum,
					"thirdDayNum": this.state.thirdDayNum,
					"passNum": this.state.passNum
		});
	},
	render: function(){
		return <form method="POST">
				<table>
				  <thead>
				    <tr>
				      <th>Tip bilet</th>
				      <th>Numar bilete</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <td>First day</td>
				      <td>
				        <select name="firstDayNum" ref="firstDayNum" onChange={this.handleChange}>
				          <option value="0">Alegeti un numar de bilete</option>
				          <option value="1">1</option>
				          <option value="2">2</option>
				          <option value="3">3</option>
				          <option value="4">4</option>
				          <option value="5">5</option>
				          <option value="6">6</option>
				          <option value="7">7</option>
				          <option value="8">8</option>
				          <option value="9">9</option>
				          <option value="10">10</option>				          
				        </select>
				      </td>
				    </tr>
				    <tr>
				      <td>Second day</td>
				      <td>
				        <select name="secondDayNum" ref="secondDayNum" onChange={this.handleChange}>
				          <option value="0">Alegeti un numar de bilete</option>
				          <option value="1">1</option>
				          <option value="2">2</option>
				          <option value="3">3</option>
				          <option value="4">4</option>
				          <option value="5">5</option>
				          <option value="6">6</option>
				          <option value="7">7</option>
				          <option value="8">8</option>
				          <option value="9">9</option>
				          <option value="10">10</option>				          
				        </select>
				      </td>
				    </tr>
				    <tr>
				      <td>Third day</td>
				      <td>
				        <select name="thirdDayNum" ref="thirdDayNum" onChange={this.handleChange}>
				          <option value="0">Alegeti un numar de bilete</option>
				          <option value="1">1</option>
				          <option value="2">2</option>
				          <option value="3">3</option>
				          <option value="4">4</option>
				          <option value="5">5</option>
				          <option value="6">6</option>
				          <option value="7">7</option>
				          <option value="8">8</option>
				          <option value="9">9</option>
				          <option value="10">10</option>				          
				        </select>
				      </td>
				    </tr>
				    <tr>
				      <td>Three day pass</td>
				      <td>
				        <select name="passNum" ref="passNum" onChange={this.handleChange}>
				          <option value="0">Alegeti un numar de bilete</option>
				          <option value="1">1</option>
				          <option value="2">2</option>
				          <option value="3">3</option>
				          <option value="4">4</option>
				          <option value="5">5</option>
				          <option value="6">6</option>
				          <option value="7">7</option>
				          <option value="8">8</option>
				          <option value="9">9</option>
				          <option value="10">10</option>				          
				        </select>
				      </td>
				    </tr>				    
				  </tbody>
				</table>
				<input type="submit" value="Trimiteti" onClick={this.handleClick} />
			   </form>
	}
});

function renderNext(prop){
	React.render(<Formular properties={prop} />, document.getElementById("aplicatie"));
}

React.render(<Table />, document.getElementById("aplicatie"));