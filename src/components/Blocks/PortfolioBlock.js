import React from "react";
import Photo from "../Photo";
import portrait1 from "../../img/portfolio/portrait-1.jpg"
import portrait2 from "../../img/portfolio/portrait-2.jpg"
import portrait3 from "../../img/portfolio/portrait-3.jpg"
import portrait4 from "../../img/portfolio/portrait-4.jpg"
import portrait5 from "../../img/portfolio/portrait-5.jpg"
import family1 from "../../img/portfolio/family-1.jpg"
import family2 from "../../img/portfolio/family-2.jpg"
import family3 from "../../img/portfolio/family-3.jpg"
import wedding1 from "../../img/portfolio/wedding-1.jpg"
import wedding2 from "../../img/portfolio/wedding-2.jpg"
import commercial1 from "../../img/portfolio/commercial-1.jpg"
import commercial2 from "../../img/portfolio/commercial-2.jpg"
import commercial3 from "../../img/portfolio/commercial-3.jpg"
import fine1 from "../../img/portfolio/fine-1.jpg"
import fine2 from "../../img/portfolio/fine-2.jpg"
import repo1 from "../../img/portfolio/repo-1.jpg"

class PortfolioBlock extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    photos = [
        {
            id: 1,
            name: "Анна",
            title: "Портретная Фотография",
            imageSrc: portrait1
        },
        {
            id: 2,
            name: "Анна",
            title: "Портретная Фотография",
            imageSrc: portrait2
        },
        {
            id: 3,
            name: "Анастасия",
            title: "Портретная Фотография",
            imageSrc: portrait3
        },
        {
            id: 4,
            name: "Евгений",
            title: "Портретная Фотография",
            imageSrc: portrait4
        },
        {
            id: 5,
            name: "Евгений",
            title: "Портретная Фотография",
            imageSrc: portrait5
        },
        {
            id: 6,
            name: "Евгений",
            title: "Семейная Фотосессия",
            imageSrc: family1
        },
        {
            id: 7,
            name: "Евгений",
            title: "Семейная Фотосессия",
            imageSrc: family2
        },
        {
            id: 8,
            name: "Евгений",
            title: "Семейная Фотосессия",
            imageSrc: family3
        },
        {
            id: 9,
            name: "Алексей",
            title: "Свадебная Фотография",
            imageSrc: wedding1
        },
        {
            id: 10,
            name: "Алексей",
            title: "Свадебная Фотография",
            imageSrc: wedding2
        },
        {
            id: 11,
            name: "Ксения",
            title: "Коммерческая Фотография",
            imageSrc: commercial1
        },
        {
            id: 12,
            name: "Евгений",
            title: "Коммерческая Фотография",
            imageSrc: commercial2
        },
        {
            id: 13,
            name: "Евгений",
            title: "Коммерческая Фотография",
            imageSrc: commercial3
        },
        {
            id: 14,
            name: "Алексей",
            title: "Фотосессии в Стиле 'Fine Art'",
            imageSrc: fine2
        },
        {
            id: 15,
            name: "Анастасия",
            title: "Репортажная Фотография",
            imageSrc: repo1
        },
    ]

    render() {
        return (<div className="portfolio-block">
            <h2>{this.props.title}</h2>
            <div>
                {this.shuffleArray(this.photos).map(p => (<Photo photo={p} key={p.id} />))}
            </div>
        </div>)
    };

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}

export default PortfolioBlock;