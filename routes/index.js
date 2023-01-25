import express from 'express';
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje } from '../controllers/PaginaController.js'
import {guardarTestimonial} from '../controllers/TestimonialController.js'

const router = express.Router();

router.get( '/', paginaInicio);
router.get( '/about', paginaNosotros);
router.get( '/paisajes', paginaViajes);
router.get( '/viaje/:viaje', paginaDetalleViaje);
router.get( '/testimonials', paginaTestimoniales);
router.post( '/testimonials', guardarTestimonial);

export default router;