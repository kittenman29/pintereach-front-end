import React, { setGlobal } from 'reactn';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { withRouter } from 'react-router';
import ArticleForm from '../components/ArticleForm'
import axios from 'axios';

import {editArticle} from '../actions/index';

class EditArticle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    editArticles = (article) => {
        editArticle(article)
    }
    render() {
        return(<div>Testing</div>)
    }
}

EditArticle = withRouter(EditArticle)
export default EditArticle;