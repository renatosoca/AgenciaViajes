import { Testimonial } from '../models/Testimonial.js'

export const guardarTestimonial = async (req, res) => {
    const {nombre, email, mensaje} = req.body;
    //Validar 
    const errores = [];
    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
        errores.push({ mensaje: 'Todos los campos son Obligatorios'});
    }
    if (errores.length > 0) {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            page: 'Testimoniales',
            errores,
            nombre,
            email,
            mensaje,
            testimoniales
        });
        return;
    };
    
    try {
        await Testimonial.create( {
            nombre,
            email,
            mensaje
        });
        res.redirect('/testimonials')
    } catch (error) {
        console.error(error);
    }
}