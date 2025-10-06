// When you want to import or animate something that already has very defined CSS classes, don't do it using CSS modules.
// https://tobiasahlin.com/spinkit/
import "./Spinner.css"

export default function Spinner() {
    return (
        <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    )
}
