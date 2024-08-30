import "./app-info.css";

const AppInfo = ({quantity, increased}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {quantity}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;