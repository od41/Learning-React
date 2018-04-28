import React from 'react'
import {render} from 'react-dom'
import { hello, goodbye } from './libs'

render(
    <div>
        {hello}
        {goodbye}
    </div>,
    document.getElementById('react-container')
)