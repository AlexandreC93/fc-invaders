import React from 'react'

class Windows extends React.Component {
    state = {  }
    render() { 
        return ( 

            <>
            {this.props.children}
            </>

         );
    }
}
 
export default Windows;