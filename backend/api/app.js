module.exports = app => {
    app.get('/hello', () => {console.log("Hello World")});
   // app.use('/users', require('./src/routes/users'));
};