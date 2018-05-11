app.post('/user/signup', User.signup);
app.post("/user/logout", User.logout);
app.post('/user/signin', User.signin);
app.get('/user/checkSignin', User.checkSignin);

app.get('/product/home', Product.home);
app.get('/product/detail', Product.detail);
app.get('/product/category', Product.category);
app.get('/product/search', Product.search);

app.post('/cart/add', User.signinRequired, Cart.add);
app.get('/cart/list', User.signinRequired, Cart.list);
app.post('/cart/update', User.signinRequired, Cart.update);
app.post('/cart/delOne', User.signinRequired, Cart.delOne);
app.post('/cart/delMany', User.signinRequired, Cart.delMany);
app.post('/cart/toggleCheckAll', User.signinRequired, Cart.toggleCheckAll);

app.post('/comment/add', User.signinRequired, Comment.add, Product.updatePraise);
app.get('/comment/commentList', User.signinRequired, Comment.commentList);

app.post('/address/add', User.signinRequired, Address.add);
app.post('/address/setDefault', User.signinRequired, Address.setDefault);
app.post('/address/delAddress', User.signinRequired, Address.delAddress);
app.get('/address/getAddressList', User.signinRequired, Address.getAddressList);

app.post('/order/add', User.signinRequired, Order.add);
app.post('/order/delOrder', User.signinRequired, Order.delOrder);
app.get('/order/getOrderList', User.signinRequired, Order.getOrderList);

app.post('/admin/product', User.adminRequired, Product.savePoster, Product.add);
