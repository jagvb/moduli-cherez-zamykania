;(function(selector1, selector2, selector3, selector4) {
	let i1 = document.querySelector(selector1);
	let btn = document.querySelector(selector2);
    let i2 = document.querySelector(selector3);
    let i3 = document.querySelector(selector4);

    btn.addEventListener("click", function() {
        console.log(+i1.value + +i2.value + +i3.value)
    })
})('#i1', '#btn',  '#i2', '#i3');




;(function() {
	let str1 = 'переменная модуля';
	let str2 = 'переменная модуля';
	let str3 = 'переменная модуля';
	
	function func1() {
		alert('функция модуля');
	}
	function func2() {
		alert('функция модуля');
	}
	function func3() {
		alert('функция модуля');
	}
    window.str1 = str1;
    window.func1 = func1;
    window.func2 = func2;
})();
// console.log(str1)
// func1()
// func2()



;(function() {
let module = {};
	module.str1 = 'переменная модуля';
	module.str2 = 'переменная модуля';
	let str3 = 'переменная модуля';
	
	module.func1 = function() {
		alert('функция модуля');
	}
	module.func2 = function() {
		alert('функция модуля');
	}
	module.func3 = function() {
		alert('функция модуля');
	}
	module.func4 = function() {
		alert('функция модуля');
	}
	module.func5 = function() {
		alert('функция модуля');
	}
    window.module = module
})();
console.log(module)




;(function() {
    function avg1(arr) {
        return sum(arr, 1) / arr.length;
    }
    
    function avg2(arr) {
        return sum(arr, 2) / arr.length;
    }
    
    function avg3(arr) {
        return sum(arr, 3) / arr.length;
    }
    
    // вспомогательная функция
    function sum(arr, pow) {
        let res = 0;
        
        for (let elem of arr) {
            res += elem ** pow;
        }
        
        return res;
    }

    window.avg = {avg1, avg2, avg3}
})()
