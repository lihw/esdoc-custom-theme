import {_$$} from '../global-elements'

// CSS file generation
import './cards.scss'

_$$('manualCard').forEach(card => {
  ;[
    ...card.querySelectorAll('a'),
    ...card.querySelectorAll('input'),
    ...card.querySelectorAll('select'),
    ...card.querySelectorAll('button'),
    ...card.querySelectorAll('[tabindex]')
  ].forEach(tabbable => {
    tabbable.setAttribute('tabindex', '-1')
  })
})
