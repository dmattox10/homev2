const Card = props => {
    const { card } = props
    return (
        <li className="cards_item_">
            <div className="card_">
                <div className="box-callout">
                    <figure>
                        <img src={card.img} alt={card.alt} className="img-responsive" />
                        <div className="box-title"><h3>{card.title}</h3></div>
                        <figcaption>
                            <h3>{card.figTitle}</h3>
                            <p>{card.figText}</p>
                        </figcaption>
                    </figure>
                </div>
                <div className="card_content_">
                    <div className="card_title_">{card.tech}</div>
                    <p className="card_text_">{card.description}</p>
                    <button onClick={card.onClick} type="button" className="btn btn-block card_btn_ button">Visit Deployment</button>
                </div>
            </div>
        </li>
    )
}

export default Card