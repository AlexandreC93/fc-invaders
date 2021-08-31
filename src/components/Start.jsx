import React from 'react'


class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div className="origin">
                
                <div className="divo">
                    
                        <button className="btn"> START </button>
                    
 
                    <ul>
                        <span> MODE :   </span>
                        <select className="monSelect">
                        <option value="easy">Easy</option>
                        <option value="normal">Normal</option>
                        <option value="hard">Hard</option>
                        </select>
                    </ul>

                </div>
                
            </div>
        );
    }
}

export default Start;