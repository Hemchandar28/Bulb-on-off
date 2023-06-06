import React from "react";
import './bulb.css';
import bulbImageone from './off.png';
import bulbImagetwo from './on.png';

class Bulb extends React.Component {
        constructor() {
            super();
            this.state = {bulbStatus:true};
            this.buttonClickon=this.buttonClickon.bind(this);
            this.buttonClickoff=this.buttonClickoff.bind(this);
        }
        buttonClickon() {
            this.setState({bulbStatus:!this.state.bulbStatus});
        } 
        buttonClickoff() {
            this.setState({bulbStatus:!this.state.bulbStatus});
        }
        render() {
        return(
        <section className="sectionb">
            <h1 className="h1b">Bulb</h1>
            <div className="cardb">
                    <img className="imageb" src={this.state.bulbStatus ? bulbImageone : bulbImagetwo}/>
                    <div>
                    <button className="switchb" onClick={this.buttonClickon}>ON</button>
                    <button className="switchb" onClick={this.buttonClickoff}>OFF</button>
                    </div>
                    </div>
                    <h1 className="h1b">{this.state.bulbStatus ? "off" :"on"}</h1>
                    </section>
                    )
                }
            }

            export default Bulb