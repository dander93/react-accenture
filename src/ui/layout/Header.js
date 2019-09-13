import React , {Component} from "react"

class Header extends Component {
    render(){
        let {links} = this.props
        return(
            <header>
                <h1>SPA</h1>
                <nav>
                {links.map(link=>
                    <a href="#" key={link}>{link}</a>
                )}
                </nav>
            </header>
        )
    }
}

export default Header