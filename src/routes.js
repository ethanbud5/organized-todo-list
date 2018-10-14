import React from "react";
import {Switch,Route} from "react-router-dom";
import ListProjects from "./Components/ListProjects";

export default(
    <Switch>
        <Route exact path="/" component={ListProjects}/>=
    </Switch>
)