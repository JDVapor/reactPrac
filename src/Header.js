import React, {Component} from "react"
import ThemeContext from "./ThemeContext"
class Header extends Component {

    static contextType = ThemeContext;

    render() {
        const userName = this.context;
        return (
            <header>
                <p>Welcome, {userName}!</p>
            </header>
        )
    }
}

export default Header
