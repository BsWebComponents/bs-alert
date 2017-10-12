'use strict'

import {Slim} from 'slim-js'
import {tag, useShadow, template} from 'slim-js/Decorators'

@tag('bs-alert')
@useShadow(true)
@template(require('./templates/index.tpl.html'))
class BsAlert extends Slim {
    
}

export default BsAlert
