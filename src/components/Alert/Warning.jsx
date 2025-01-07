import Alert from './Alert';
import { warnBgTheme , textColor , shape } from './theme';
function Warn(data){
    const styleList = `${warnBgTheme} ${textColor} ${shape}`
    return (
        <Alert alertClass={styleList} alertMessage={data.text}/>
    )
}

export default Warn;