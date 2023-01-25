
const paginaInicio = (req, res) => {
    res.render('inicio', {
        page: 'Inicio'
    });
};
const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        page: 'Nosotros'
    });
};
const paginaViajes = (req, res) => {
    res.render('viajes', {
        page: 'Viajes'
    });
};
const paginaTestimoniales = (req, res) => {
    res.render('testimoniales', {
        page: 'Testimoniales'
    });
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
};