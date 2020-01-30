import React from "react"
import ThemeContext from "./ThemeContext"
import Header from "./Header"

function AppHead() {
    const {Consumer} = ThemeContext
    return (
        <Consumer>
            {value =>
            <div>
                <Header />
                <main>
                    <p className="main">No new notifications, {value}! 🎉</p>
                </main>
            </div>
            }
        </Consumer>
    )
}
export default AppHead
