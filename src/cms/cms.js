import CMS from 'netlify-cms-app'
import CSSInjector from "./CSSInjector.js"

import IndexPagePreview  from './preview-templates/index-page-preview.js'

CMS.registerPreviewTemplate('indexfile', CSSInjector(IndexPagePreview))