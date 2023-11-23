import {Component} from "react"
export class Footer extends Component{
    render(){
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} My-Redi-React-App</p>
        </footer>
    )
    }
}

export default Footer