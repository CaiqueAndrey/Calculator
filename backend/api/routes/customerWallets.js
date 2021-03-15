module.exports = app => {
    const controller = app.controllers.customerWallets;

    app.route('/api/customerWallets')
        .get(controller.listCustomerWallets)
        .post(controller.saveCustomerWallets);

    app.route('/api/customerWallets/:customerId')
        .delete(controller.removeCustomerWallets)
        .put(controller.updateCustomerWallets);
}