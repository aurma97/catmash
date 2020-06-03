import React, {useContext} from 'react';
import { Container, Row, Col, Image, Card, Button, Alert } from 'react-bootstrap';
import { VoteContext } from '../../store/contexts/VoteContext';
import { CatContext } from '../../store/contexts/CatContext';
import vs from '../../assets/images/vs.PNG'
import { Link } from 'react-router-dom';
import {differenceBy} from 'lodash';

const Votes = () => {
    document.title = "CatMash | Les Votes";
    let {votes, dispatch_vote} = useContext(VoteContext);
    let {cats, shuffle, dispatch_cat} = useContext(CatContext);

    let cats_sorted = [];
    cats_sorted = shuffle(cats);
    
    if (!votes.length){
        cats_sorted = cats_sorted.slice(0,2);
    }else{
        let cats_voted = votes[0].cats_voted;
        let cats_unvoted = votes[0].cats_unvoted;
        let tmp = [];

        // Remove cats voted
        tmp = differenceBy(cats_sorted, cats_voted, 'id'); 
        
        // Remove cats unvoted
        cats_sorted = differenceBy(tmp, cats_unvoted, 'id');        

    }

    const handleSubmit = (cat) => {
        let cat_unvoted = cats_sorted.filter(item => item.id !== cat.id)[0];
        // Apply vote, increase score
        cat = {
            ...cat,
            score: cat.score ? cat.score + 1 : 1
        }
        
        dispatch_vote({
            type: 'ADD_VOTE',
            cat,
            cat_unvoted,
            username: "AurMa"
        })

        dispatch_cat({
            type: 'ADD_VOTE',
            cat
        })   
    }

    return (
        <Container>
            <div className="text-center header">
                <h2 className="text-primary">Quel est le plus beau chat ?</h2>
            </div>
            {
                cats_sorted && cats_sorted.length ? 
                    <Row>
                        <Col className=" image_card">
                            <Card className="image_card">
                                <Image src={cats_sorted[0].url} className="image_cat" thumbnail />
                            </Card>
                            <br/>
                            <Row>
                                <Col></Col>
                                <Col sm={3}>
                                    <div className="text-center">
                                        <Button variant="outline-danger" onClick={()=>handleSubmit(cats_sorted[0])}>Celui-ci</Button>
                                    </div>
                                </Col>
                                <Col></Col>
                            </Row>
                            <br/>

                        </Col>
                        <Col sm={2}>
                            <div className="text-center">
                                <img src={vs} className="versus" alt="versus"/>    
                            </div>
                        </Col>
                        <Col className="image_card">
                            <Card className="image_card">
                                <Image src={cats_sorted[1].url} className="image_cat" thumbnail />
                            </Card>
                            <br/>
                            <Row>
                                <Col></Col>
                                <Col sm={3}>
                                    <div className="text-center">
                                        <Button variant="outline-danger" onClick={()=>handleSubmit(cats_sorted[1])}>Celui-ci</Button>
                                    </div>
                                </Col>
                                <Col></Col>
                            </Row>
                            <br/>
                        </Col>
                    </Row>
                :
                    <Alert variant="info">
                        Vote terminé! Cliquez ci-dessous pour afficher le classement.
                    </Alert>
            }
            <div className="text-center">
                <Link to="/cats"><Button variant="outline-success" size="lg">Afficher le classement</Button></Link>
            </div>
        </Container>
    )
}
export default Votes;