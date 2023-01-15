import "../Body/styles.css"

function Body() {
    return (
        <div className="container">
            <header>
                <div className="img-wrapper">
                    <img src="../../assets/img/dev.jpg" alt="" />
                    <div className="title-home text-center">
                        <h1 className="display-5">Back-End Java Developer</h1>
                        <p className="lead">Paulo Guilherme de Castro Furtado</p>
                        <button className="btn btn-primary">Get Start</button>
                    </div>
                    <div className="learning">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item" id="core-learn">Learn - Back-End</li>
                            <li className="list-group-item">Spring API REST</li>
                            <li className="list-group-item">Spring Cloud</li>
                            <li className="list-group-item">Kafka</li>
                            <li className="list-group-item">
                                <button>teste</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Body;