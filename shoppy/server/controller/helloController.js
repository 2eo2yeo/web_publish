export const getHello = (req, res) => { 
    res.send('welcome to hello ~');
    res.end(); 
}

export const getHelloTest = (req, res) => { 
    res.send('test');
    res.end(); 
}