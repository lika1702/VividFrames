import React from "react";
import Photographer from "../Photographer";
import photographer1 from "./../../img/photographer-1.png";
import photographer2 from "./../../img/photographer-2.png";
import photographer3 from "./../../img/photographer-3.png";
import photographer4 from "./../../img/photographer-4.png";
import Controller from "../Controller";

class PhotographerBlock extends React.Component {

    photographers = [
        {
            id: 1,
            name: "Анна",
            credo: "Зафиксируй момент с нами!",
            imageSrc: { photographer1 }
        },
        {
            id: 2,
            name: "Ксения",
            credo: "Искусство в каждом кадре!",
            imageSrc: { photographer2 }
        },
        {
            id: 3,
            name: "Евгений",
            credo: "Поймай свое идеальное изображение!",
            imageSrc: { photographer3 }
        },
        {
            id: 4,
            name: "Алексей",
            credo: "Сделаем твои мечты визуальностью!",
            imageSrc: { photographer4 }
        },
        {
            id: 5,
            name: "Анастасия",
            credo: "Сделаем твои мечты визуальностью!",
            imageSrc: { photographer4 }
        },
        {
            id: 6,
            name: "Анна",
            credo: "Зафиксируй момент с нами!",
            imageSrc: { photographer1 }
        },
        {
            id: 7,
            name: "Ксения",
            credo: "Искусство в каждом кадре!",
            imageSrc: { photographer2 }
        },
        {
            id: 8,
            name: "Евгений",
            credo: "Поймай свое идеальное изображение!",
            imageSrc: { photographer3 }
        },
        {
            id: 9,
            name: "Алексей",
            credo: "Сделаем твои мечты визуальностью!",
            imageSrc: { photographer4 }
        },
        {
            id: 10,
            name: "Анастасия",
            credo: "Сделаем твои мечты визуальностью!",
            imageSrc: { photographer4 }
        },
    ]

    render() {
        return (<div className="photographers-block">
            <h2>{this.props.title}</h2>
            <div className="photographers">
                <Photographer name="Анна" credo="Зафиксируй момент с нами!" imageSrc={photographer1} />
                <Photographer name="Евгений" credo="Поймай свое идеальное изображение!" imageSrc={photographer3} />
                <Photographer name="Ксения" credo="Искусство в каждом кадре!" imageSrc={photographer2} />
                <Photographer name="Алексей" credo="Сделаем твои мечты визуальностью!" imageSrc={photographer4} />
            </div>
            
        </div>)
    };
}

export default PhotographerBlock;

/**<Controller count={Math.ceil(this.photographers.length / 4)} /> */