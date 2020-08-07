import React from 'react';
import heartWhite from '../img/heart_white.png';
import heartBlack from '../img/heart_black.png';

// const fullDescription = `Требуется помощь программиста!
//     Готов внести предоплату за ревизию и оценку объема работ.

//     Прошлый исполнитель сделал задачу на 90% и исчез(

//     сайт со страницей с покупками risorio-tape.ru/checkout/
//     движок сайта – wordpress


//     У прошлого программиста программиста была задача:
//     1.Необходимо связать наш сайт с фулфилментом (сервисом доставки) по API.  Инструкция по настройке – az.express/api/docs

//     2. Необходимо настроить возможность выбора пунктов выдачи заказа Pickpoint, инструкцию по установке виджета карты прикрепляю.
//     Необходимо сделать так, чтобы после выбора постмата на карте, информация о нем передавала по Api в фулфилмент.


//     Почти все заинтегрировано, однако, некоторые моменты не работают. Программист не мог это решить на протяжении месяца.
//     Не работают следующие моменты:
//     Пункт выбора Постмата работает, но информация не корректно передается по API сайту фулфилмента;
//     Сломалась функция выбора оплаты курьеру наличными:
//     Не реализована функция передачи заказа "в работу".

//     Для помощи в настройке есть контакты программиста со стороны фулфилмента.

//     Возможно, потербуется дополнительная поддержка сайта.
// По оплате договоримся.`;

export default function CardFull(props) {
  let { title, description, budget, publishedAt, tags, url } = props.offer

  const shortDescription = description
    .split('')
    .splice(0, 130)
    .join('')
    .concat('...');

  // if (publishedAt)
  //   publishedAt = publishedAt.slice(0, publishedAt.indexOf('•') - 1)

  return (
    <article className="card">
      <div className="wrap_cardMainText">
        <div className="cardMainText">{title}</div>
        <div className="priceCard">{budget}</div>
      </div>
      <div className="cardText">{shortDescription}</div>
      <div className="dateTime">{publishedAt}</div>
      <div className="wrapHeartAndTags">
        <div className="wrapTags">
          {tags.map((tag, index) => <button key={index} className="tag">{tag}</button>)}

          {/* <button className="tag">tag2</button>
          <button className="tag">tag3</button> */}
        </div>
        <button className="btnHeartCard"><img className="imgHeartCard" src={heartWhite} alt="favourite" /></button>

      </div>
    </article>
  )
}
