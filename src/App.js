import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }
  // using-if--else-statement

  //   renderAuthButton = () => {
  //     const {isLoggedIn} = this.state
  //     if (isLoggedIn === true) {
  //       return <button>Log Out</button>
  //     }
  //     return <button>Login</button>
  //   }

  render() {
    // using element variables
    // const {isLoggedIn} = this.state
    // let authbutton
    // if (isLoggedIn === true) {
    //   authbutton = <button>Log Out</button>
    // } else {
    //   authbutton = <button>Login</button>
    // }

    // using ternary operators and logical && operator
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome greeting="Hello" />
        {/* using if-else statement */}
        {/* {this.renderAuthButton()} */}
        {/* // using element variables */}
        {/* {authbutton} */}
        {/* using ternary operators */}
        {/* {isLoggedIn ? <button>Logout</button> : <button>login</button>} */}
        {/* using logical && operator */}
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Login</button>}
      </div>
    )
  }
}

export default App
