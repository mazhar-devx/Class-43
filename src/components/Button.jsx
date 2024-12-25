import {BgTheme} from "./Theme_1"
function Button(props){
    return (
        <button className={BgTheme}>
            {props.text}
        </button>
    )
}
export default Button;