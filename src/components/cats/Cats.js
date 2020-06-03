import React, {useContext, useState} from 'react';
import {Container, Button, Card, Form} from 'react-bootstrap';
import { orderBy } from 'lodash';
import { CatContext } from '../../store/contexts/CatContext';
import { Link } from 'react-router-dom';

const Cats = () => {
    document.title = "CatMash | Liste des chats";
    let {cats, dispatch_cat} = useContext(CatContext);

    const [order, setOrder] = useState(null);

    // First load value
    if(!order) {
        cats = orderBy(cats, ['score'], ['desc']);
    }

    // Change the order
    const handleOrder = (e) => {
        if (e.target.id === 'ascending'){
            dispatch_cat({
                type: 'ORDER_ASC'
            })
            setOrder(e.target.id);
        }else{
            dispatch_cat({
                type: 'ORDER_DESC'
            })
            setOrder(e.target.id);
        }
    }

    return (
        <Container>
            <div className="text-center header">
                <h2 className="text-primary">Classement des plus beaux chats </h2>
            </div>
            <hr/>
            <div>
            <div className="text-center mb-3">
                <strong className="pr-5">Filtrer par ordre : </strong>
                <Form.Check
                    type="radio"
                    inline
                    onChange={handleOrder}
                    label="Croissant"
                    name="order"
                    id="ascending"
                />
                <Form.Check
                    type="radio"
                    inline
                    onChange={handleOrder}
                    label="Décroissant"
                    name="order"
                    id="descending"
                />
            </div>
            </div>
            <Container className="text-center">
                {
                    cats.map(cat => {
                        return (
                            <Card className="d-inline-block m-2 rank_card">
                                <Card.Img variant="top" className="rank_image" src={cat.url} />
                                <Card.Body>
                                    Score: {cat.score}
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </Container>
            <div className="text-center m-5">
                <Link to="/"><Button variant="outline-success">Accueil</Button></Link>
            </div>
        </Container>
    )
}
export default Cats;