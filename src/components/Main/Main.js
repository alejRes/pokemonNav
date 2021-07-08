import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Form from '../../pages/Form/Form'
import List from '../../pages/List/List'
import Search from '../../pages/Search/Search'

const Main=()=> {
    return (
        <div>
            <Switch>
                <Route path='/' component={List} exact/>
                <Route path='/new' component={Form}/>
                <Route path='/search' component={Search}/>
            </Switch>
            
        </div>
    )
}

export default Main
