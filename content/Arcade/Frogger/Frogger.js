// requires BinaryData.js

var Frogger = (function() { 
    
    var my = {};

    my.get8x8Data = function(tileAddress) {
    
    	var ret = [];
		
		var dataA = BinaryData.getData(tileAddress*8,8);
		var dataB = BinaryData.getData(tileAddress*8+2048,8);	
		
		for(var x=0;x<8;++x) {
			var a = dataA[x].toString(2);
			while(a.length<8) a="0"+a;
			var b = dataB[x].toString(2);
			while(b.length<8) b="0"+b;
			ret.push(parseInt(""+a.charAt(0)+""+b.charAt(0),2));
			ret.push(parseInt(""+a.charAt(1)+""+b.charAt(1),2));
			ret.push(parseInt(""+a.charAt(2)+""+b.charAt(2),2));
			ret.push(parseInt(""+a.charAt(3)+""+b.charAt(3),2));
			ret.push(parseInt(""+a.charAt(4)+""+b.charAt(4),2)); 
			ret.push(parseInt(""+a.charAt(5)+""+b.charAt(5),2)); 
			ret.push(parseInt(""+a.charAt(6)+""+b.charAt(6),2)); 
			ret.push(parseInt(""+a.charAt(7)+""+b.charAt(7),2)); 
		}	
		
		return rotateCCW(ret,8,8);
    	
    };
            
    function rotateCCW(data,width,height) {
    	
    	var ret = [];
    	
    	for(var x=0;x<width;++x) {
    		for(var y=height-1;y>=0;--y) {
    			ret.push(data[x+y*width]);
    		}
    	}
    	
    	return ret;
    	
    }
    
    return my;

}());
