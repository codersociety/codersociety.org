exports.index = function(req, res){
    res.render('index', { title: 'Express' });
};

exports.about = function(req, res){
    res.render('about', { title: 'About' })
};
