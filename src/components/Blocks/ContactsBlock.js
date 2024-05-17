import React from "react";
import studio from "./../../img/studio.jpg"

class ContactsBlock extends React.Component {
    render() {
        return (<div className="contacts-block">
            <h2>{this.props.title}</h2>
            <img src={studio} alt="" width="500" />
            <p>г. Минск, пр-т Независимости, д. 185</p>
            <ul>
                <li>+375 33 361 95 93</li>
                <li>+375 29 595 08 17</li>
            </ul>
            <p>Если остались вопросы, Вы можете оставить свой номер телефона, и мы обязательно Вам перезвоним</p>
            <form action="">
                <input type="tel" placeholder="+375 xx xxx xx xx" />
                <button type="button">Заказать звонок</button>
            </form>
        </div>)
    };
}

export default ContactsBlock;