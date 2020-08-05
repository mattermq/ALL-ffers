import React from 'react';
// import { useSelector } from 'react-redux'
import heartWhite from '../public/heart_white.png'
import heartBlack from '../public/heart_black.png'

const fullDescription = `Требуется помощь программиста!
    Готов внести предоплату за ревизию и оценку объема работ.

    Прошлый исполнитель сделал задачу на 90% и исчез(

    сайт со страницей с покупками risorio-tape.ru/checkout/
    движок сайта – wordpress


    У прошлого программиста программиста была задача:
    1.Необходимо связать наш сайт с фулфилментом (сервисом доставки) по API.  Инструкция по настройке – az.express/api/docs

    2. Необходимо настроить возможность выбора пунктов выдачи заказа Pickpoint, инструкцию по установке виджета карты прикрепляю.
    Необходимо сделать так, чтобы после выбора постмата на карте, информация о нем передавала по Api в фулфилмент.


    Почти все заинтегрировано, однако, некоторые моменты не работают. Программист не мог это решить на протяжении месяца.
    Не работают следующие моменты:
    Пункт выбора Постмата работает, но информация не корректно передается по API сайту фулфилмента;
    Сломалась функция выбора оплаты курьеру наличными:
    Не реализована функция передачи заказа "в работу".

    Для помощи в настройке есть контакты программиста со стороны фулфилмента.

    Возможно, потербуется дополнительная поддержка сайта.
По оплате договоримся.`

const shortDescription = fullDescription
  .split('')
  .splice(0, 150)
  .join('')
  .concat('...')

export default function CardFull() {

  // const x = useSelector( state => state.x)

  return (
    <article>
      <h3>Необходимо донастроить (либо, настроить заново функционал интернет-магазина)</h3>
      <span>12 000 ₽</span>
      <p>{shortDescription}</p>
      <span>3 августа, 20:05</span>
      <button><img src={heartWhite} alt="favourite" /></button>
      <button className="tag">tag1</button>
      <button className="tag">tag2</button>
      <button className="tag">tag3</button>
    </article>
  )
}
