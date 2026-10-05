import { Card } from './Card';

export default function App() {
  return <main className="page">
    <header><span className="eyebrow">React composition</span><h1>Универсальные карточки</h1><p>Один компонент — любое содержимое через props.children.</p></header>
    <section className="cards">
      <Card image="./card-landscape.svg" imageAlt="Абстрактный горный пейзаж">
        <h2>Карточка с изображением</h2>
        <p>Изображение передаётся отдельным свойством, а содержимое карточки — через children.</p>
        <a className="button" href="#details">Перейти</a>
      </Card>
      <Card>
        <span className="tag">Без изображения</span>
        <h2>Текстовая карточка</h2>
        <p>Тот же компонент подходит для другого состава элементов без дополнительных условий в приложении.</p>
        <button className="button secondary" type="button">Подробнее</button>
      </Card>
    </section>
    <p id="details" className="note">Композиция позволяет переиспользовать общую оболочку карточки.</p>
  </main>;
}
