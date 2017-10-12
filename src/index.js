'use strict'

import {Slim} from 'slim-js'
import {tag, useShadow, template} from 'slim-js/Decorators'

@tag('bs-alert')
@useShadow(true)
@template(require('./templates/index.tpl.html'))
class BsAlert extends Slim {
    
    /**
     * Default alert types
     * @type {Array}
     */
    static get TYPES () {
        return [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark'
        ]
    } 
    
    onBeforeCreated () {
        this.isDismissible = this.hasAttribute('bs-alert-dismissible')
        this.class = this.getClass()
        this.timer = undefined
    }
    
    onCreated () {
        this.$alert = $(this.alert)
        this.$alert.on('closed.bs.alert', () => this.remove())
    }
    
    onAfterRender () {
        let timeout = Number(this.getAttribute('bs-alert-timeout'))
        
        if (timeout) {
            this.timer = setTimeout(() => this.close(), timeout);
        }
    }
    
    /**
     * Alert class attribute building
     * @return {string} the alert class string
     */
    getClass () {
        let _class = 'alert'
        let type = this.type
        if (type) _class += ` alert-${type}`
        
        if (this.isDismissible) _class += ' alert-dismissible fade show'
        
        return _class
    }
    
    /**
     * Alert type parse
     * @return {string} the alert type string
     */
    get type () {
        return BsAlert.TYPES.includes(this.getAttribute('bs-alert-type')) ? 
                    this.getAttribute('bs-alert-type') :
                    BsAlert.TYPES.primary
    }
    
    /**
     * Throw alert close event
     */
    close () {
        if (this.timer) clearTimeout(this.timer)
        
        this.$alert.alert('close')
    }
}

export default BsAlert
