import { Viaje } from '../models/Viaje.js'
import { Testimonial } from '../models/Testimonial.js'

const paginaInicio = async (req, res) => {
    const promiseArray = [
        Viaje.findAll( {limit: 3} ),
        Testimonial.findAll( {limit: 3} ) 
    ];

    try {
        const resultado = await Promise.all( promiseArray );

        res.render('inicio', {
            page: 'Inicio',
            home: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.error(error);
    };
};

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        page: 'Nosotros'
    });
};

const paginaViajes = async (req, res) => {
    //consultar DB
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        page: 'Proximos Viajes',
        viajes,
    });
};

const paginaDetalleViaje = async (req, res) => {
    //consultar DB
    const { viaje } = req.params;
    try {
        const resultado = await Viaje.findOne( { where: { slug: viaje } } );
        res.render('viaje', {
            page: 'Información Viaje',
            viaje: resultado
        });
    } catch (error) {
        console.error(error)
    }
};

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            page: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.error(error)
    }
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaDetalleViaje,
    paginaTestimoniales
};