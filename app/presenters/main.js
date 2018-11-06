exports.getMainPage = (req, res) => {
    res.render( 'index.html', {
        message: 'Hello, world!'
    } );
}