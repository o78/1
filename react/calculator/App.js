import React from 'react';
import ReactDOM from 'react-dom';

 
class App extends React.Component { 
  constructor() {
    super();
    this.state = {
      form: {
     textInput: ['Стоимость установки ₸', ' Цена бензина ₸', 'Цена газа ₸', 'Расход на 100 км (л)', 'Суточный пробег (км)'],
      phValue: [150000, 142, 65, 13, 80], 
    pid: ['a0','a1','a2','a3','a4'],  
    classesChange: ['','','','',''],
     inputid: ['n0', 'n1', 'n2', 'n3', 'n4'],
      divid: ['r0','r1','r2'],
      spanid: ['about0','about1','about2'], 
      rText: ['123','321','123'],
      aboutText: ['За год ₸', 'За день ₸','Окупаемость(дней)'], 
      }
    };
  }
  
  InputField(i) {
    return (
    <p id={this.state.form.pid[i]}>  {this.state.form.textInput[i]} 
    <input  
          type='text'  
        autoComplete='off'
        id={this.state.form.inputid[i]}
        placeholder={this.state.form.phValue[i]} 
        onBlur={(e) => e.target.placeholder = this.state.form.phValue[i]}
        onFocus={(e) => e.target.placeholder = ''} 
      /> </p>
    );
  }

    OutputField(i) {
      return (
        <div id={this.state.form.divid[i]}>{this.state.form.rText[i]}  </div>
        ); 
    }
    OutputDescription(i) {
        return ( 
          <span id={this.state.form.spanid[i]}>{this.state.form.aboutText[i]}</span>
        );

    }

 
 
  render() {
    return (
      <div id="containerBody">
        <p id="rass"> Рассчитайте свою выгоду </p>
     <form> 
        {this.InputField(0)} 
        {this.InputField(1)} 
        {this.InputField(2)} 
        {this.InputField(3)} 
        {this.InputField(4)} 
     </form> 
        <hr/>
        {this.OutputField(0)}
        {this.OutputField(1)}
        {this.OutputField(2)}
        {this.OutputDescription(0)}
        {this.OutputDescription(1)}
        {this.OutputDescription(2)}    
      </div>
    );

  }
 
 
}
export default App;
