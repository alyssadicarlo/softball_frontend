import Card from './Card';
import './HitterCard.css';

const HitterCard = ({ hitter }) => {
    return (
        <Card>
            <header className="entry-header">
                <h2>{hitter.name}</h2>
            </header>
            <section className="entry-content">
                <p>{hitter.team}</p>
            </section>
            <footer className="entry-footer">
                <small>Small stuff here...</small>
            </footer>
        </Card>
    );
}

export default HitterCard;